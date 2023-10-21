import SelectLesson from "./Components/SelectLesson";
import DisplayLessons from "./Components/DisplayLessons";
import DetailLesson from "./Components/DetailLesson";
import Comments from "./Components/Comments";
import Ratings from "./Components/Ratings";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//===================================Testing Data===========================================
const Lessons = [
  {
    id: 1,
    partOfSpeech: "Noun",
    title: "Introduction to Nouns",
    content: "Nouns are words that represent people, places, things, or ideas...",
    comments: ["good", "helpful", "need specific example"],
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


//===============================App Component================================


function App() {
 
  //==================State Variable USed To Update Testing Data=============

const [lessons, setLessons] = useState(Lessons);

//============= Code for checking update correctly============================

    useEffect(() => {
      console.log(lessons);
    }, [lessons]); // Empty dependency array, runs only once


//========================Code for Select Component============================

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
      const updatedLessons = lessons.filter((lesson) => lesson.partOfSpeech === select);
      setDisplay(updatedLessons);
      setDetail(null);

    }, [select]);

//=======================Code for Detail Component================================

    // declare variable to handle the detail of the selected lesson
    const [detail, setDetail] = useState(null);

    // with the selected lesson update it to the above state variable
    const handleDetailChange = (selectedLesson) => {
      setDetail(selectedLesson);
      // use to reset the button name to "send" if it was used
      setRatingSent(false);
      // use to allow sending only when it is not yet sent
      setCommentSent(false)
      
    };

//========================Code for Comments Component================================

// declare variable to handle the array of comments of a lesson object
const [comments, setComments] = useState([]);
// declare state variable to hold the new comment if have from current lesson
const [comment, setComment] = useState("");
// declare state variable use to change button name when comment is sent
const [commentSent, setCommentSent] = useState(false);
 
 

    // store the comment input to the state variable
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };

    // create handler to handle the submit comment event
    const handleSubmitComment = (comment) => {
      // update comments
      // only allow update when lesson is selected, comment is not being sent and comment not emty
      if (detail && !commentSent && comment !== "") {

        const updatedComments 
        // checked if lesson is selected then use spreader operator to update new comment
        = detail ? [...detail.comments, comment] : [comment];    
          
        setComments(updatedComments);
      
          // change state of send status
        setCommentSent(true);
        // clear text area after sending
        setComment("");     
          
      }
      
    }

//==========================Code for Ratings Component==============================

    // create state variable handle the value of rating from user's input
    const [rating, setRating] = useState("");

    // create the event handler to update new rating
    const handleRatingChange = (event) => setRating(event.target.value);

    // create state variable to handle the array of ratings
    const [ratings, setRatings] = useState([]);
    const [ratingSent, setRatingSent ] = useState(false);

    const handleSubmitRating = (rating) => {
      // Only allow updating ratings when a lesson is selected, rating is not being sent, and the rating string is not empty
      if (detail && !ratingSent && rating !== "") {
        // Find the index of the lesson in the lessons array based on the detail.id
        const lessonIndex = lessons.findIndex((lesson) => lesson.id === detail.id);

        if (lessonIndex !== -1) {
          // Create a copy of the lessons array to avoid directly mutating state
          const updatedLessons = [...lessons];

          //===============Update lesson=============

          updatedLessons[lessonIndex] = {
            ...updatedLessons[lessonIndex],
            ratings: [...updatedLessons[lessonIndex].ratings, parseInt(rating)],
          };

          // Update the state with the updated lessons
          setLessons(updatedLessons);


          //================update detail=============
          const updatedDetail = {
            ...detail,
            ratings: [...detail.ratings, parseInt(rating)],
          };
          setDetail(updatedDetail);
          //========================================

        }

        // Reset the rating input field and set ratingSent to true
        setRating("");
        setRatingSent(true);
      }
    };


//===========================Calculate Averate Ratings============================

// this defines the fomular calculating the average rating
// by adding all array element and devide by the number of elements

const averageRating = detail
? (detail.ratings.reduce((acc, val) => acc + val, 0) / detail.ratings.length).toFixed(1)
: "";

//=================Code FOr Checking Update comments & ratings)=====================


//==========================================App Return===============================

return ( 
    <div className="container ml-4 mr-4"  >
    
      <h2>English Grammar Summarizer</h2>

      {/*Selec Component */}
      
      <SelectLesson
        select={select}
        handleSelectChange={handleSelectChange}             
      /> 
      <br></br>    
        {/*Display Component */}
       <DisplayLessons
        Lessons={display} 
        onClickLesson={handleDetailChange}
      /> 
      
      {/*Detail Component */}
      <DetailLesson
        selectedLesson={detail}
      />
      {/*Comments Component */}     
      <Comments
        comment={comment}
        handleCommentChange={handleCommentChange}
        handleSumitComment={handleSubmitComment}
        commentSent={commentSent}
      />
        
        {/*Ratings Component */}
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

//=====================================End=================================================