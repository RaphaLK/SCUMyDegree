/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/*
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const port = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

exports.apikey = onRequest((req, res) => {
  logger.log("apikey called");
    res.status(200).json({key: process.env.REACT_APP_FIREBASE_API_KEY});
});

*/
/*
import functions from "firebase-functions/v2";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/apikey", async (req, res) => {
  const response = await fetch("https://joshsj89-1d7a9e7057c7.herokuapp.com/api/scumydegree");
  console.log(response);
  const data = await response.json();
  console.log(data);

  res.status(200).json({key: data.key});
});

export const apikey = functions.https.onRequest(app);

*/

const functions = require("firebase-functions");

exports.getFirebaseConfig = functions.https.onRequest((req, res) => {
  const firebaseConfig = {
    apiKey: functions.config().scumydegree.api_key,
    authDomain: "scumydegree-f4ed8.firebaseapp.com",
    projectId: "scumydegree-f4ed8",
    storageBucket: "scumydegree-f4ed8.appspot.com",
    messagingSenderId: "174532801638",
    appId: "1:174532801638:web:0410f9ece3046d300c69a7",
    measurementId: "G-QKBB5PZ73W",
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(firebaseConfig);
});
