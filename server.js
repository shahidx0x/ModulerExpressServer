const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
const app = express();
const port = 3000;

// Import middleware
const authenticate = require('./src/middleware/authentication');
const errorHandler = require('./src/middleware/errorHandling');

// Import routes
const demoRouter = require('./src/api/demo/router');
const adminRouter = require('./src/api/admin/router');


// Connect to the database
connectDB();

// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use authentication middleware for specific routes
app.use('/api/demo', authenticate, demoRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
