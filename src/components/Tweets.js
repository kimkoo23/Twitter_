import React, { useState } from "react";
import { dbService } from "../firebase";

const Tweets = ({tweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newTweet, setNewTweet] = useState(tweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("정말로 삭제 하시겠습니까?");
        if(ok){
            await dbService.doc(`tweets/${tweetObj.id}`).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async(event) => {
        event.preventDefault();
        await dbService.doc(`tweets/${tweetObj.id}`).update({
            text : newTweet
        });
        setEditing(false);
    }
    const onChange = (event) => {
        const {
            target: { value },            
        } = event;
        setNewTweet(value);
    }
    return (
    <div>
        {editing ? ( 
            <>
            <form onSubmit={onSubmit}>
                <input type="text" 
                placeholder="Edit your tweet" 
                value={newTweet} 
                required
                onChange={onChange} 
                />
                <input type="submit" value="Update Tweet"/>
            </form> 
            <button onClick={toggleEditing}>Cancel</button>
            </>
            ) : (
                <>
                    <h4>{tweetObj.text}</h4>
                    {isOwner && (
                    <>
                    <button onClick={onDeleteClick}>Delete Tweet</button>
                    <button onClick={toggleEditing}>Edit Tweet</button>
                    </>
                )}
            </>
            )}
    </div>
    );
};

export default Tweets;