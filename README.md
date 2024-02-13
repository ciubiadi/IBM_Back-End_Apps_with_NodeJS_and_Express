# Developing Back-End Apps with Node.js and Express
## Road to IBM Full Stack Software Developer Professional Certificate
This repo contains Hands On Labs Practices of the course on different branches. The main branch contains the first Lab, which is about the CRUD Operations with Node.js and Express.

Objectives:
* Create API endpoints to perform Create, Retrieve, Update and Delete operations on transient data with an Express server.
* Implement authentication at the session level using JSON Web Tokens (JWT) for authorized access.

## Notes
In the notes.txt file I wrote my notes regarding the main intakes and insights of the course. Basically, what I've learned is highlighted in this file.

### Used Tools/Reources
- Postman : https://web.postman.co/workspace/My-Workspace~df12a983-fb8c-4ad7-89dd-0e7cd0513d67/request/create?requestId=c0bf6858-3e83-40f6-8e0f-25687b82d38b

### Module 1 Overview:
* Backend technologies encompass diverse servers and supporting infrastructures, including programming languages, frameworks, and hardware.
* Node.js serves as the server-side counterpart to JavaScript.
* The require statement, with dynamic binding and synchronous execution, is universally accessible within app code. In contrast, the import statement, with static binding and asynchronous behavior, is confined to the file's start.
* Client-side JavaScript manages front-end UI elements, while server-side JavaScript facilitates access to various servers and web applications.
* Node.js applications, empowered by server-side JavaScript, process and direct web service requests from clients.
* To share a function or value with Node.js applications importing your module, assign a property to the implicit exports object.
* Core modules offer minimal functionality, local modules are application-specific creations, and third-party modules are community-developed.
* A local installation restricts package access to the installed directory, while a global installation grants package access to any machine application.

### Module 2 Overview:
* Asynchronous network operations employ callback functions to prevent blocking JavaScript code.
* Callback functions must invoke another callback to relay a message from the Node.js module to the main application after receiving a response.
* Nested callbacks, although effective, can pose challenges in readability and debugging. Inversion of control raises trust concerns in dealing with third-party code.
* Promise objects prove most beneficial for time-consuming operations that can block resources.
* JSON.parse() and JSON.stringify() are essential methods for parsing JSON objects.

### Module 3 Overview:
* Developers leverage third-party packages to extend Node.js functionality.
* The npm application is the tool for managing Node.js packages within your framework installation.
* The MVC architecture segregates the back-end application into the model, view, and controller components.
* REST API frameworks utilize HTTP methods for inter-communication.
* Express abstracts low-level details, and routing can be managed at the application or router level.
* Five middleware types include application-level, router-level, error handling, built-in middleware, and third-party middleware.
* Template rendering allows servers to dynamically fill in content.
* In an Express application, requiring the npm jsonwebtoken package is crucial for user authentication.

Express Best Practices.
* Use a directory structure in both an Express.js application and an API that includes node_modules/ config/, models/, and routes/ folders
* Best practiices when developing RESTfuil APIs include:
    - Use a noun as a resource identifier
    - Use HTTP status codes correctly
    - Black-box test REST APIs using SuperTest. Black box testing, a form of testing that is performed with no knowledge of a system's internals, can be carried out to evaluate the functionality, security, performance, and other aspects of an application. Dynamic code analysis is an example of automated black box security testing.
    - Use JWT-based stateless authentication
    - Include good documentation ( for APIs especially)
* Other tips include:
    - Following capitalization conventions
    - Use config files for variables and group similar functioning routes into their own files

What I loved about this course :
- It explained components of the back end of a web application
- It highlighted the importance of a robust, scalable back end 
- It provided usefull information about Node.js Modules concept
- It exaplined very well the Asynchronous I/O with Callback Programming: this topic covered the way that Node.js works in a non-blocking manner. 
- It showed how Node.js framework receives an HTTP response message from the remote server and it calls the callback function and handles the Http response message.
- It emphatised how callbacks work
- They provided amazing Glossaries and Cheatsheets with key concepts and essential/fundamental operations/structures of code
- Very well built Practice Quizes and Graded Quizes which cover very well the provided knowledge and test your logic behind.
- They explained Routing, Middleware, Routers and Templating in a simple manner but covered the concepts in depth
- They covered Authentication and Authorization handling in NodeJS

- It provided insights and viewpoints of experts( like James Reeve and Daniel Rudnitski who are Full Stack Software Engineers at IBM ) regarding: 
* Server-Side JavaScript and Node.js, 
* Using Anonymous Callback Functions in Node.js
* Using JSON & JavaScript
* Working with Third-Party Node.js Extensions
* Working with Back-end JavaScript Frameworks and Express

- The course had hands-on Labs for topics like: 
* Creating a Server with ServerSide JAvaScript 
* Promises and Callbacks
* Async Callback Programming
* CRUD Operations with Node.js and Express
* Work on Middlewares, use JWT for authentication with Express server
