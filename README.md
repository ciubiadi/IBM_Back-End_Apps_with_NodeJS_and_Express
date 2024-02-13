# Developing Back-End Apps with Node.js and Express
## Hands on Lab: Book Review Application
### FINAL PROJECT SCENARIO
In this project I assumed the role of a back-end developer working for an online retailer selling books. I have been tasked with developing a server-side application that stores, retrieves and manages book ratings and reviews.

My server-side application is required to provide the following features and capabilities to allow users to:
* Retrieve a list of all books available in the bookshop
* Search for specific books and retrieve their details based on the book’s ISBN code, author names and titles
* Retrieve reviews/comments for specified books
* Register as a new user of the application
* Login to the application
* Add a new review for a book (logged in users only)
* Modify a book review (logged in users can modify only their own reviews)
* Delete a book review (logged in users can delete only their own reviews)
* (Multiple users) Access the application at the same time to view and manage different book reviews simultaneously

***Scenario*** : As is the case with most software development projects, different people in the team work on different parts of the application. Another front-end developer in your team is working on the web-based client-side application that will communicate with your server-side application using REST. Therefore your job is to implement your server-side application as a RESTful web service. A software architect on your team has written the skeleton code for your server-side application using Node.js and Express.js.

To complete the project I forked the skeleton code into my own repo, clone it locally into my development environment, and develop the code further to implement the CRUD capabilities listed above as HTTP methods in my Express server and test them using Postman. I also implemented Session and JWT authentication to allow only logged in users to perform certain operations.

Furthermore I needed to enhance my code using Promises, Callbacks or Async/Await functions to allow multiple users to interact with the application simultaneously and not have to wait for each other’s operations to complete.

### Description 
In this final project, I built a server-side online book review application and I integrated it with a secure REST API server which uses authentication at the session level using JWT.

### Objectives:
* Create APIs and perform CRUD operations on an Express server using Session & JWT authentication.
* Use Async/Await or Promises with Axios in Node.js.
* Create REST API endpoints and test them using Postman.

### Evaluation Criteria –30 marks total
#### General users:
***Task 1***: Get the book list available in the shop.- 2 Points

***Task 2***: Get the books based on ISBN.- 2 Points

***Task 3***: Get all books by Author. -2 Points

***Task 4***: Get all books based on Title - 2 Points

***Task 5***: Get book Review. - 2 Points

***Task 6***: Register New user – 3 Points

***Task 7***: Login as a Registered user - 3 Points

#### Registered Users:
***Task 8***: Add/Modify a book review. - 2 Points

***Task 9***: Delete book review added by that particular user - 2 Points

### Async Node.JS program:
__Use Async/Await or Promises with Axios in Node.js for all the four methods.__

***Task 10***: Get all books – Using async callback function – 2 Points

***Task 11***: Search by ISBN – Using Promises – 2 Points

***Task 12***: Search by Author – 2 Points

***Task 13***: Search by Title - 2 Points

***Task 14***: Submission of Project GitHub Link - 2 Points
