#!/bin/bash

pid=$(cat logs/webserver.pid)

kill $pid

rm logs/webserver.pid

