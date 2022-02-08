import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const Index = () => {
    const addMeetupHandler = ( enteredMeetupData ) => {
        console.log ( enteredMeetupData )
    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={ addMeetupHandler }/>
        </div>
    );
};

export default Index;