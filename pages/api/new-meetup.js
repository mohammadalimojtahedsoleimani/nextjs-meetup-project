import { MongoClient } from 'mongodb'


async function handler ( req , res ) {
    if ( req.method === 'POST' ) {
        const data = req.body;

        const { title , image , address , description } = data;
        await MongoClient.connect ( 'mongodb+srv://mamali-main:5owHsJEhDKmBDwlL@cluster0.phffq.mongodb.net/meetups?retryWrites=true&w=majority' )
        const db = client.db;

        const meetupsCollection = db.collections ( 'meetups' )

        meetupsCollection.insertOne ( data );
    }
}

export default handler;