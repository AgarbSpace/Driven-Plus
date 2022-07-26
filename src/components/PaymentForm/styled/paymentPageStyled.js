import styled from "styled-components";

const PaymentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  background-color: #000000;

  img{
    width: 95px;
    height: 95px;
  }
`;

const Back = styled.div`
  width: 90%;
  
  ion-icon{
    width: 30px;
    height: 30px;
    color: #FFFFFF;
  }
`;

const Perks = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  div:first-child{
    margin-bottom: 10px;
  }

  div{
    display: flex;
    margin-top: 12px;

    ion-icon{
      width: 20px;
      height: 20px;
      color: #FF4791;
    }

  }
`

const Subtitle = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;

  margin-left: 5px;
`;

const PerksName = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;

  margin-left: 5px;
`;

const SubscriptionTitle = styled.span`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color:#FFFFFF;
`;

const CardForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 34px;

  input{
    width: 100%;
    height: 52px;

    display: flex;
    align-items: center;
    padding-left: 14px;

    border: none;
    border-radius: 8px;
    background-color: #FFFFFF;


    ::placeholder{
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      
      color: #7E7E7E;
    }
  }

  div{
    input:first-child{
      width: 49%;
    }

    input:nth-child(2){
      width: 49%;
    }

    display: flex;
    justify-content: space-between;
  }

  button{
    width: 100%;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 8px;
    background-color: #FF4791;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color:#FFFFFF;
  }
`

export {
    PaymentContainer,
    Back,
    Perks,
    Subtitle,
    PerksName,
    SubscriptionTitle,
    CardForm
}