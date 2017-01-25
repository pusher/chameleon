# Chameleon Docs

This repo contains the source and compiled docs for [Chameleon](https://github.com/pusher/chameleon).

## Building
The site is built on Jekyll, which allows us to host the site on Github Pages. However due to restrictions on external plugins, the site should first be compiled locally, and then pushed on to the `gh-pages` branch.

A Rakefile is included which automates this.

To build the site, run: `rake site:publish`.

This will:
- Compile the jekyll site
- Create a new git commit with the new site
- Push to the live gh-pages branch
