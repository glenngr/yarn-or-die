#!/usr/bin/env node

const usingYarn = process.env.npm_execpath.indexOf('yarn') !== -1;

if (!usingYarn) {
    throw new Error('You have to use Yarn instead of NPM for this command');
}

process.exit(0);
