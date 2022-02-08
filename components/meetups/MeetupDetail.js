import styles from "./MeetupDetail.module.css";

const MeetupDetail = ( props ) => {
    return (
        <section>
            <img src={ props.image } alt="A First Meetup"/>
            <h1>{ props.title }</h1>
            <p>{ props.address }</p>
            <p>{ props.description }</p>
        </section>
    );
};

export default MeetupDetail;