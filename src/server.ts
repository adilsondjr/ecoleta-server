import express from 'express';
import routes from './routes'

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3333, err => {
    if(err) {
        console.log('Server is not up !!!')
    } else {
        console.log('Server Money is up !!!')
    }
})