import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

function Login(props) {
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
        <H1>Sign in Slack</H1>
        <SignInButton onClick={() => SignIn()}>
          Sign In with Google
        </SignInButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SlackImg = styled.img`
  height: 200px;
  padding-bottom: 20px;
`;

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 /24%);
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #2db67c;
  padding: 0px 13px;
  color: White;
  border: none;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  :focus {
    outline: none;
  }
`;
const H1 = styled.h1`
  margin-top: 20px;
  font-size: 48px;
  font-weight: bold;
`;
export default Login;