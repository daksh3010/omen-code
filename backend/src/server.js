import express from 'express';
import { ENV } from './lib/env.js';
import path from 'path';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import {serve} from 'inngest/express' ;

const app = express(); 

const __dirname = path.resolve();

app.use(express.json()) ;
app.use(cors({origin: ENV.CLIENT_URL , credentials: true})) ;

app.use("/api/inngest" , serve({client : inngest , functions})) ;

app.get('/health', (req, res) => {
    res.status(200).json({msg:"api is up and running"});
});

app.get('/books', (req, res) => {
    res.status(200).json({msg:"Books endpoint"});
});

if(ENV.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}" , (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}


const port = ENV.PORT;



const startServer = async () => {
    try{
        await connectDB() ;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch(error) {
        console.error("Error starting server: " , error);
    }
}

startServer() ;