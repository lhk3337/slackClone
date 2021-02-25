import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "../Chat/ChatMessage";
const ChatContainer = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const Channel = styled.div``;
const ChannelName = styled.div`
  font-weight: 700;
`;

const MessageContainer = styled.div`
  height: 730px;

  padding-left: 24px;
  padding-right: 24px;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 13);
  justify-content: space-between;
`;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
  margin-bottom: 4px;
`;
const Chat = (props) => {
  const { chats } = props.chats.chats;
  return (
    <div>
      <ChatContainer>
        <Header>
          <Channel>
            <ChannelName>
              {chats.map((a, index) =>
                index === chats.length - 4 ? `# ${a.name}` : ""
              )}
            </ChannelName>
            <ChannelInfo>
              Company-wide announcements and work-base matter
            </ChannelInfo>
          </Channel>
          <ChannelDetails>
            <div>Details</div>
            <Info />
          </ChannelDetails>
        </Header>
        <MessageContainer>
          <ChatMessage />
        </MessageContainer>
        <ChatInput />
      </ChatContainer>
    </div>
  );
};

export default Chat;
