# Friends List Application Using Express Server with JWT

## Overview:
In the CRUD lab I performed CRUD operations on transient data by creating API endpoints with an Express Server. In this lab, I will restrict these operations to authenticated users using JWT and session authentication.
* In this lab, the friends object will be a JSON/dictionary with email as the key and friends object as the value. The friends object is a dictionary with firstName,lastName, DOB mapped to their respective values. I will thus be using “body” from the HTTP request instead of “query” and “params”.

* Only authenticated users will be able to perform all the CRUD operations.

* We will be testing the output of the endpoints on Postman.

### Requisite packages for a server application
1. The packages required for this lab are defined as dependencies in packages.json as below.
```
  "dependencies": {
    "express": "^4.18.1",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^8.5.1",
    "nodemon": "^2.0.19"
} 
```
2. In the terminal run the following command to install all the packages.
```
npm install --save
```
This will install all the packages required for server application to run.

***The express server has been configured to run at port 5000. When you access the server with /friends, you can access the end points defined in routes/friends.js. But for doing this, you need to register as a new user in the /register endpoint and login with those credentials in the /login endpoint.***

### Exercises
1. Get all the user information using JSON string.
2. View the user based on email but without using filter method.
3. Add the new user to the JSON/dictionary
4. Modify the friend details with the given email
5. Delete the friend information based on the given email

### User registration, login & testing the endpoints using Postman
Go to Postman and go to a new HTTP request window 

***User registration***
1. Submit a POST request on the endpoint - https://localhost:5000/register using the below JSON paramters in the ‘body’ of the request.
* Select ‘Body’ >> ‘raw’ >> ‘JSON’ and pass the parameters.
```
{"username":"user2", "password":"password2"}
```

2. It should return the output as 
```
{"message": "User successfully registred. Now you can login"}.
```

***User login***
1. Submit a POST request on the endpoint http://localhost:5000/login using the above username and password in the same JSON format in the ‘body’ of the request.

2. It should return the output as User successfully logged in.
