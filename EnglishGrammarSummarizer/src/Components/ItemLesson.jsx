

function ItemLesson({Lesson, onClickLesson}) {
  return (
    
      <li onClick={() => onClickLesson(Lesson)}>{Lesson.title}</li>
    
  );
}

export default ItemLesson;
