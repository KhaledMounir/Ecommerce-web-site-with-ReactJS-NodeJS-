import React from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 80px;
  box-shadow: 0px 0px 30px black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
`;

//left side
const Left = styled.div`
  flex: 1;
`;

const SearchContainer = styled.div`
  width: 50%;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;
const Input = styled.input`
  width: 90%;
  border: none;
  height: 35px;
  padding: 0px 10px;
  font-size: 20px;
  box-shadow: 0px 0px 15px lightgray;
  border-radius: 10px 0px 0px 10px;
`;
const IconContainer = styled.div`
  background-color: #229b99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 35px;
  width: 35px;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 0px 0px 15px lightgray;
  cursor: pointer;
`;
//center side
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 45px;
  font-weight: bolder;
  color: #229b99;
`;

//Right side
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  border: ${(props) => (props.btn ? "1px solid #229b99" : "")};
  padding: ${(props) => (props.btn ? "0px 5px" : "")};
  box-shadow: ${(props) => (props.btn ? "0px 2px 4px #229b99;" : "")};
  border-radius: 10px;
  :hover {
    background-color: ${(props) => (props.btn ? "#229b99" : "")};
    color: ${(props) => (props.btn ? "white" : "")};
  }
`;

const Nav = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <SearchContainer>
              <Input></Input>
              <IconContainer>
                <ImSearch />
              </IconContainer>
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LIGHT.</Logo>
          </Center>
          <Right>
            <MenuItem btn>Register</MenuItem>
            <MenuItem btn> Sign In</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <AiOutlineShoppingCart style={{ fontSize: "25px" }} />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Nav;
