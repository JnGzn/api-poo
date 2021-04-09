import express from 'express'

export default class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.app.use(express.json())
  }
}



// app.get('/', (req, res) => {
//     res.send('Hello World')
//   })
