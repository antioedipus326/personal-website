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
# to do: i think the following line can be removed if node_modules is populated, that is, if rebuilding?
# RUN npm install
RUN --mount=type=cache,target=/usr/local/app/.npm \
  npm set cache /usr/local/app/.npm && \
  npm ci --package-lock && \
    # alt: --only=production
  npm cache clean --force && \
  rm -f .npmrc
    # about: the mount and cache are only to speed up build?
COPY --chown=node:node ./node/ /usr/src/app/
CMD ["dumb-init", "npm", "start"]

##########
# Backlog

# use systemctl status nodeapp as a test somewhere

# security checks: https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/

# use falsify for signal logging:  https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/

# graceful shutdown with falsify: https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
  
# research whether to run npm run build in build phase or ever
# split build and stage phase
# get specific base node image version for each build and serve

# https://medium.com/@akshatgadodia/a-comprehensive-guide-to-structuring-node-js-projects-best-practices-and-example-44eb493920ca
# https://devcenter.heroku.com/articles/node-best-practices
# https://github.com/goldbergyoni/nodebestpractices