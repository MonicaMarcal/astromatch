import React from 'react';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 0 8px;
  background-color: #DDA0DD;
  
`
const ButtonBarContainer = styled.button`
  border: 1px solid black;
  border-style: dashed;
  background-color: #B5B5B5;
 

  :hover {

    background-color:#9C9C9C;
  }
`

const TextBarContainer = styled.p`
  color:black;
  
`

function AppBar(props) {
  return (
    <AppBarContainer>
      <ButtonBarContainer onClick={props.goToChooseProfilePage}>Escolher</ButtonBarContainer>
      <TextBarContainer>AstroMatch</TextBarContainer>
      <ButtonBarContainer onClick={props.goToMatchListPage}>Lista</ButtonBarContainer>
    </AppBarContainer>
  );
}

export default AppBar;
