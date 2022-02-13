import MeetupDetail from "../../components/meetups/MeetupDetail";
import imageIcon from "../../assets/nut.jpg"
import { MongoClient , ObjectId } from "mongodb";

const Index = ( props ) => {
    return (
        <div>
            <MeetupDetail
                image={ props.meetupData.image }
                title={ props.meetupData.title }
                address={ props.meetupData.address }
                description={ props.meetupData.description }/>

        </div>
    );
};

export async function getStaticPaths ( context ) {
    const url = 'mongodb+srv://mamali-main:POW81qfobmt2CXF8@cluster0.phffq.mongodb.net/meetups?retryWrites=true&w=majority'
    const client = await MongoClient.connect ( url )
    const db = client.db ();

    const meetupsCollection = db.collection ( 'meetups' )
    const meetups = await meetupsCollection.find ( {} , { _id : 1 } ).toArray ()
    client.close ();
    return {

        paths : meetups.map ( item => ( { params : { meetupid : item._id.toString () } } ) )
        , fallback : false
    }
}

export async function getStaticProps ( context ) {
    const meetupId = context.params.meetupid
    const url = 'mongodb+srv://mamali-main:POW81qfobmt2CXF8@cluster0.phffq.mongodb.net/meetups?retryWrites=true&w=majority'
    const client = await MongoClient.connect ( url )
    const db = client.db ();

    const meetupsCollection = db.collection ( 'meetups' )
    const selectedMeetup = await meetupsCollection.findOne ( { _id : ObjectId ( meetupId ), } );
    await client.close ();

    return {
        props : {
            meetupData : {
                id : selectedMeetup._id.toString(),
                title:selectedMeetup.title,
                address:selectedMeetup.address,
                image : selectedMeetup.image,
                description:selectedMeetup.description

            }
        }
    }
}

export default Index;