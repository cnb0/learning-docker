#!/bin/bash
docker tag hello-world:latest prodock0/hello-world:v3
docker push prodock0/hello-world:v3
