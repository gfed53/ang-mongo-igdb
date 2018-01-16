# AngMongoIGDB


## About

A MEAN stack app using the [IGDB API](https://www.igdb.com/api) and possibly the [CheapShark API](http://www.cheapshark.com/api/). Currently in development.

## What It Does

The goal is to allow the user to search for a particular game of interest, then be able to grab similar games based on user-specified criteria (restricting game platform, time period, etc.) as well as an internal algorithm I've created.

## Project Structure

I have the front and back end isolated in their own directories, `client-main` and `server-main`. As of now, the backend is in a completely different private repo, so note that `server-main` is not being utilized at all at this time. I plan to move the actual backend into server-main in the future when deploying.