import { DeleteOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { styled } from "styled-components";

function Card({ title, desc, children, onUpButtonClick, onDownButtonClick, deleteButtonClick }) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button onClick={onUpButtonClick} type="text" icon={<UpOutlined />} />
          <Button
            onClick={deleteButtonClick}
            type="text"
            icon={<DeleteOutlined />}
          />
          <Button
            onClick={onDownButtonClick}
            type="text"
            icon={<DownOutlined />}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
}

const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: calc(100%);
  top: 0;
  display: none;
`;

const ButtonGroup = styled.div`
  margin-left: 10px;
  background: #fff;
`;

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  background: #ffffff;
  width: 500px;
  margin: 30px auto;
  position: relative;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;
const Head = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 20px;
`;
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;
const Desc = styled.div`
  color: #666666;
  margin-left: 5px;
`;
const Body = styled.div`
  padding: 20px;
`;

export default Card;
