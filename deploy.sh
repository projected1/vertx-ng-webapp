#!/bin/bash

key='../../keys/vertx-demo-aws.pem'
svr='ubuntu@18.221.177.61'
target_dir='/home/ubuntu/vertx-ng-demo'

ng build --prod
chmod 400 $key
ssh -i $key -f $svr "mkdir -p $target_dir"
scp -i $key -rp dist/* $svr:$target_dir
