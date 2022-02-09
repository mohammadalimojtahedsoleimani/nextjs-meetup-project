import MeetupDetail from "../../components/meetups/MeetupDetail";
import imageIcon from "../../assets/nut.jpg"

const Index = ( props ) => {
    return (
        <div>
            <MeetupDetail
                image={ imageIcon }
                title={ `First meetup` }
                address={ `some Street 5, some city` }
                description={ `this is a first meetup` }/>

        </div>
    );
};

export async function getStaticPaths ( context ) {
    return {

        paths : [
            {
                params : {
                    meetupid : 'm1'.toString ()
                } ,
            } ,
            {
                params : {
                    meetupid : 'm2'.toString ()
                } ,
            } ,
        ] ,
        fallback : false ,
    }
}

export async function getStaticProps ( context ) {
    const meetupId = context.params.meetupid



    return {
        props : {
            meetupData : {
                image : { imageIcon } ,
                id : meetupId.toString () ,
                title : `First meetup` ,
                address : `some Street 5, some city` ,
                description : `this is a first meetup`
            }
        }
    }
}

export default Index;