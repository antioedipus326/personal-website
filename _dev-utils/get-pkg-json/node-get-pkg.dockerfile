#####################
# DockerfileGetPkg
# By Adam Coppola
# To do: make this file match Dockerfile.node better

FROM node:latest
WORKDIR /usr/src/app
COPY base-package.json ./package.json

# initialize args to handle empty call
ARG DEPS=""
ARG DEV_DEPS=""

# Pass dependencies from build arguments to npm install command
RUN set -eux; \
    if [ -n "$DEPS" ]; then \
      npm install $DEPS; \
    fi; \
    if [ -n "$DEV_DEPS" ]; then \
      npm install --save-dev $DEV_DEPS; \
    fi

# Default command for debugging
CMD ["npm", "list"]