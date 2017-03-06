## Running the app
This project is using yarn.

* `yarn global install webpack-dev-server rimraf webpack` to install required global dependencies
* `yarn install` to install all dependencies

After you have installed all dependencies you can now run the app. Run `yarn run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
yarn run server
# production
yarn run build:prod
yarn run server:prod
```

## Other commands

### build files
```bash
# development
yarn run build:dev
# production (jit)
yarn run build:prod
# AoT
yarn run build:aot
```

### hot module replacement
```bash
yarn run server:dev:hmr
```

### watch and build files
```bash
yarn run watch
```

### run unit tests
```bash
yarn run test
```

### watch and run our tests
```bash
yarn run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (optional, done automatically by postinstall script)
yarn run webdriver:update
# this will start a test server and launch Protractor
yarn run e2e
```
