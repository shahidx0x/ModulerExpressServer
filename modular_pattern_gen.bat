@echo off

mkdir src
mkdir src\api
mkdir src\api\demo
mkdir src\config
mkdir src\middleware

echo const express = require('express');> server.js
echo const bodyParser = require('body-parser');>> server.js
echo const connectDB = require('./src/config/database');>> server.js
echo const app = express();>> server.js
echo const port = 3000;>> server.js
echo.>> server.js
echo // Import middleware>> server.js
echo const authenticate = require('./src/middleware/authentication');>> server.js
echo const errorHandler = require('./src/middleware/errorHandling');>> server.js
echo.>> server.js
echo // Import routes>> server.js
echo const demoRouter = require('./src/api/demo/router');>> server.js
echo.>> server.js
echo // Connect to the database>> server.js
echo connectDB();>> server.js
echo.>> server.js
echo // Configure middleware>> server.js
echo app.use(bodyParser.json());>> server.js
echo app.use(bodyParser.urlencoded({ extended: true }));>> server.js
echo.>> server.js
echo // Use authentication middleware for specific routes>> server.js
echo app.use('/api/demo', authenticate, demoRouter);>> server.js
echo.>> server.js
echo // Error handling middleware>> server.js
echo app.use(errorHandler);>> server.js
echo.>> server.js
echo app.listen(port, () => {>> server.js
echo   console.log(`Server is running on port %port%`);>> server.js
echo });>> server.js

echo const mongoose = require('mongoose');> src\config\database.js
echo.>> src\config\database.js
echo const DB_URI = 'mongodb://localhost:27017/your_database_name';>> src\config\database.js
echo.>> src\config\database.js
echo const connectDB = async () => {>> src\config\database.js
echo   try {>> src\config\database.js
echo     await mongoose.connect(DB_URI, {>> src\config\database.js
echo       useNewUrlParser: true,>> src\config\database.js
echo       useUnifiedTopology: true,>> src\config\database.js
echo       useFindAndModify: false,>> src\config\database.js
echo       useCreateIndex: true,>> src\config\database.js
echo     });>> src\config\database.js
echo     console.log('Successfully connected to the database');>> src\config\database.js
echo   } catch (error) {>> src\config\database.js
echo     console.error('Error connecting to the database', error);>> src\config\database.js
echo     process.exit(1);>> src\config\database.js
echo   }>> src\config\database.js
echo };>> src\config\database.js
echo.>> src\config\database.js
echo module.exports = connectDB;>> src\config\database.js

echo const authenticate = (req, res, next) => {> src\middleware\authentication.js
echo   // Your authentication logic here>> src\middleware\authentication.js
echo   // Example: Check if the user has a valid JWT token>> src\middleware\authentication.js
echo   // If the user is authenticated, call next()>> src\middleware\authentication.js
echo   // Otherwise, return an error response>> src\middleware
