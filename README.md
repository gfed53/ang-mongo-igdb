# GameHunter (The Front End)

## Overview

A video game-themed MEAN stack app powered by the [IGDB API](https://www.igdb.com/api). Check out the live current demo [here](http://game-hunter-315.herokuapp.com/)!

## What It Does

This app allows the user to search for a particular game of interest, then grab similar games based on user-specified criteria (restricting game platform, time period, etc.) as well as an internal algorithm I've created.

## Project Structure

I have the front and back end isolated in their own directories. This particular repo solely contains the front end portion of the app. The back end is in a completely different [repo](https://github.com/gfed53/ang-mongo-igdb-be).

## Setup (Local)

The following steps will guide you towards running the entire app locally. Note that, in the app's current form, deploying the app would require different steps due to the project architecture.

### Initial Steps/Prerequisites

* You must have Node.js, npm, MongoDB and the Angular CLI installed locally.
  * [Node/npm instructions](https://www.npmjs.com/get-npm)
  * [MongoDB site](https://www.mongodb.com/)
  * From the command line, install the Angular CLI globally with `npm install -g @angular/cli`

### Setting Up The Back End

* You first need to create a local MongoDB database so that you can run MongoDB. Since the back end connects to MongoDB, it needs to be running in the background. For this setup, we can just run MongoDB locally. The [MongoDB installation and setup page](https://docs.mongodb.com/manual/installation/) gives specific instructions on installing and running MongoDB based on your operating system.

* From the command line, navigate to the directory where you'd want the app to live, and clone the back end of the app with `git clone https://github.com/gfed53/ang-mongo-igdb-be.git`.

* Navigate to your newly cloned repo, and install all dependencies using `npm i` in the terminal.

* You will need an [IGDB API key](https://www.igdb.com/api) to run this app. Navigate to `./server/config.js`. There is an exported KEYS object with an igdbKey property. Set that property with the value of your acquired API key.

* In one terminal window, run MongoDB (again, instructions [here](https://docs.mongodb.com/manual/installation/)), and then in another window, start up the back end of the app by running `npm start`. The back should now be running at localhost:3000.

### Setting Up The Front End

* In your project directory, navigate to the directory where you'd want the app to live (ideally the same directory as the back end), and clone the front end with `git clone https://github.com/gfed53/ang-mongo-igdb.git`.

* Navigate to your newly cloned repo, and install all dependencies using `npm i` in the terminal.

* While the back end is running at localhost:3000, you can start up the front end by entering `npm start`. The front end should now be running at localhost:4200.

* You should now be able to open up your browser at localhost:4200, and use the app!


Setup instructions for a full stack build (all in a single repo) are coming!

