<h2 align="center">
  My Portfolio Website (React.JS) <br/>
</h2>

<br/>

Link: https://rishirajghosh.github.io

A responsive portfolio website I created using React, JavaScript, HTML &amp; CSS

## Features:

I created a variety of unique features on my portfolio website:
- Dynamic header/navbar that changes as you scroll down the page to become a sidebar via React & CSS
- Implemented react-tsparticles and conditional settings via useEffect, useCallback, and useState in order to make particles (w/ random size and direction) start after 3 seconds of page load
- Used react-typed, useState, and useEffect to create the typewriter effects on my portfolio
- Advanced CSS features such as my contact card images glowing on hover and my "RG" logo glowing on hover of the navbar and website header
- Work, Skills, Projects, Contact, and Resume sections 

## Docker Instructions:

Due to using ReactJS instead of NodeJS:
- To build: ```docker build -t react-web-app .```
- To run: ```docker run --name "website" -p 8080:80 -d react-web-app```
- To test docker-compose.yml: ```docker-compose up -d --force-recreate```
- Since the nginx web server must use HTTP port 80, I am running the docker container on localhost:8080/ instead of localhost:80. This way, when I start up docker-compose.yml, the nginx web server can successfully run without conflicting with my ReactJS application on port 80.

## Built With

I used these technologies to build my portfolio website:

- React
- JavaScript
- HTML
- CSS
