import React from "react";
import "./styles/main.scss";
import { Login } from "./component/pages/Login/Login";
import logo from "./icons/logo.svg";
import copyright from "./icons/copyright.svg";

export const App = () => {
  return (
    <div className="layout">
      {/* свапнуть на компонент, причем их должно быть 2 разных AppHeader*/}
      <header className="app-header">
        <img src={logo} alt="logo" />
      </header>
      {/* <Content>{!store.app.user ? !store.app.wasLogged ? <LogIn /> : <LogOut /> : <AppContent />}</Content> */}
      <section className="app-section">
        <Login />
      </section>

      {/* свапнуть на компонент, причем их должно быть 2 разных AppFooter */}
      <footer className="app-footer">
        <img src={copyright} alt="Copyright" />
        Malevanov Aleksey 2023
      </footer>
    </div>
  );
};

export default App;
