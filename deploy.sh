#!/bin/bash

key='../../keys/vala-demo-aws.pem'
svr='ubuntu@18.221.177.61'
target_dir='/home/ubuntu/vala-demo-ng'

ng build --prod
chmod 400 $key
ssh -i $key -f $svr "mkdir -p $target_dir"
scp -i $key -rp dist/vala-demo-ng/* $svr:$target_dir
