import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  
`
const ButtonClick = styled.button`
  background-color: #DDA0DD;
  border: 1px solid black;
  border-style: dashed;


  :hover {

    background-color:#FF00FF;
  }

`

function ChooseButtons(props) {
  
  return (
    <ButtonsContainer>
      <ButtonClick onClick={props.onClickNo}>Não</ButtonClick>
      <ButtonClick onClick={props.onClickYes}>Sim</ButtonClick>
    </ButtonsContainer>
  );
}

export default ChooseButtons;
