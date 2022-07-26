import { useContext, useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../../contexts/userContext";
import useToken from "../../hooks/useToken";
import { getSubscriptionById, postSubs } from "../../services/subsApi";
import { Back, CardForm, PaymentContainer, Perks, PerksName, SubscriptionTitle, Subtitle } from "./styled/paymentPageStyled";

export default function PaymentPage() {
  const [ cardForm, setCardForm ] = useState({
    membershipId: "",
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: ""
  });
  const [ subscriptionData, setSubscriptionData ] = useState(null);
  const token = useToken();
  const { userData, setUserData } = useContext(UserContext);
  const { id } = useParams('/subscriptions/:id');
  const navigate = useNavigate();

  useEffect(() => {
    async function getSubById() {
      try {
        const sub = await getSubscriptionById(token, id);
        setSubscriptionData(sub);
      } catch (error) {
        console.log(error);
      }
    }
    getSubById();
  }, [id, token]);

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
    const date = cardForm.expirationDate.split("-");
    const dateFormatted = `${date[1]}/${date[0].slice(2,4)}`

    Swal.fire({
      html: `<h1 style = 'color: #000000; background-color: #FFFFFF; font-family: Roboto; font-weight: 700; font-size: 18px; text-align: center; line-height: 21px;'>Tem certeza que deseja assinar o plano <br> ${subscriptionData.name} (${Number(subscriptionData.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})})?</h1>`,
      width: '80%',
      background: '#FFFFFF',
      confirmButtonColor: '#FF4791',
      confirmButtonText: `<h1 style = 'color: #fff; font-family: Roboto; font-weight: 400; font-size: 14px; text-align: center; line-height: 16px; border: none;'>SIM</h1>`,
      cancelButtonText: `<h1 style = 'color: #fff; font-family: Roboto; font-weight: 400; font-size: 14px; text-align: center; line-height: 16px;'>Não</h1>`,
      showCancelButton: true,
      cancelButtonColor: '#CECECE',
    }).then((result) =>{
        if(result.isConfirmed){
          postSubs(token, {...cardForm, expirationDate: dateFormatted, membershipId: subscriptionData.id})
          .then((res) => {
            setUserData({...userData, membership: res.data.membership});
            navigate("/home");
          })
          .catch((err) =>{
            Swal.fire({
              html: `<h1 style = 'color: #000000; background-color: #FFFFFF; font-family: Roboto; font-weight: 700; font-size: 18px; text-align: center; line-height: 21px;'>Algo deu errado, tente novamente! </h1>`,
              width: '80%',
              background: '#FFFFFF',
              confirmButtonColor: '#FF4791'
            })
          })
        }
    });
  }

  return (
    <PaymentContainer>
      <Back>
        <ion-icon name="arrow-back-outline" onClick={() => navigate("/subscriptions")}></ion-icon>
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
          <input placeholder="Validade" type="month" name="expirationDate" value={cardForm.expirationDate} onChange={handleInputChange} />
        </div>
        <button type="submit" >ASSINAR</button>
      </CardForm>
    </PaymentContainer>
  );
}