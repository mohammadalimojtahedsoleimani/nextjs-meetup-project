import MeetupList from "../components/meetups/MeetupList";
import axios from "axios";
import { useState } from "react";
import { MongoClient } from "mongodb";



const Index = ( props ) => {


    return (
        <div>
            <MeetupList meetups={ props.meetups }/>


        </div>
    );
};

// export async function getServerSideProps ( context ) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props : {
//             meetups : MEETUPS ,
//
//         }
//     }
// }

export async function getStaticProps ( context ) {
    const url = 'mongodb+srv://mamali-main:POW81qfobmt2CXF8@cluster0.phffq.mongodb.net/meetups?retryWrites=true&w=majority'
    const client = await MongoClient.connect ( url )
    const db = client.db ();

    const meetupsCollection = db.collection ( 'meetups' )

    const meetups = await meetupsCollection.find ().toArray ();
    await client.close ();
    return {
        props : {
            meetups : meetups.map ( item => ( {
                id : item._id.toString () ,
                title : item.title ,
                image : item.image ,
                address : item.address  ,
                description : item.description
            } ) )
        } ,
        revalidate : 10 ,

    }

}

export default Index;