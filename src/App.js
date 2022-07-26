import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentPage from "./components/PaymentForm";
import { UserProvider } from "./contexts/userContext";
import GlobalStyle from "./GlobalStyle";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home";
import Subscriptions from "./Pages/Subscriptions";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={ <SignIn /> } />
          <Route path="/sign-up" element={ <SignUp /> }/>
          <Route path="/subscriptions" element={ <Subscriptions /> }/>
          <Route path="/subscriptions/:id" element={<PaymentPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
