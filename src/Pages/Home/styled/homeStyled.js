import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: #000000;
`

const ContentContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserAndPerksContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ion-icon{
    width: 35px;
    height: 35px;
    color: #FFFFFF;
  }

  img{
    width: 65px;
    height: 65px;
  }

  span{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 53px;
    margin-top: 8px;

    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
  
  button{
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;

    border: none;
    border-radius: 8px;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    background-color: #FF4791;
  }
`;

const ChangeOrCancelButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  button{
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;

    border: none;
    border-radius: 8px;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    background-color: #FF4791;
  }

  button:nth-child(2){
    background-color: #FF4747;
  }
`

export {
    HomeContainer,
    ContentContainer,
    UserAndPerksContainer,
     ChangeOrCancelButtonsContainer
}