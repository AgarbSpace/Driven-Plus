import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
   ${reset}
   *{
      box-sizing: border-box;
      background-color: #0E0E13;
   }
`;

export default GlobalStyle;
