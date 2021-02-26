import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Message Here..."
          />
          <SendBtn type="submit" onClick={send}>
            <Send />
          </SendBtn>
        </form>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
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
const SendBtn = styled.button`
  background: #19ce60;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  .MuiSvgIcon-root {
    width: 18px;
  }
`;

const Send = styled(SendIcon)`
  color: #ffff;
`;

export default ChatInput;
