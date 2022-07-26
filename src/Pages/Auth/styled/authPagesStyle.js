import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25%;
  background-color: #000000;

  img{
    width: 80%;
    height: 9%;
    margin-bottom: 26%;
  }

  a{
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF
  }
`;

const Inputs = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  input{
    width: 100%;
    height: 52px;

    background-color: #FFFFFF;
    padding-left: 4%;
    border: none;
    border-radius: 8px;
    
    ::placeholder{
      font-family: 'Roboto';
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      text-align: left;
      letter-spacing: 0em;
    }

}

  button{
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 24px;

    background-color: #FF4791;
    border: none;
    border-radius: 8px;
  
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF
  }

  svg{
    background-color: #FF4791;
  }
`;

export {
  Container,
  Inputs,
};
