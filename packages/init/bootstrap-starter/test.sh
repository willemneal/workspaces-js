#!/bin/bash

# This script is for use with Linux/macOS/Unix.
# It was auto-generated by near-willem-workspaces-ava,
# and only runs the tests in the `near-willem-workspaces` folder.
cd near-willem-workspaces
npm install
npm run test -- $@ # pass along any CLI flags, such as `--verbose`