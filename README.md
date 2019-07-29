This is a sample Car listing Single Page Application.

# Best Practices

* Component oriented code organisation, each component folder contains all relevant files for itself
* use of react hooks (useState, useEffect) in few components
* use of Error Boundaries for error handling
* use of composition technique to avoid repeatative code
* use of static type checking using PropTypes
* made this app responsive, renders best in any device
* unit test for components
* use of .editorconfig for consistent formatting
* linting as per provided by create react app by default



# Performance Optimisation

* used dynamic imports for code splitting. Creates separate chunks of bundles, leads to faster page load times
* used browser hints (preload, preconnect) to optimise resource loading

# Steps to run this app

1. checkout this repo into your local machine
2. cd into your repo
3. run 'npm install'
4. run 'npm start', Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Prerequisite:
This app relies on a mock server to fetch data from. Run mock server, it should start serving REST apis at 'http://localhost:3001'

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
