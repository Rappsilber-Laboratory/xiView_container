#!/bin/sh
touch /home/col/annotator/command_has_run;
while true; do sleep 1; /usr/lib/jvm/java-1.8.0-openjdk-amd64/bin/java -DBASE_URI=https://0.0.0.0:8083/xiAnnotator/ -jar /home/col/annotator/xiAnnotator-1.4.25.jar; done; 
