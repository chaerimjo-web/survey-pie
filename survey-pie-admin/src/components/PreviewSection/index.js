import Card from "../Card";

function PreviewSection({questions}) {
  return (
    <>
			{questions.map((question)=>(
				<Card title={question.title} desc={question.desc}>
					Body
				</Card>
			))}
    </>
  );
}
export default PreviewSection;
