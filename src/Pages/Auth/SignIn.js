import { Container, Inputs } from "./styled/authPagesStyle";
import logo from "../../assets/divenpluslogo.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Rings } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";
import { signInPost } from "../../services/authApi";

export default function SignIn() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [buttonStatus, setButtonStatus] = useState("loaded");
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  function handleInputChange(e){
    setLoginForm({...loginForm, [e.target.name]: e.target.value});
  }

  async function login(e){
    e.preventDefault();

    try {
      const userData = await signInPost(loginForm); 
      setUserData(userData);
      //toast("Login realizado com sucesso!!");
      navigate("/subscriptions")
    } catch (error) {
      //toast("Não foi possível fazer o login!!");
      setButtonStatus("loaded");
    }
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Inputs onSubmit={login}>
        <input placeholder="E-mail" type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
        <input placeholder="Senha" type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
        <button type="submit" onClick={() => setButtonStatus("loading")} >{buttonStatus === "loading" ? <Rings type="Rings" color="#000000" height={40} width={40} /> : "ENTRAR"}</button>
      </Inputs>
      <Link to="/sign-up">Não possui uma conta? Cadastre-se!</Link>
    </Container>
  );
}
