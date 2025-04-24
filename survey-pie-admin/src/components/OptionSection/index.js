import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { setQuestion } from "../../stores/survey/surveySlice";

const { Item } = Form;

function OptionSection() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data]
  );
  //퀘스천 null-> 선택된 것이 없는 것

  useEffect(() => {
    if (!question) return;

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
    });
  }, [form, form.question, question]);

  const selectedQuestionId = useSelector((state) => state.selectedQuestionId.data);

  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      {/* 선택이 되지 않으면 ,  */}
      <FormWrapper>
        {question ? (
          <Form layout="vertical" form={form} name="option-form">
            <SubTitle>공통 옵션</SubTitle>
            <Item label="질문 :" name="title" rules={[{ required: true }]}>
              <Input />
            </Item>
            <Item label="설명 :" name="desc" rules={[{ required: true }]}>
              <Input />
            </Item>

            <Item>
              <Button
                htmlType="submit"
                type="primary"
                onClick={() => {
                  // 밸류 추출하기
                  const values = form.getFieldsValue();
                  console.log(values);

                  dispatch(setQuestion({index: selectedQuestionId, data: values}));
                }}
              >
                적용
              </Button>
            </Item>
          </Form>
        ) : (
          "질문을 선택하세요"
        )}
      </FormWrapper>
    </OptionSectionWrapper>
  );
}

const OptionSectionWrapper = styled.div`
  height: 100%;
  border-left: 1px solid #dddddd;
  background: #fff;
`;
const Title = styled.div`
  padding: 10px 0;
  background: #f0f0f0;
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid #dddddd;
`;

const FormWrapper = styled.div`
  padding: 20px;
`;
const SubTitle = styled.div`
  margin: 10px 0px;
  font-size: 1.03rem;
  font-weight: 600;
`;

export default OptionSection;
