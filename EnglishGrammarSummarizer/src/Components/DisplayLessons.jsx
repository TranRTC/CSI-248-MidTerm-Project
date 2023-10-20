
import ItemLesson from "./ItemLesson";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayLessons({Lessons, onClickLesson}) {    
    
    return ( 
        <div className="container">
            <h2>Lessons</h2>
            <ul className="text-danger">
                {Lessons.map((Lesson) => <ItemLesson key={Lesson.id} Lesson={Lesson} onClickLesson={onClickLesson}/>)}

            </ul>            

        </div>
     );
}

export default DisplayLessons;