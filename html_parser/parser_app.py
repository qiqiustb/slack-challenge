# -*- coding: utf-8 -*-
import logging
from collections import defaultdict

import requests
import requests.packages.urllib3
from bs4 import BeautifulSoup
from flask import Flask
from flask import abort, json, jsonify, make_response, request, Blueprint, Response

requests.packages.urllib3.disable_warnings()

logger = logging.getLogger(__name__)

app = Flask(__name__)

@app.before_first_request
def setup_logging():
    if not app.debug:
        app.logger.addHandler(logging.StreamHandler())
        app.logger.setLevel(logging.INFO)

@app.route("/api/url")
def analyze_url():
    """Parse HTML"""
    url = request.args.get('url')
    if not url.startswith('http'):
        url = 'http://' + url
    try:
        resp = requests.get(url, verify=False)
        html = resp.text
        summary = parse_html(html)
    except Exception:
        abort(500)
    return jsonify({
        'source': html,
        'summary': summary,
    })

def parse_html(html):
    soup = BeautifulSoup(html, 'lxml')
    tag_counter = defaultdict(int)
    for child in soup.recursiveChildGenerator():
        if child.name is not None:
            tag_counter[child.name] += 1
    return tag_counter


if __name__ == '__main__':
    # Run in debug mode if running locally. This gives a console in the browser
    # in case of unexpected errors.
    app.run(host='0.0.0.0', port=8080, debug=True)
