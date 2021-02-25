import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;
const InputContainer = styled.div`
  border: 1px solid #8d8d8d;
  border-radius: 4px;
  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    input {
      flex: 1;
      border: none;
      font-size: 13px;
      height: 30px;
    }
    input:focus {
      outline: none;
    }
  }
`;
const SendBtn = styled.div`
  background: #007a5a;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  .MuiSvgIcon-root {
    width: 18px;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message Here" />
          <SendBtn>
            <Send />
          </SendBtn>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;
