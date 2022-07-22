import { PopUpContainer } from "./styled/popUpStyled";

export default function PopUp() {
  return(
    <PopUpContainer>
        <ion-icon name="close-outline"></ion-icon>
        <div>
            <span>Tem certeza que deseja assinar o plano...</span>
            <div>
                <button>NÃO</button>
                <button>SIM</button>
            </div>
        </div>
    </PopUpContainer>
  )
}