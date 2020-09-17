# Svelte 3 + Typescript + Webpack Template 

This is a project template for [Svelte 3](https://svelte.dev) apps using [Webpack](https://webpack.js.org/) and 
[Typescript](https://www.typescriptlang.org/). The common build setup for svelte 3 is to use the Rollup module bundler. 
But for developers who prefer Webpack (Most devs who come from React), the information is harder to find. This starter 
template is to help those who are already familiar with Webpack and who want to quickly start developing in Svelte 3. 
This template has configured the following things:

* Svelte Loader w/ Svelte Preprocess, File loader, CSS loader, TS Loader
* Jest test runner w/ [Svelte Testing Library](https://github.com/testing-library/svelte-testing-library)
* Dev mode with sourcemaps (Note: Svelte sourcemaps are still a little flaky. Especially with Typescript)
* Production mode. Optimized bundles with code splitting
* Hot Module Replacement using [svelte-loader-hot](https://github.com/rixo/svelte-loader-hot) (Note: A little flaky)
* IDE specific: prettier and editorconfig

You will need to have [Node.js](https://nodejs.org) installed.

### Quick start in Development mode 
First..
```bash
npm install
```

Start Webpack-dev-server. Navigate to [localhost:9000](http://localhost:9000) 
```bash
npm start
```

### npm scripts

Run unit tests
```bash
npm test
```

Run unit tests in watch mode
```bash
npm run test:watch
```

Compile development source code and copy into the public/build directory
```bash
npm run build:dev
```

Compile optimized source code and copy into the public/build directory
```bash
npm run build:prod
```

Manually clean the build directory
```bash
npm run clean
```

Start a static web server pointing to whatever code has been built in public/build directory.
Navigate to [localhost:9000](http://localhost:9000)
```bash
npm run static
```
