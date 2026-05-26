import express from 'express';
import { ENV } from './lib/env.js';
const app = express(); 

app.get('/health', (req, res) => {
    res.status(200).json({msg:"api is up and running"});
});

const port = ENV.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});