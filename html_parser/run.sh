#!/bin/bash

$PROJECT_HOME/env/bin/gunicorn \
    -b 0.0.0.0:8888 \
    --error-logfile=- \
    --access-logfile=- \
    --access-logformat="%(h)s %(l)s %(u)s %(t)s '%(r)s' %(s)s %(b)s" \
    --keep-alive 5 \
    --workers 4 \
    --worker-class "gevent" \
    parser_app:app 2>&1
