import Ratings from "./Ratings";
import Comments from "./Comments";
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailLesson = ({ selectedLesson }) => {

  if (!selectedLesson) {
    return <div 
     className="container">
        Select a lesson to view details.
    </div>;
  }

  return (
    <div>
        <div className="container">
            <h5>{selectedLesson.title}</h5>
            <p>{selectedLesson.content}</p>
        </div>         
    </div>
   
   
  
  );
};

export default DetailLesson;
