################
# Dockerfile
# custom node server
#
# by Adam Coppola
##################

FROM node:latest
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /usr/src/app
COPY ./node/package*.json /usr/src/app/
# RUN npm install
RUN --mount=type=cache,target=/usr/local/app/.npm \
  npm set cache /usr/local/app/.npm && \
  npm ci --package-lock && \
    # alt: --only=production
  npm cache clean --force && \
  rm -f .npmrc
    # about: for build speed
COPY --chown=node:node ./node/ /usr/src/app/
CMD ["dumb-init", "npm", "start"]