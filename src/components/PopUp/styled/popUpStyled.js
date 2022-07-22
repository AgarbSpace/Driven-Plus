import styled from "styled-components"

const PopUpContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);

  ion-icon{
    width: 50px;
    height: 50px;

    position: fixed;
    top: 26px;
    right: 20px;

    color: #FFFFFF
  }

  div{
    width: 248px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 33px;
    padding-bottom: 20px;
    background-color: #FFFFFF;

    span{
        font-family: Roboto;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;

        background-color: #FFFFFF;
    }

    div{
        display: flex;
        flex-direction: row;
        height: 52px;
        width: 200px;

        button{
            width: 95px;
            height: 52px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: none;
            border-radius: 8px;

            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: left;
            color: #FFFFFF;
            background-color: #FF4791;
        }

        button:first-child{
            background-color: #CECECE;
        }
    }
  }
`

export {
    PopUpContainer
}