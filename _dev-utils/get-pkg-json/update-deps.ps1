#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Update npm dependencies by building a temporary Docker image.

.DESCRIPTION
    Builds a temporary Docker image to install specified dependencies, 
    extracts updated package.json and package-lock.json, and cleans up.

.EXAMPLE
    ./update-deps.ps1 -Deps react, react-dom, react-router, react-router-dom, @mui/icons-material, @mui/material,  @emotion/react, @emotion/styled, -DevDeps @types/react, @types/react-dom, eslint, typescript, esbuild-loader, source-map-loader, style-loader, css-loader, webpack, webpack-cli, webpack-dev-server, html-webpack-plugin, copy-webpack-plugin, clean-webpack-plugin, webpack-bundle-analyzer, webpack-stats-plugin
#>

[CmdletBinding()]
param (
    [Parameter(Mandatory = $false)]
    [string[]]$Deps = @(),

    [Parameter(Mandatory = $false)]
    [string[]]$DevDeps = @(),

    [Parameter(Mandatory = $false)]
    [string]$Dockerfile = "./node-get-pkg.dockerfile",

    [Parameter(Mandatory = $false)]
    [string]$OutDir = "./output"
)

# --- VALIDATION ---
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    throw "Docker is not installed or not found in PATH."
}
if (-not (Test-Path $Dockerfile)) {
    throw "Dockerfile '$Dockerfile' not found."
}
if ($Deps.Count -eq 0 -and $DevDeps.Count -eq 0) {
    Write-Host "Usage: ./update-deps.ps1 -Deps react,react-dom -DevDeps typescript,eslint"
    exit 1
}

# --- CONFIG ---
$ImageName = "node-i-dep-updater"

try {
    # --- BUILD IMAGE ---
    Write-Host "Building temporary dependency image..."
    docker build `
        -f $Dockerfile `
        --build-arg "DEPS=$($Deps -join ' ')" `
        --build-arg "DEV_DEPS=$($DevDeps -join ' ')" `
        -t $ImageName . | Write-Host

    if ($LASTEXITCODE -ne 0) {
        throw "Docker build failed."
    }

    # --- CREATE TEMP CONTAINER ---
    $CID = docker create $ImageName
    if (-not $CID) {
        throw "Failed to create Docker container."
    }

    # --- COPY OUTPUT FILES ---
    Write-Host "Extracting package.json and package-lock.json..."
    if (!(Test-Path $OutDir)) {
        New-Item -ItemType Directory -Path $OutDir | Out-Null
    }

    docker cp "${CID}:/usr/src/app/package.json" (Join-Path $OutDir "package.json")
    docker cp "${CID}:/usr/src/app/package-lock.json" (Join-Path $OutDir "package-lock.json")

} catch {
    Write-Error "Error: $($_.Exception.Message)"
    exit 1
} finally {
    # --- CLEANUP ---
    Write-Host "Cleaning up..."
    if ($CID) { docker rm $CID | Out-Null }
    docker image rm $ImageName -f | Out-Null
}

Write-Host "Done! New manifests saved in $OutDir"
Write-Host "To do: Commit package.json and package-lock.json to version control."