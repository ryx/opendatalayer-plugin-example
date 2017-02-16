# OpenDataLayer Example Plugin
Example plugin for OpenDataLayer, used as testbed and boilerplate for plugin development.

## Info
Build plugin as CommonJS module into `./dist` with

    npm build

Run tests with

    npm test

## Why SystemJS?
Due to the horrible state of native ES6 module suport in nodejs, we need SystemJS to be able to use ES6 modules in our tests.
This will hopefully change somewhen in the future when nodejs natively supports the `import` syntax for modules.
