import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import GlobalStyle from "./GlobalStyle";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Subscriptions from "./Pages/Subscriptions";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={ <SignIn /> } />
          <Route path="/sign-up" element={ <SignUp /> }/>
          <Route path="/subscriptions" element={ <Subscriptions/> }/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
