import React from "react";
import styled from "styled-components";
const ChatContainer = styled.div`
  display: grid;
  grid-template-rows: 64px auto third;
`;
const Header = styled.div``;

const MessageContainer = styled.div``;
const ChatInput = styled.div``;

const Chat = () => {
  return (
    <div>
      <ChatContainer>
        <Header>1</Header>
        <MessageContainer>1</MessageContainer>
        <ChatInput>1</ChatInput>
      </ChatContainer>
    </div>
  );
};

export default Chat;
