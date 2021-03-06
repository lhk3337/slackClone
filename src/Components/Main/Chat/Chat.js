import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "../Chat/ChatMessage";
import db from "../../../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

const Chat = ({ user }) => {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getMessage = () => {
    db.collection("chat")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo,
      };
      db.collection("chat").doc(channelId).collection("messages").add(payload);
    }
  };

  const getChannel = async () => {
    await db
      .collection("chat")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  useEffect(() => {
    getChannel();
    getMessage();
  }, [channelId]);

  return (
    <div>
      <ChatContainer>
        <Header>
          <Channel>
            <ChannelName># {channel && channel.name}</ChannelName>
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
          {messages.length > 0 &&
            messages.map((data, index) => (
              <ChatMessage
                key={index}
                text={data.text}
                name={data.user}
                image={data.userImage}
                timestamp={data.timestamp}
              />
            ))}
        </MessageContainer>
        <ChatInput sendMessage={sendMessage} />
      </ChatContainer>
    </div>
  );
};

const ChatContainer = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`;

const Channel = styled.div``;
const ChannelName = styled.div`
  font-weight: 700;
`;

const MessageContainer = styled.div`
  height: 730px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
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
export default Chat;
