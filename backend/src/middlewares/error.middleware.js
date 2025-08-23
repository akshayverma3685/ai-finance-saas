export const notFound = (req, res, _next) => {
  res.status(404).json({ success: false, message: 'Route not found' })
}
export const errorHandler = (err, _req, res, _next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ success: false, message: err.message || 'Server Error' })
}
