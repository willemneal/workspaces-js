#!/usr/bin/env node

const HELP = `Run near-willem-workspaces-ava tests. Examples:

    near-willem-workspaces-ava             # Run tests using 'ava'
    near-willem-workspaces-ava --verbose   # All other flags get passed to the 'ava' CLI
    near-willem-workspaces-ava -h, --help  # Print this (for AVA's help, use 'ava --help')`;

if (process.argv.includes('-h') || process.argv.includes('--help')) {
  console.log(HELP);
} else {
  require('ava/lib/cli.js').run(); // eslint-disable-line import/extensions
}