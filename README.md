# Lavells-Tech-Chronicle

## Description 

Lavells-Tech-Chronicle is a CMS-style blog website, akin to WordPress, where developers can publish blog posts and comment on other developers' posts. The structure of this blog website follows the Model-View-Controller (MVC) design pattern. It uses Handlebars.js as the templating language for the views, Sequelize as the ORM for the models, and Express.js as the routing framework for the controllers. The blog site includes features like user registration and login, post creation, comment addition, as well as the ability to update or delete posts. This website implements session-based authentication using the express-session and connect-session-sequelize npm packages, whereby a user must log in to access certain features and will be logged out after a period of inactivity. The bcrypt npm package is used to hash passwords for enhanced security, while the dotenv package is used for environment variable management. MySQL is used as the database for this project.

## User Story

AS A developer who writes about tech <br>
I WANT a CMS-style blog site <br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions <br>

## Acceptance Criteria

GIVEN a CMS-style blog site <br>
WHEN I visit the site for the first time <br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in <br>
WHEN I click on the homepage option <br>
THEN I am taken to the homepage <br>
WHEN I click on any other links in the navigation <br>
THEN I am prompted to either sign up or sign in <br>
WHEN I choose to sign up <br>
THEN I am prompted to create a username and password <br>
WHEN I click on the sign-up button <br>
THEN my user credentials are saved and I am logged into the site <br>
WHEN I revisit the site at a later time and choose to sign in <br>
THEN I am prompted to enter my username and password <br>
WHEN I am signed in to the site <br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out <br>
WHEN I click on the homepage option in the navigation <br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created <br>
WHEN I click on an existing blog post <br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment <br>
WHEN I enter a comment and click on the submit button while signed in <br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created <br>
WHEN I click on the dashboard option in the navigation <br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post <br>
WHEN I click on the button to add a new blog post <br>
THEN I am prompted to enter both a title and contents for my blog post <br>
WHEN I click on the button to create a new blog post <br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post <br>
WHEN I click on one of my existing posts in the dashboard <br>
THEN I am able to delete or update my post and taken back to an updated dashboard <br>
WHEN I click on the logout option in the navigation <br>
THEN I am signed out of the site <br>
WHEN I am idle on the site for more than a set time <br>
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts <br>


## Deployed URL

https://lavells-tech-chronicle.herokuapp.com/


## Github Repository

https://github.com/bragceo/Lavells-Tech-Chronicle

## Screenshots
<img width="1434" alt="Screen Shot 2023-05-18 at 5 11 25 AM" src="https://github.com/bragceo/Lavells-Tech-Chronicle/assets/119948453/b8e40a05-4c7c-4686-ba91-bad75e83066d">

<img width="1434" alt="Screen Shot 2023-05-18 at 5 11 35 AM" src="https://github.com/bragceo/Lavells-Tech-Chronicle/assets/119948453/60fc527d-c153-4dac-9400-040c662d495d">
<img width="1434" alt="Screen Shot 2023-05-18 at 5 12 08 AM" src="https://github.com/bragceo/Lavells-Tech-Chronicle/assets/119948453/106a6d7c-240b-4466-8b8d-dc23c55f52b0">
<img width="1434" alt="Screen Shot 2023-05-18 at 5 12 22 AM" src="https://github.com/bragceo/Lavells-Tech-Chronicle/assets/119948453/cea5f4bf-61e9-4838-9bdb-1b0f45538f33">
<img width="1434" alt="Screen Shot 2023-05-18 at 5 13 39 AM" src="https://github.com/bragceo/Lavells-Tech-Chronicle/assets/119948453/f8e0b49b-6a60-46e5-a309-49430c53ee03">
<img width="1434" alt="Screen Shot 2023-05-18 at 5 20 22 AM" src="https://github.com/bragceo/Lavells-Tech-Chronicle/assets/119948453/4e8f6eb7-c3b4-4220-b14c-63308c203470">
<img width="1434" alt="Screen Shot 2023-05-18 at 5 20 44 AM" src="https://github.com/bragceo/Lavells-Tech-Chronicle/assets/119948453/6a4e44af-849e-4c45-b489-d11e01057e9c">

