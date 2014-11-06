#!/usr/bin/env bash

if [ -z "$1" ]; then

    echo iPhone-4s
    echo iPhone-5
    echo iPhone-5s
    echo iPhone-6-Plus
    echo iPhone-6
    echo iPad-2
    echo iPad-Retina
    echo iPad-Air
    echo Resizable-iPhone
    echo Resizable-iPad
    echo
else
    ios-sim launch platforms/ios/build/emulator/HelloCordova.app --devicetypeid "com.apple.CoreSimulator.SimDeviceType.$1, 8.0"
fi;
