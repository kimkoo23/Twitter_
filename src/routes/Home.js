import React, { useEffect, useState } from "react";
import { dbService } from "../firebase";

const  Home = ({userObj}) => {
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);
    const getTweets = async() => {
        const dbtweets = await dbService.collection("tweets").get();
        dbtweets.forEach((document) => {
            const tweetObject = {
                ...document.data(),
                id : document.id,
            }
            setTweets((prev) => [tweetObject, ...prev]);
        });
    };
    useEffect(() => {
        getTweets();
        dbService.collection("tweets").onSnapshot(snapshot =>{
            console.log("something");
        })
    }, [])
    const onSubmit = async(event) => {
        event.preventDefault();
        await dbService.collection("tweets").add({
            text: tweet,
            createdAt : Date.now(),
            creatorId : userObj.uid,
        })
        setTweet("");
    };
    const onChange = (event) =>{
        const { 
            target: {value},
        } = event;
        setTweet(value);
    }
    return (
    <div>
    <form onSubmit={onSubmit}>
        <input value={tweet} onChange ={onChange}
         type="text" placeholder="what`s on your mind" 
         maxLength={120} />
        <input type="submit" value="Tweet" />
    </form>
    <div>
        {tweets.map((tweet) => (
            <div key={tweet.id}>
                <h4>{tweet.text}</h4>
            </div>
        ))}
    </div>
    </div>
    );
};
export default Home;