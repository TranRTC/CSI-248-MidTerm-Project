import { useEffect } from "react";


function Ratings({ratingSent, rating, handleRatingChange, averageRating, handleSubmitRating}) {
    
   
       
    
    return (
        <div className="container">

          <br></br>
          <h2>Ratings</h2>
          <label>average rating: {averageRating}</label>        
          <br></br>
          <select className="form-select border border-primary text-danger" id="ratings" value={rating} onChange={handleRatingChange}>
            <option value="">Choose Rating</option>
            <option value="1">&#9733;</option>
            <option value="2">&#9733;&#9733;</option>
            <option value="3">&#9733;&#9733;&#9733;</option>
            <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            {/* Add more rating options as needed */}
          </select>
          <button className="btn btn-outline-primary" onClick={() => handleSubmitRating(rating)}>{ratingSent ? "Sent" : "Send"}</button>
        </div>
      );
    }

export default Ratings;