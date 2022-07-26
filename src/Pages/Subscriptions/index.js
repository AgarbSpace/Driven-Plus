import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { getSubscriptions } from "../../services/subsApi";
import { SubInfoContainer, SubscriptionContainer } from "./styled/subscriptionsPageStyled";

export default function Subscriptions({changePlan}) {
  const [ subscriptions, setSubscriptions ] = useState([]);
  const token = useToken();
  const navigate = useNavigate()

  useEffect(() => {
    async function getSubs() {
      try {
        const subs = await getSubscriptions(token);
        setSubscriptions(subs);
      } catch (error) {
        console.log(error);
      }
    }
    getSubs()
  }, [token]);

  if( subscriptions.length === 0 ) {
    return (
      <SubscriptionContainer>
        <Rings type="Rings" color="#FFFFFF" height={200} width={200} />
      </SubscriptionContainer>
    )
  }

  return (
    <SubscriptionContainer>
      <span>Escolha seu Plano</span>
      {subscriptions.map((infos) => 
        <SubInfoContainer onClick={() => navigate(`/subscriptions/${infos.id}`)}>
          <img key={infos.id} src={infos.image} alt="logo" />
          <span>R$ {infos.price}</span>
        </SubInfoContainer>
        )}
    </SubscriptionContainer>
  );
}