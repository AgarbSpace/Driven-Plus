import { useContext, useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import UserContext from "../../contexts/userContext";
import useToken from "../../hooks/useToken";
import { getSubscriptionById } from "../../services/subsApi";
import PopUp from "../PopUp";
import { Back, CardForm, PaymentContainer, Perks, PerksName, SubscriptionTitle, Subtitle } from "./styled/paymentPageStyled";

export default function PaymentPage({subId}) {
  const [ cardForm, setCardForm ] = useState({
    membershipId: "",
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: ""
  });
  const [ subscriptionData, setSubscriptionData ] = useState(null);
  const [ display, setDisplay ] = useState("none")
  const token = useToken();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    async function getSubById() {
      try {
        const sub = await getSubscriptionById(token, subId);
        setSubscriptionData(sub);
      } catch (error) {
        console.log(error);
      }
    }
    getSubById();
  }, [subId, token]);

  if( subscriptionData === null ) {
    return (
      <PaymentContainer>
        <Rings type="Rings" color="#FFFFFF" height={200} width={200} />
      </PaymentContainer>
    )
  }

  function handleInputChange(e){
    setCardForm({...cardForm, [e.target.name]: e.target.value});
  }
  
  function confirmPayment(e){
    e.preventDefault();
  }

  if(display === "flex"){
    return (
      <PaymentContainer>
      <PopUp flex = "flex" setDisplay={setDisplay} id = {subId} />
      <Back>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </Back>
      <img src={subscriptionData.image} alt="logo" />
      <SubscriptionTitle>{subscriptionData.name}</SubscriptionTitle>
      <Perks>
        <div>
          <ion-icon name="list-circle-outline"></ion-icon>
          <Subtitle>Benefícios:</Subtitle>
        </div>
        {subscriptionData.perks.map((perk, index) => 
          <PerksName>{index+1}. {perk.title}</PerksName>
        )}
        <div>
          <ion-icon name="card-outline"></ion-icon>
          <Subtitle>Preco:</Subtitle>
        </div>
        <Subtitle>{subscriptionData.price} cobrados mensalmente</Subtitle>
      </Perks>
      <CardForm onSubmit={confirmPayment}>
        <input placeholder="Nome impresso no cartão" type="text" name="cardName" value={cardForm.cardName} onChange={handleInputChange} />
        <input placeholder="Digitos do cartão" type="text" name="cardNumber" value={cardForm.cardNumber} onChange={handleInputChange} />
        <div>
          <input placeholder="Código de segurança" type="text" name="securityNumber" value={cardForm.securityNumber} onChange={handleInputChange} />
          <input placeholder="Validade" type="text" name="expirationDate" value={cardForm.expirationDate} onChange={handleInputChange} />
        </div>
        <button type="submit" onClick={() => setDisplay("flex")} >ASSINAR</button>
      </CardForm>
    </PaymentContainer>
    )
  }

  return (
    <PaymentContainer>
      <PopUp display = "none"/>
      <Back>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </Back>
      <img src={subscriptionData.image} alt="logo" />
      <SubscriptionTitle>{subscriptionData.name}</SubscriptionTitle>
      <Perks>
        <div>
          <ion-icon name="list-circle-outline"></ion-icon>
          <Subtitle>Benefícios:</Subtitle>
        </div>
        {subscriptionData.perks.map((perk, index) => 
          <PerksName>{index+1}. {perk.title}</PerksName>
        )}
        <div>
          <ion-icon name="card-outline"></ion-icon>
          <Subtitle>Preco:</Subtitle>
        </div>
        <Subtitle>{subscriptionData.price} cobrados mensalmente</Subtitle>
      </Perks>
      <CardForm onSubmit={confirmPayment}>
        <input placeholder="Nome impresso no cartão" type="text" name="cardName" value={cardForm.cardName} onChange={handleInputChange} />
        <input placeholder="Digitos do cartão" type="text" name="cardNumber" value={cardForm.cardNumber} onChange={handleInputChange} />
        <div>
          <input placeholder="Código de segurança" type="text" name="securityNumber" value={cardForm.securityNumber} onChange={handleInputChange} />
          <input placeholder="Validade" type="text" name="expirationDate" value={cardForm.expirationDate} onChange={handleInputChange} />
        </div>
        <button type="submit" onClick={() => setDisplay("flex")} >ASSINAR</button>
      </CardForm>
    </PaymentContainer>
  );
}