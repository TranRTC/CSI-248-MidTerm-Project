import SelectLesson from "./Components/SelectLesson";
import DisplayLessons from "./Components/DisplayLessons";
import DetailLesson from "./Components/DetailLesson";
import Comments from "./Components/Comments";
import Ratings from "./Components/Ratings";
import { useState, useEffect } from "react";


const Lessons = [
  {
    id: 1,
    partOfSpeech: "Noun",
    title: "Introduction to Nouns",
    content: "Nouns are words that represent people, places, things, or ideas...",
    comments: [],
    ratings: [2,3,4,5,1], // Average rating for this lesson (out of 5)
  },
  {
    id: 2,
    partOfSpeech: "Noun",
    title: "Types of Nouns",
    content: "There are several types of nouns, including common nouns, proper nouns...",
    comments: [],
    ratings: [3,3,4,5,2],
  },
  {
    id: 3,
    partOfSpeech: "Verb",
    title: "Action Verbs",
    content: "Action verbs express an action or activity...",
    comments: [],
    ratings: [2,2,3,4,5],
  },
  {
    id: 4,
    partOfSpeech: "Adjective",
    title: "Descriptive Adjectives",
    content: "Descriptive adjectives provide more information about nouns...",
    comments: [],
    ratings: [3,3,4,5,3],
  },
  // Add more lessons here
];

function App() {
 
   

//========================Code for Select Component=============================

// declare state variable handle the select value
const [select, setSelect] = useState("");
// update the change to the state variable when useer change selection
const handleSelectChange = (e) => {
  setSelect(e.target.value);
  
};


//=====================Code for Display Component===============================

// declare state variable to hold the list of lessons will be deplay

const [display, setDisplay] = useState([]);

// Monitor the change in user's selection
// Update the list of displayed lessons based on the selected part of speech
// The "display" list is always updated and sent to the "DisplayLessons" component as props
useEffect(() => {
  const updatedLessons = Lessons.filter((lesson) => lesson.partOfSpeech === select);
  setDisplay(updatedLessons);
  setDetail(null);

}, [select]);

//=======================Code for Detail Component==================================

// declare variable to handle the detail of the selected lesson
const [detail, setDetail] = useState(null);

// with the selected lesson update it to the above state variable
const handleDetailChange = (selectedLesson) => {
  setDetail(selectedLesson);
  // reset the button name to "send" if it was used
  setRatingSent(false);
  // reset the button anem to "send" if it was used
  setCommentSent(false)
};


//==========================Code for Ratings Component==============================

// create state variable handle the value of rating from user's input
const [rating, setRating] = useState("");

// create the event handler to update new rating
const handleRatingChange = (event) => setRating(event.target.value);

// create state variable to handle the array of ratings
const [ratings, setRatings] = useState([]);
const [ratingSent, setRatingSent ] = useState(false);


// create handler for the submit rating event
const handleSubmitRating = (rating) => {

  // use ternary operator
  // check detail varialbe if it exist mean selected then access to property .ratings
  // and add with new rating using pread opertor if "detail" is not existed then only 
  // elelment need update is new rating
  const updatedRatings = detail ? [...detail.ratings, rating] : [rating];
  setRatings(updatedRatings);
  setRating("");

  // this is conditional render mean use ternary operator to display the name of the betton form "send" to "sent"
  setRatingSent(true)
};

// this defines the fomular calculating the average rating
// by adding all array element and devide by the number of elements
const averageRating = detail
? detail.ratings.reduce((acc, val) => acc + val, 0) / detail.ratings.length
: "";

//========================Code for Comments Component================================

// declare variable to handle the array of comments of a lesson object
const [comments, setComments] = useState();
// declare state variable to hold the new comment if have from current lesson
const [comment, setComment] = useState();
// declare state variable use to change button name when comment is sent
const [commentSent, setCommentSent] = useState(false);

// store the comment input to the state variable
const handleCommentChange = (e) => {
  setComment(e.target.value);
};

// create handler to handle the submit comment event
const handleSubmitComment = (comment) => {
  // update comments
  const updatedComments = (comment) => 
  // checked if lesson is selected then use spreader operator to update new comment
    detail ? [...detail.comments, comment] : [comment];
    
  ;
  setComments(updatedComments);
  // change state of send status
  setCommentSent(true);
  // clear text area after sending
  setComment("");
}


return ( 
    <div className="container" >
    
      <h2>English Grammar Summarizer</h2>
      <SelectLesson
        select={select}
        handleSelectChange={handleSelectChange}             
      />     
      
       <DisplayLessons
        Lessons={display} 
        onClickLesson={handleDetailChange}
      /> 
      
      <DetailLesson
        selectedLesson={detail}
      />
           
      <Comments
        comment={comment}
        handleCommentChange={handleCommentChange}
        handleSumitComment={handleSubmitComment}
        commentSent={commentSent}
      />
        
      <Ratings      
        rating={rating}
        handleRatingChange={handleRatingChange}
        averageRating={averageRating}
        handleSubmitRating={handleSubmitRating}
        ratingSent={ratingSent}
      />
      
     
    </div>
   );
}

export default App;