import { MongoClient } from 'mongodb'


async function handler ( req , res ) {
    if ( req.method === 'POST' ) {
        const data = req.body;
        const url = 'mongodb+srv://mamali-main:POW81qfobmt2CXF8@cluster0.phffq.mongodb.net/meetups?retryWrites=true&w=majority'
        const client = await MongoClient.connect ( url )
        const db = client.db ();

        const meetupsCollection = db.collection ( 'meetups' )

        const result = await meetupsCollection.insertOne ( data );
        console.log ( result )
        client.close ();
        res.status ( 201 ).json ( { message : 'meetup inserted' } );
    }
}

export default handler;