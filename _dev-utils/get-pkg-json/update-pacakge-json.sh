#!/usr/bin/env bash
# usage: ./update-deps.sh react react-dom --dev typescript eslint
set -euxo pipefail

# --- CONFIG ---
DOCKERFILE=Dockerfile-node-GetPkg

OUT_DIR=./out       
    # about: place to export pacakge.json and package-lock.json
IMAGE_NAME=node-i-dep-updater

# --- HELP ---
usage() {
  echo "Usage: $0 [--dev <devDeps>] <deps...>"
  echo "Example: $0 react react-dom --dev typescript eslint"
  exit 1
}

# --- ARG PARSING ---
DEPS=()
DEV_DEPS=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dev)
      shift
      while [[ $# -gt 0 && ! "$1" =~ ^-- ]]; do
        DEV_DEPS+=("$1")
        shift
      done
      ;;
    -h|--help)
      usage
      ;;
    *)
      DEPS+=("$1")
      shift
      ;;
  esac
done

if [[ ${#DEPS[@]} -eq 0 && ${#DEV_DEPS[@]} -eq 0 ]]; then
  usage
fi

# --- BUILD IMAGE ---
echo "Building temporary dependency image..."
docker build -f "$DOCKERFILE" \
  --build-arg DEPS="${DEPS[*]}" \
  --build-arg DEV_DEPS="${DEV_DEPS[*]}" \
  -t "$IMAGE_NAME" .

# --- CREATE TEMP CONTAINER ---
CID=$(docker create "$IMAGE_NAME")

# --- COPY OUTPUT FILES ---
echo "Extracting package.json and package-lock.json..."
mkdir -p "$OUT_DIR"
docker cp "$CID":/usr/src/app/package.json "$OUT_DIR"/
docker cp "$CID":/usr/src/app/package-lock.json "$OUT_DIR"/

# --- CLEANUP ---
echo "Cleaning up..."
docker rm "$CID" >/dev/null
docker image rm $IMAGE_NAME

echo "Done! New manifests saved in $OUT_DIR"
echo "   Commit package.json and package-lock.json to version control."