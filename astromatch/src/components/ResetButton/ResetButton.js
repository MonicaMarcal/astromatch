import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

function ResetButton() {
  const onClickReset = ()=> {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:monica/clear").then(response => {

    })
  }

  const ButtonReset = styled.button`
  background-color: #B5B5B5;
 

  :hover {

    background-color:#9C9C9C;
  }
  `

  return (
    <div>
      <ButtonReset onClick={onClickReset}>Resetar curtidas e matches</ButtonReset>
    </div>
  );
}

export default ResetButton;
