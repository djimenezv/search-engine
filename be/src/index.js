import express from 'express';
import cors from 'cors';
import { search } from './data-access/search';

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

// endpoints

app.get('/search', async (req, res) => {
    if (!req.query || !req.query.q) {
         res.sendStatus(400);
    } else {
        const searchResult = await search(req.query.q);
        res.json(searchResult);
    }
});


app.listen(9000, () => {
    console.log('app running on port 9000');
});