import { Container, Inputs } from "./styled/authPagesStyle";
import { Rings } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpPost } from "../../services/authApi";

export default function SignUp() {

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    cpf: "",
    email: "",
    password: ""
  });
  const [buttonStatus, setButtonStatus] = useState("loaded");
  const navigate = useNavigate();
    
  function handleInputChange(e){
    setSignUpForm({...signUpForm, [e.target.name]: e.target.value});
  }
    
  async function signUp(e){
    e.preventDefault();

    try {
      await signUpPost(signUpForm);
      navigate("/");
    } catch (error) {
      console.log(error);
      setButtonStatus("loaded")
    }
  }

  return (
    <Container>
      <Inputs onSubmit={signUp}>
        <input placeholder="Nome" type="text" name="name" value={signUpForm.name} onChange={handleInputChange}/>
        <input placeholder="CPF" type="text" name="cpf" value={signUpForm.cpf} onChange={handleInputChange}/>
        <input placeholder="E-mail" type="email" name="email" value={signUpForm.email} onChange={handleInputChange}/>
        <input placeholder="Senha" type="password" name="password" value={signUpForm.password} onChange={handleInputChange}/>
        <button type="submit" onClick={() => setButtonStatus("loading")}>{buttonStatus === "loading" ? <Rings type="Rings" color="#000000" height={40} width={40} /> : "CADASTRAR"}</button>
      </Inputs>
      <Link to="/">Já possui uma conta? Entre!</Link>
    </Container>
  );
}
