import Express from 'express'
import authController from './controllers/authController'
import musicController from './controllers/musicController'
import { authHandler } from './handler/authHandler'
import { exceptionHandler } from './handler/exceptionHandler'

const port = 80

const app = Express()
app.use(Express.json())
app.use(exceptionHandler)

app.use(authController)
app.use(authHandler)

app.use('/musics', musicController)

app.listen(port, () => {
    console.log(`port: ${port}`)
})