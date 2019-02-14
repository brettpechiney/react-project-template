# React Project Template

> A template for React projects.

## Build and Run

### Initial Setup
The application requires node version 11.9.0 or higher and npm version 6.5.0 or higher

### Install Project Dependencies
```
npm install
```

### Start Local Server On Port 3000
```
npm start
```

### Build for Production with Minification
```
npm run build
```

### Build for Production and View the Bundle Analyzer Report
```
npm run build --report
```

### Run Unit Tests
```
npm test
```

### Run Unit Tests with Coverage Report
```
npm test -- --coverage
```

### Run Unit Tests with Verbose Results
```
npm test -- --verbose
```

### Run and Watch Unit Tests
```
npm test -- --watch
```

### Run Tests for a Specific Suite
```
npm test -- ExampleComponent
```

### Run Linting
```
npm run lint
```

### Run Linting with Fix
```
npm run lint:fix
```

### Run eslint-config-prettier's CLI Conflict Detection Tool
```
npm run lint:check
```

### Run Flow Type Checking
```
npm run flow
```

## Local Configuration
> For those using VSCode or similar IDE, please be sure to install both the `EditorConfig` and `ESLint` extensions as they are integral to enforcing
> code consistency and uniformity throughout the application.

## Hot Module Reloading and Dynamic Imports
> Non home-page routes will need to be dynamically imported, examples of which can be found in `src > routes > index.js`. These components will need to be
> manually wired up to accept hot module reloading via `react-hot-loader`. Again, reference the dynamically imported components for example.
