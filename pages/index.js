import MeetupList from "../components/meetups/MeetupList";
import { useEffect , useState } from "react";

const MEETUPS = [
    {
        id : 'm1' ,
        title : 'A First Meetup' ,
        image : 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/17870-france-loir-et-cher-chambord-chateau-03-1.jpg' ,
        address : 'paris,dad' ,
        description : 'this is a first meet up!'
    } ,
    {
        id : 'm2' ,
        title : 'A Second Meetup' ,
        image : 'https://www.renfe-sncf.com/rw-en/blog/PublishingImages/did-you-know-palaces-france/did-you-know_palaces_france.jpg' ,
        address : 'paris,sad,153212' ,
        description : 'this is a Second meet up!'
    } ,

];
const Index = () => {
    const [ data , setData ] = useState ( [] );
    useEffect ( () => {

    } , [] )
    return (
        <div>
            <MeetupList meetups={ MEETUPS }/>
        </div>
    );
};

export default Index;