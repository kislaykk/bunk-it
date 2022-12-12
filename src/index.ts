import app from "./app.js"

const port = process.env.PORT;
const environment = process.env.ENV
const server = app.listen(port, () => {
    console.log(
        `App is running at http://localhost:${port} in ${environment} mode`   
    );
})