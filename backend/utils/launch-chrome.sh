#!/usr/bin/env bash
# Launches Chrome and allows
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
			--remote-debugging-port=9222 \
			--user-data-dir='/Users/dylanpee/Projects/sandbox-learning/puppeteer-learning/tmp/' \
			--profile-directory='Profile 2' \
			--no-first-run \
			--disable-backgound-networking