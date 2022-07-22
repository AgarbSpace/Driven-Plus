import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { ChangeOrCancelButtonsContainer, ContentContainer, HomeContainer, UserAndPerksContainer } from "./styled/homeStyled";

export default function Home(){
  const { userData } = useContext(UserContext);

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
          <button>Alterar Plano</button>
          <button>Cancelar Plano</button>
        </ChangeOrCancelButtonsContainer>
      </ContentContainer>'
    </HomeContainer>
  )
}