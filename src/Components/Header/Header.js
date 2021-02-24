import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Container = styled.div`
  background-color: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0px 16px;
`;
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  height: 30px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;

  input {
    padding-left: 8px;
    padding-right: 8px;
    width: 300px;
    background-color: transparent;
    color: white;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const UserImage = styled.img`
  border-radius: 50%;
  margin-left: 16px;
  width: 30px;
  height: 30px;
  border: 2px solid white;
`;

const Header = () => {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="검색" />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <div>holim</div>
        <UserImage src="https://i.imgur.com/6VBx3io.png" alt="" />
      </UserContainer>
    </Container>
  );
};

export default Header;
