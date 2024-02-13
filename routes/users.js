const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  res.send(JSON.stringify({users}, null, 4));
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  res.send(users.filter(user => user.email === req.params.email));
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // let newUser = {
  //   firstName: req.query.firstName,
  //   lastName: req.query.lastName,
  //   email: req.query.email,
  //   DOB: req.query.DOB
  // }
  let newUser = {...req.query};
  users.push(newUser);
  res.send(`The user ${req.query.firstName} has been added!`);
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filtered_users = users.filter(user => user.email === email);
  if(filtered_users.length > 0){
    let user = filtered_users[0];
    // let DOB = req.query.DOB;
    // let email = req.query.email;
    // let firstName = req.query.firstName;
    // let lastName = req.query.lastName;
    for( const [key, value] of Object.entries(req.query)){
      if(key){
        user[key] = value;
      }
    }
    // if(DOB) {
    //   user.DOB = DOB;
    // }
    // if(email){
    //   user.email = email;
    // }
    // if(firstName) {
    //   user.firstName = firstName;
    // }
    // if(lastName){
    //   user.lastName;
    // }

    users = users.filter(user => user.email != email);
    users.push(user);
    res.send(`User with the email ${email} updated.`);
  } else {
    res.send("Unable to find user!");
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter(user => user.email != email);
  res.send(`User with the email ${email} has been deleted!`);
});

module.exports=router;
