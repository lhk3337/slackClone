import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 0px;
  display: flex;
  align-items: center;
  :hover {
    background: #faf9fa;
  }
`;
const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 13px;
  }
`;
const Text = styled.span``;

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/women/32.jpg" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Beverly Nichols
          <span>2/23/2021 11:1355 AM</span>
        </Name>
        <Text>This is the best Challenge</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;
