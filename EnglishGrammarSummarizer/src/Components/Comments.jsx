import 'bootstrap/dist/css/bootstrap.min.css';

function Comments({commentSent,comment, handleCommentChange, handleSumitComment}) {



    
    return ( 
        <div className="container">
            <div>
            <br></br>
            <h2>Comments</h2>
            <label htmlFor='textComment'>Improve App with your Comments</label>
            <br></br>
            <textarea  value={comment}
                id='textComment'
                className="form-control border border-primary text-danger"
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