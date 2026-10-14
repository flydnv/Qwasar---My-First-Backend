# Welcome to My First Backend
***

## Task
The objective of this project is to build a simple backend web application using Node.js and Express.js. The challenge is to handle multiple HTTP GET routes, serve different types of responses (text, redirects, and random array elements), and implement basic HTTP authentication (401 Unauthorized) for protected endpoints.

## Description
I solved the problem by creating an Express server running on port 8080 with several endpoints:
- /: Returns a randomly selected Frank Sinatra song from a predefined array.
- /birth_date & /birth_city: Returns specific biographical details about Frank Sinatra.
- /wives: Lists his spouses.
- /picture: Redirects the user to his Wikipedia picture page using res.redirect().
- /public: A publicly accessible endpoint.
- /protected: A secured route that requires Basic Authentication (username: admin, password: admin). It validates the Authorization header using Base64 decoding (atob) and returns either a success message or a 401 Unauthorized status with the appropriate WWW-Authenticate header.

## Installation
To install the project dependencies, run:

npm install express

## Usage
To start the backend server, run the following command:

node server.js

### The Core Team

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV Software Engineering School Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>