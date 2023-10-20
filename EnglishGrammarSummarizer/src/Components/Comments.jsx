

function Comments({commentSent,comment, handleCommentChange, handleSumitComment}) {
    return ( 
        <div className="container">
            <div>
            <h2>Comments</h2>
            <textarea  value={comment}
                className="form-control border border-primary"
                onChange={handleCommentChange}
                rows="4" // Number of visible rows
                cols="50" // Number of visible column             
                
                placeholder="Type your comment here..."                
            />
            </div>
            <div>
                <button className="btn btn-outline-primary" onClick={() => handleSumitComment(comment)}>{commentSent? "sent" : "send"}</button>
            </div>
            
            
        </div>
     );
}

export default Comments;