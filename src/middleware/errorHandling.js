const errorHandler = (err, req, res, next) => {
  // Log the error details
  console.error(err.stack);

  // Return a response with error details
  res.status(500).json({
    message: 'An internal server error occurred',
    error: process.env.NODE_ENV === 'production' ? {} : err.message,
  });
};

module.exports = errorHandler;
