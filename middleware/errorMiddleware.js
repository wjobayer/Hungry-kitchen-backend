const notFound = (req, res, next) => {
  const errorMsg = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(errorMsg);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
