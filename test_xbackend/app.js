const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//mongoose
//  .connect('mongodb+srv://Chinnu:chi1234@cluster0.bmvmngk.mongodb.net/mern?retryWrites=true&w=majority')
//  .then(() => {
//    app.listen(5000);
//  })
//  .catch(err => {
//    console.log(err);
//  });
//
//
// mongodb connection url = 'mongodb+srv://Chinnu:chi1234@cluster0.bmvmngk.mongodb.net/places?retryWrites=true&w=majority'
//  const { v4: uuidv4 } = require('uuid');
//  uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
// in places-controllers.js
//
//   in users-controllers.js from line-7 to line-14 default code.
//
//   const DUMMY_USERS = [
//  {
//    id: 'u1',
//    name: 'Chinnu',
//    email: 'c709696@gmail.com',
//    password: 'chi1234'
//  }
//];
//
//