#!/bin/sh

echo "start server"
/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf