#!/bin/bash

node.exe scripts/web-server.js >logs/webserver.log 2>&1 &

echo $! > logs/webserver.pid

