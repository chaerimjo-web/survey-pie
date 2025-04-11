import '@ant-design/v5-patch-for-react-19';

import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useState } from "react";
import { styled } from "styled-components";

function AddButton({ addQuestion }) {
  const [open, setOpen] = useState(false);
  const handleVisibleChange = (open)=>{
    setOpen(open);
  }
  const hide = ()=>{
    setOpen(false);
  }

  return (
    <AddButtonWrapper>
      <Popover
        placement="right"
        content={
          <div>
            <Button onClick={()=>{hide(); addQuestion('select');}}>객관식</Button>
            <Button onClick={()=>{hide(); addQuestion('text');}}>단답식</Button>
            <Button onClick={()=>{hide(); addQuestion('textarea');}}>서술식</Button>
          </div>
        }
        onOpenChange={handleVisibleChange}
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
