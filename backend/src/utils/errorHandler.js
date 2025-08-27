class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

const handleError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Something went wrong!';
  console.error(err);

  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = { AppError, handleError };
