#!/bin/bash
typescript_installed=$(npm list -g typescript | grep typescript)

if [ -z "$typescript_installed" ]
then
    npm install --global typescript@4.1.2
fi

bash