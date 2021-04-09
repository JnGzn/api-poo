import App from './app'
const objApp = new App()
const port = process.env.SERVER_PORT || 3000
objApp.app.listen(port, () => {
    console.log(`Se esta corriendo el servidor en el puesto ${port}`)
})
// app.listen(3000)
