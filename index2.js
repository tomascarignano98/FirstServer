/*
A middleware function is basically a function that takes the request object
and either returns a response to the client, terminating the request - response 
cycle, or passes control to the next middleware function.

An express application is nothing but a bunch of middleware functions. 
Every route handler function is technically a middleware function. 
Another example is the method express.json() which returns a middleware function.
The job of this middleware function is to read the request and if there's a JSON
obj in the body of the request, it will parse the body into a JSON obj, 
and then will set the request.body property.

We call app.use() to install a middleware function in our request processing pipeline.

*/
