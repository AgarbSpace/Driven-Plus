import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../../contexts/userContext";
import useToken from "../../hooks/useToken";
import { cancelSubs } from "../../services/subsApi";
import { ChangeOrCancelButtonsContainer, ContentContainer, HomeContainer, UserAndPerksContainer } from "./styled/homeStyled";

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const token = useToken();

  function handlePlanChange() {
    setUserData({...userData, membership: null});
    navigate("/subscriptions");
  }

  async function cancelPlan() {
    try {
      cancelSubs(token);
      setUserData({...userData, membership: null});
      navigate("/subscriptions");
      
    } catch (error) {
        Swal.fire({
            html: `<h1 style = 'color: #000000; background-color: #FFFFFF; font-family: Roboto; font-weight: 700; font-size: 18px; text-align: center; line-height: 21px;'>Algo deu errado, tente novamente! </h1>`,
            width: '80%',
            background: '#FFFFFF',
            confirmButtonColor: '#FF4791'
          })
    }
  }

  return (
    <HomeContainer>
      <ContentContainer>
        <UserAndPerksContainer>
          <div>
            <img  src={userData.membership.image} alt="logo" />
            <ion-icon name="person-circle"></ion-icon>
          </div>
          <span>Olá, {userData.name}</span>
          {userData.membership.perks.map( (perk) => 
          <button>{perk.title}</button>)}
        </UserAndPerksContainer>
        <ChangeOrCancelButtonsContainer>
          <button onClick={handlePlanChange}>Alterar Plano</button>
          <button onClick={cancelPlan}>Cancelar Plano</button>
        </ChangeOrCancelButtonsContainer>
      </ContentContainer>'
    </HomeContainer>
  )
}