import React, { useState } from "react";
import AppRouter from "./Router";
import {authService} from "../firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <AppRouter isLoggedIn={isLoggedIn}/>;
}

export default App;
