import "./App.css";
import { BrowserRouter, Routes, Route } 
    from "react-router-dom";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import ChatHome from "./Screens/ChatHome";
import Menu from "./Screens/Menu";
import WaitPage from "./Screens/WaitPage";
import CategoryPage from "./Screens/Category";
import FeedbackPage from "./Screens/Feedback";
import PaymentPage from "./Screens/Payment";
import PaymentOptionsPage from "./Screens/PaymentMethod";
import ThanksForPaying from "./Screens/ThanksForPaying";
import UrgentWaitPage from "./Screens/Urgentwait";
   
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" 
            element={<SignIn />} />
          <Route path="/Signup" 
            element={<SignUp />} />
          <Route path="/chat-home/:receiverId"
            element={<ChatHome />} />
          <Route path="/menu" 
          element={<Menu/>}/>
          <Route path="/matching" 
          element={<WaitPage/>}/>
          <Route path="/whats-wrong" 
          element={<CategoryPage/>}/>
          <Route path="/feedback" 
          element={<FeedbackPage/>}/>
          <Route path="/payment" 
          element={<PaymentPage/>}/>
          <Route path="/payment-method" 
          element={<PaymentOptionsPage/>}/>
          <Route path="/success" 
          element={<ThanksForPaying/>}/>
          <Route path="/urgent" 
          element={<UrgentWaitPage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}
   
export default App;