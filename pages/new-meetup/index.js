import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter ();

    async function addMeetupHandler ( enteredMeetupData ) {
        const response = await fetch ( '/api/new-meetup' , {
            method : 'POST' ,
            body : JSON.stringify ( enteredMeetupData ) ,
            headers : {
                'Content-Type' : 'application/json'
            }
        } )
        const data = response.json ();
        console.log ( data )
         router.push ( '/' )
    }

    return (
        <div>
            <NewMeetupForm onAddMeetup={ addMeetupHandler }/>
        </div>
    );
};

export default Index;