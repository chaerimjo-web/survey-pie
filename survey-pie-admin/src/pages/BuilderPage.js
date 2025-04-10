import { Col, Input, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import OptionSection from "../components/OptionSection";
import PreviewSection from "../components/PreviewSection";
import MainLayout from "../layouts/MainLayout";
import {
  addQuestion,
  DeleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  setTitle,
} from "../stores/survey/surveySlice";

function BuilderPage() {
  const survey = useSelector((state) => state.survey); //survey데이터를 리턴턴

  const dispatch = useDispatch();

  return (
    <MainLayout selectedKeys={["builder"]}>
      <Row>
        <Col flex="auto">
          <Input
            placeholder="설문 제목을 입력해주세요."
            value={survey.title}
            onChange={(e) => {
              dispatch(setTitle(e.target.value));
            }}
          />
          <PreviewSection
            questions={survey.questions}
            addQuestion={(type) => {
              dispatch(addQuestion(type));
            }}
            moveUpQuestion={(index) => {
              //index값 필요
              if (index === 0) {
                return;
              }
              dispatch(moveUpQuestion(index));
            }}
            moveDownQuestion={(index) => {
              if (index === survey.questions.length - 1) {
                return;
              }
              dispatch(moveDownQuestion(index));
            }}
            DeleteQuestion={(index) => {
              dispatch(DeleteQuestion(index));
            }}
          />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
}
export default BuilderPage;
