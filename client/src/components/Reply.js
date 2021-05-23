import React from 'react'

// this form submits the input to a database to be rendered later on after submission
const Reply = () => {
    return (
        <div className="reply-form">
            <div className="reply">in reply to username</div>
            <form>
                <input type="text" placeholder="Enter your reply here" className="post-body"></input>
                <input type="submit" class="reply-btn"></input>
            </form>
            <p className="cancel">cancel</p>
        </div>
    )
}

export default Reply
