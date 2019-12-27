FROM alpine:3.8

RUN apk --no-cache add \
    nginx supervisor curl && \
    apk add --no-cache --repository http://dl-3.alpinelinux.org/alpine/v3.8/main/ nodejs=8.14.0-r0 nodejs-npm=8.14.0-r0 automake autoconf nasm zlib-dev && \
    npm config set unsafe-perm true && \
    npm install -g grunt-cli && \
#    npm cache clear && rm -rf /tmp/npm-* && \
    npm config set unsafe-perm false && \
    npm install -g webpack webpack-dev-server webpack-cli

COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN mkdir -p /var/www/html
WORKDIR /var/www/html
COPY app/ /var/www/html/

EXPOSE 80 443

COPY docker/startup.sh /startup.sh
RUN chmod +x /startup.sh

CMD ["/startup.sh"]