import Login from "./Components/Login";
import SignUp from "./Components/SignUP";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./Components/Todo";
import Auth from "./Components/Auth";
import Intro from "./Components/Intro";
import './App.css'

function App() {
  

  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route index element={<Intro/>}/>
        <Route path="auth" element={<Auth />}>
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
        </Route>
        <Route exact path="todo" element={<Todo/>} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
