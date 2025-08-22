import { createServer } from 'http'
import app from './src/app.js'
const port = process.env.PORT || 8080
const server = createServer(app)
server.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})
