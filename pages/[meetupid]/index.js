import MeetupDetail from "../../components/meetups/MeetupDetail";
import imageIcon from "../../assets/nut_walnut.jpg"

const Index = () => {
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

export default Index;