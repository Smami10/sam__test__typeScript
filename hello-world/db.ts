import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) {
        console.log('Connecting to database.');
        return;
    }

    try {
        await mongoose.connect(MONGO_URI, {
            dbName: 'user_otoparking',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);

        isConnected = true;
        console.log('Connected to database.');
    } catch (error) {
        console.error('Error connecting to database', error);
        throw new Error('Error connection failed');
    }
};
