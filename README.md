# yarn-or-die

Force using yarn instead of npm in package.json scripts.

## Installing

Install as a dev dependency.

```sh
npm install --save-dev yarn-or-die
```

Or using yarn

```sh
yarn add -D yarn-or-die
```

## Using

In package.json, add a pre-script that ensures yarn is being used. Example:

```json
  "scripts": {
    "pretest": "yarn-or-die",
    "test": "echo hello"
  }
```

If you want to ensure yarn is being used to install packages, you can do like this:

```json
  "scripts": {
    "preinstall": "yarn-or-die"
  }
```

If you now issue the command `npm install`, an exception will be thrown and install will not run. If you run `yarn` or `yarn install`, the installation will continue. This can be useful if you depend on all developers in your team using the `yarn.lock` file.

Use `yarn --ignore-scripts` or `npm install --ignore-scripts` if you run into trouble the first time you run `yarn`, `yarn install` or `npm install` because `yarn-or-die` is not installed
