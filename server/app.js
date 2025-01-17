import express from 'express';
import cors from 'cors';
import router from './routes/send.route.js';
import router1 from './routes/download.route.js'

// Initialize Express app
const app = express();

// Enable CORS
// app.use(cors(
//   {
//     origin:["https://deploy-mern--1whq.vercel.app"],
//     methods:["POST","GET"],
//     credential:true
//   }
// ));
// app.use(cors(
//   origin:[""],
//   methods:["GET","POST"],
//   Credential:true
// ))
app.use(cors())

// Parse incoming JSON requests (if necessary)
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For form data

// Use your defined router
app.use('/api', router);
app.use('/file',router1);


// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send({ error: 'An error occurred!' });
});

// Ensure server is listening on a specific port


export { app };
