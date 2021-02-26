import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItems } from "./SidebarData";
import { useHistory } from "react-router-dom";
import db from "../../firebase";

const Sidebar = (props) => {
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      console.log(id);
      history.push(`/chat/${id}`);
    }
  };

  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if (promptName) {
      db.collection("chat").add({ name: promptName });
    }
  };
  return (
    <Container>
      <WorkspaceContainer>
        <Name>Holim</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannel>
        {sidebarItems.map((item) => (
          <MainChannelItem key={item.id}>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannel>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <Addicon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {props.chats.map((item) => (
            <Channel key={item.id} onClick={() => goToChannel(item.id)}>
              # {item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #3f0e40;
`;
const WorkspaceContainer = styled.div`
  color: White;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
`;

const MainChannel = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;
const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
const Addicon = styled(AddIcon)`
  cursor: pointer;
`;

export default Sidebar;
