KaseyBon
========

Portfolio site for Kasey Bonifacio - [kaseybon.com](http://kaseybon.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/01f76de9-e428-480f-b8c7-94574d6ec54f/deploy-status)](https://app.netlify.com/sites/kaseybon/deploys)

## Getting Started
**Requirements**
* [Node](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

**Initial Setup**
* Run `npm install`

**Run Development Environment**
* Run `npm start`

**Run Production Environment**
* Run `NODE_ENV=production npm start`

### Notes
* All code compiles to the `dist/` directory
* All source code lives in the `src/` directory
* Running the project locally in development will start a server and watch task
* Development runs on [localhost://3000](http://localhost:3000/)

## Tasks
* **Clean** - Deletes an existing `dist/` directory
* **Copy** - Copies any assets in `src/public/` to `dist/`
* **Pages** - Copies any assets in `src/pages/` to `dist/`
* **Sass** - Compiles any assets in `src/scss` to `dist/css`
* **Scripts** - Copies any assets in `src/js` to `dist/js`
* **Server** - Spins up an [Express](https://expressjs.com/) server on [localhost://3000](http://localhost:3000/)
* **Watch** - Watches for any changes in `src/` files and runs the corresponding task to update the local environment

### Notes
* For now pages and scripts are simple enough that they do not need more complex compile tasks
* Watch task requires a manual browser refresh
