import { Button, Form, Input, InputNumber, Switch } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { setQuestion } from "../../stores/survey/surveySlice";

const { Item } = Form;

const groups = [
  {
    title: "공통 옵션",
    fields: [
      {
        label: "질문",
        name: "title",
        rules: [{ required: true }],
        type: "text",
      },
      {
        label: "설명",
        name: "desc",
        rules: [{ required: true }],
        type: "text",
      },
      {
        label: "필수 여부",
        name: "required",
        rules: [],
        type: "switch",
        valuepropname: "checked",
      },
    ],
  },
];

const detailFieldsMap = {
  text: [
    {
      label: "placeholder",
      name: "placeholder",
      rules: [{ required: false }],
      type: "text",
    },
    {
      label: "최대 입력 길이",
      name: "max",
      rules: [{ required: false }],
      type: "number",
    },
  ],
  textarea: [
    {
      label: "Placeholder",
      name: "placeholder",
      rules: [{ required: false }],
      type: "text",
    },
    {
      label: "최대 입력 길이",
      name: "max",
      rules: [{ required: false }],
      type: "number",
    },
  ],
  select: [
    {
      label: "답변",
      name: "items",
      rules: [{ required: true }],
      type: "text",
    },
    {
      label: "최대 선택 개수",
      name: "max",
      rules: [{ required: false }],
      type: "number",
    },
  ],
};

const getFieldInput = (type) => {
  if (type === "text") return <Input />;
  if (type === "number") return <InputNumber />;
  else if (type === "switch") return <Switch />;

  return null;
};

function OptionSection() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const question = useSelector(
    (state) =>
      state.selectedQuestionId.data === null
        ? null
        : state.survey.data.questions[state.selectedQuestionId.data],
    shallowEqual
  );
  //퀘스천 null-> 선택된 것이 없는 것

  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data
  );

  useEffect(() => {
    if (!question) return;

    const type = question.type;
    const detailFieldValue = {};
    if (type === "text" || type === "textarea") {
      detailFieldValue.max = question.options.max;
      detailFieldValue.placeholder = question.options.placeholder;
    } else if (type === "select") {
      detailFieldValue.max = question.options.max;
      detailFieldValue.items = question.options.items && question.options.items.join(";");
      // detailFieldValue.items = question.options.items;
      //items -> 배열이라 문제가생김 -> join
      //join(';') 배열이 각각 세미콜론을 갖게되어 문자열로 결합이 된다. .
    }

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
      ...detailFieldValue,
    });
  }, [form, form.question, question]);

  const mergedGroups = question
    ? [
        ...groups,
        {
          title: "세부 옵션",
          fields: detailFieldsMap[question.type], //question이 없는 경우 type도 가져올 수 없다.
        },
      ]
    : [];

  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      {/* 선택이 되지 않으면 ,  */}
      <FormWrapper>
        {question ? (
          <Form layout="vertical" form={form} name="option-form">
            {mergedGroups.map((group, index) => (
              <Fragment key={index}>
                <SubTitle>{group.title}</SubTitle>
                {group.fields?.map((field, index) => {
                  const input = getFieldInput(field.type);
                  if (!input) return null; // 입력 요소 없으면 skip

                  const { type, ...itemProps } = field; // type은 Form.Item에 넘기지 않는다.
                  return (
                    <Item key={index} {...itemProps}>
                      {input}
                    </Item>
                  );
                })}
              </Fragment>
            ))}
            <Item>
              <Button
                htmlType="submit"
                type="primary"
                onClick={() => {
                  // 밸류 추출하기
                  const { title, desc, required, ...options } =
                    form.getFieldsValue();
                  const values = {
                    title,
                    desc,
                    required,
                    options,
                    type: question.type,
                  };

                  if (
                    values.type === "select" &&
                    typeof values.options.items === "string"
                  ) {
                    values.options.items = values.options.items.split(";");
                  }

                  dispatch(
                    setQuestion({ index: selectedQuestionId, data: values })
                  );
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
const Fragment = styled.div``;
const SubTitle = styled.div`
  margin: 10px 0px;
  font-size: 1.03rem;
  font-weight: 600;
`;

export default OptionSection;