## Overview of Code structure and its components:

Server Setup (server.js): The starting point for our application. It sets up an Express server and defines the port that the server will listen to. Middleware is also set up here for data parsing, static file serving, and user session handling.

Database Connection (config/connection.js): This file sets up the connection to the MySQL database using Sequelize, an ORM (Object-Relational Mapping) tool for Node.js. It exports the configured Sequelize instance for use in other parts of the application. The database name, user, and password are all loaded from environment variables.

Models (models directory): The models represent the data structures in the application. There are models for User, Post, and Comment. They define the structure of the database tables and the relationships between them (e.g., a User can have many Posts, a Post can have many Comments).

Routes (routes directory): The routes handle the business logic of the application. There are separate route files for different parts of the application (e.g., homepage, dashboard, API). They define what happens when a client makes a certain request to the server. This includes retrieving data from the database, rendering views, or returning JSON data.

Views (views directory): The views are the templates for the HTML that gets sent to the client. They are written using Handlebars.js, a templating language that allows for dynamic HTML generation. There are separate views for different parts of the application (e.g., homepage, dashboard, login page).

Public Directory (public directory): This directory contains static files like CSS and client-side JavaScript files. These files are sent directly to the client as they are.

Middleware: Middleware functions are used to modify the request and response objects between the time a request is made by the client and the time a response is sent by the server. In this application, middleware is used for several purposes, including parsing incoming request data, setting up user sessions, and serving static files.

Session Handling: The express-session package is used to handle user sessions. When a user logs in, a session is created that keeps track of their logged-in status. The session data is stored in a cookie on the client-side, which gets sent back to the server with each request. If the user is idle for too long, the session will expire and they will have to log in again.

Password Hashing: User passwords are hashed using the bcrypt package before being stored in the database. This is a security measure that protects user passwords in the event of a data breach.

Environment Variables: Sensitive data, like the database username and password, are stored in environment variables. This is a security measure that keeps this data out of the codebase. The dotenv package is used to load these variables from a .env file.
 

## How to run the application
 
Running the application locally:

You can start your Express.js server by running the command npm start or node server.js in your terminal from the root directory of your project.

Access the application: Now your application should be running. You can access it by opening a web browser and navigating to http://localhost:3001, or whatever port you specified in your server.js file.

Deploying the application with Heroku:

Heroku is a cloud platform that lets you deploy, run, and manage applications. To deploy your app on Heroku, you need to:

Create a Heroku account: If you don't have a Heroku account, create one on the Heroku website.

Install the Heroku CLI: The Heroku Command Line Interface (CLI) makes it easy to create and manage your Heroku apps directly from the terminal. It's available for Windows, macOS, and Ubuntu.

Log in to Heroku: After installing the CLI, open your terminal and log in to your Heroku account using the command heroku login.

Create a new Heroku app: Navigate to your project's directory in the terminal and create a new Heroku app using the command heroku create.

Set environment variables: Use the command heroku config:set VARNAME=value to set each of your environment variables. Remember to replace VARNAME and value with your actual variable names and values.

Provision a database: If your app requires a database, you can provision a new one using Heroku's add-ons. For a MySQL database, you can use the ClearDB add-on with the command heroku addons:create cleardb:ignite.

Deploy your app: Commit your changes using Git, and then push your app to Heroku using the command git push heroku master.

Open your app: Use the command heroku open to view your deployed app in the browser. You can also visit the app directly by going to https://your-app-name.herokuapp.com, replacing your-app-name with the name of your Heroku app.



## Special Thanks 

Shout out to the awesome Instructors and TAs who worked with me through numerous challenges. These individuals include: Diego, Enrique Gomes, and Erik Hoverstein. 

Additional resources:

Note, I was able to use code from Project 2.




## Authors 

Lavell Juan <br>



## Credits 

N/a

## License 

Please refer to license in repo 
