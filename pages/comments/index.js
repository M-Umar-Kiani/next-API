import React, { useState } from 'react'

export default function index() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")



    const fetchComments = async () => {
        const response = await fetch("/api/comments")
        const data = await response.json();
        setComments(data);
    }
    const submitComment = async() =>{
        const response = await fetch("/api/comments", {
            method: 'POST', 
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <input type='text' name='comment' value={comment} onChange={e => setComment(e.target.value)}/>
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Fetch Comments</button>
            {
                comments.map(comments => {
                    return (
                        <div key={comments.id} >
                            <h2>{comments.id}</h2>
                            <h2>{comments.text}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}
