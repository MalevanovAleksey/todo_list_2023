import React from "react";
import { Button } from "../../base/Button";
import facebook from "../../../icons/facebook.svg";
import twitter from "../../../icons/twitter.svg";
const handleLogin = (event: MouseEvent) => {
  event.preventDefault();
};

const handleRegistration = (event: MouseEvent) => {
  event.preventDefault();
};

const handleClick = () => {
  console.log("клик по икноке");
};

export const Login = () => {
  return (
    <div className="login__container">
      <div className="login__title">Вход в аккаунт</div>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Пароль" />
        <Button onClick={handleLogin} className="singIn">
          Войти
        </Button>
      </form>
      <div className="login__singUp-title">
        <span>Еще нет аккаунта?</span>
        <Button
          useDefaultClassName={false}
          className="singUp"
          onClick={handleRegistration}
        >
          Регистрация
        </Button>
      </div>

      <div className="login__or">
        <div className="line"></div>
        <span>или</span>
        <div className="line"></div>
      </div>

      <div className="login__providers">
        <img src={facebook} alt="Facebook" onClick={handleClick} />
        <img src={twitter} alt="Facebook" />
      </div>
    </div>
  );
};
