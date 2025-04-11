import AddButton from "../AddButton";
import Body from "../Body";
import Card from "../Card";

function PreviewSection({
  questions,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  DeleteQuestion,
}) {
  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={()=>moveUpQuestion(index)}
          onDownButtonClick={()=>moveDownQuestion(index)}
          deleteButtonClick={()=>DeleteQuestion(index)}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={addQuestion} />
    </div>
  );
}
export default PreviewSection;
