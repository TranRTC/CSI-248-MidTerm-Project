
import ItemLesson from "./ItemLesson";

function DisplayLessons({Lessons, onClickLesson}) {    
    
    return ( 
        <div className="container">
            <h2>Display</h2>
            <ul>
                {Lessons.map((Lesson) => <ItemLesson key={Lesson.id} Lesson={Lesson} onClickLesson={onClickLesson}/>)}

            </ul>            

        </div>
     );
}

export default DisplayLessons;