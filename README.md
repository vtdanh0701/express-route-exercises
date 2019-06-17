# Express Route Exercises

You will be using the provided application to solve the following problems using Express route patterns and controller functions. Every problem in here is solveable using the route patterns we just learned.

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
  * Use `nodemon` to start the server

#### Read the Code

* After setup, **STOP**. You're using an existing application, so make sure to read the code and ensure what the application does. Some questions you may want to ask yourself:
  * Has Express been added?
  * Are there any default routes?
  * What port is the server going to listen on?

## Exercises

1. Add a route that goes to `/parent` and responds with the string "I am the parent". Add two more routes, one that goes to `/parent/son` and one that goes to `parent/daughter` and have each identify themselves accordingly.
2. Add a route that responds to the URL `/hello/:name` where `:name` is a route parameter that the user will type in when they hit the URL. Have the route say Hello to the name provided.
3. Add a route that responds to the URL `/hello/SEI`. Have it respond with the string "Welcome to SEI!"
  a. You may notice some trouble getting this route to work. Why do you think this is? Take a look at the route from number 2 to see if it might be affecting things.
  b. How can you change your routes to fix this issue?
4. Add a route that takes two route parameters, like so: `/:name/:thing`. Have the route respond by saying the thing to the name (e.g. "Thing, Name.)
5. Add a route that uses the wildcard `/*` to take at least 6 strings separated by forward slashes. You should store them in an array, change every even-indexed word in the array to uppercase, join them into a string, and respond with that string.
6. Add a route  that responds to the URL `/console` that takes a query string. Inside your route function, simply have it console log that query string. Where is the console in a Node/Express app? Check to make sure the key-value pairs printed. When you are done, at the end of the function, just respond with "done".
7. Add a route that repsonds to the URL `/color` that takes a query string of the format `color=red` (substituting the colors blue, green, black, or any valid CSS color) and returns an `h1` element with the text of "COLOR" styled to be the color specified in the query string.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.