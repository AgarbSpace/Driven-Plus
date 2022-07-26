import styled from "styled-components";

const SubscriptionContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;

  span{
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 24px;
  }
`;

const SubInfoContainer = styled.div`
  width: 80%;
  height: 180px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;

  border: 3px solid #7e7e7e;
  border-radius: 12px;
  margin-bottom: 10px;
  gap: 20px;

  span{
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 0px;
  }
`;

export {
    SubscriptionContainer,
    SubInfoContainer
}