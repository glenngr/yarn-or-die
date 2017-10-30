#!/usr/bin/env node

const usingYarn = process.env.npm_config_user_agent.indexOf('yarn') !== -1;

if (!usingYarn) {
    throw new Error('You have to use Yarn instead of NPM for this command');
}

process.exit(0);
