import "@ant-design/v5-patch-for-react-19";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useState } from "react";
import { styled } from "styled-components";

function AddButton({ addQuestion }) {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open) => {
    setOpen(open);
  };
  const hide = () => {
    setOpen(false);
  };

  return (
    <AddButtonWrapper>
      <Popover
        placement="right"
        content={
          <div>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion("select");
              }}
              style={{display: 'block'}}
            >
              객관식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion("text");
              }}
              style={{display: 'block'}}
            >
              단답식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion("textarea");
              }}
              style={{display: 'block'}}
            >
              서술식
            </Button>
          </div>
        }
        onOpenChange={handleOpenChange}
        open={open}
        trigger="click"
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  font-size: 2.5rem;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
`;

export default AddButton;
