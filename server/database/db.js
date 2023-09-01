import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-fz9im64-shard-00-00.tiqaafp.mongodb.net:27017,ac-fz9im64-shard-00-01.tiqaafp.mongodb.net:27017,ac-fz9im64-shard-00-02.tiqaafp.mongodb.net:27017/?ssl=true&replicaSet=atlas-p9zaen-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database connected')
    }
    catch (error) {
        console.log('ops! there is a error', error.message);
    }
}

export default Connection;