import { useEffect, useState } from "react";
import { PopUpContainer } from "./styled/popUpStyled";

export default function PopUp({display, flex, id}) {
  const [ popUpDisplay, setPopUpDisplay ] = useState(display);
  
  useEffect(() => {
    if(flex){
      setPopUpDisplay(flex);
    }
  }, [flex])

  function closePopup(){
    setPopUpDisplay("none");
  }

  return(
    <PopUpContainer popUpDisplay={popUpDisplay}>
        <ion-icon name="close-outline"></ion-icon>
        <div>
            <span>Tem certeza que deseja assinar o plano...</span>
            <div>
                <button onClick={closePopup}>NÃO</button>
                <button>SIM</button>
            </div>
        </div>
    </PopUpContainer>
  )
}