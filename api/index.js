const app = require('./app');

app.listen(
    app.get('port'),
    () => {
        console.log("El barquito ha llegado al puerto...", app.get('port'))
    }
)