'use strict'

import { dbConnection } from "./mongo.js"
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import taskRoutes from '../src/taskList/taskList.routes.js'

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.taskPath = '/almtesoro/v1/task'

        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(helmet())
        this.app.use(morgan('dev'))
    }

    routes() {
        this.app.use(this.taskPath, taskRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }
}

export default Server;