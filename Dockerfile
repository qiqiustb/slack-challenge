FROM ubuntu:14.04

# bower needs git to clone all of its dependencies' repos
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    nginx \
    git \
    nodejs-legacy \
    npm

ADD . /work
WORKDIR /work

# Install dependencies
RUN npm install && \
    $(npm bin)/bower install -p --config.interactive=false --allow-root && \
    $(npm bin)/gulp

EXPOSE 8888
CMD /usr/sbin/nginx -c /work/nginx.conf
