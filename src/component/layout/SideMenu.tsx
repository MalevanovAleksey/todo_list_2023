import React from "react";
import List from "../base/List";
import logo from "../../icons/logo.svg";
import { Button } from "../base/Button";
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import {
  MdFamilyRestroom,
  MdWorkOutline,
  MdOutlineSportsVolleyball,
} from "react-icons/md";

import { IoMdExit } from "react-icons/io";

export const SideMenu = () => {
  const logout = () => {
    console.log("Выход");
  };
  const addCategory = () => {
    console.log("Добавить категорию");
  };

  const defaultCategories = [
    { text: "Дом", icon: <AiOutlineHome /> },
    { text: "Семья", icon: <MdFamilyRestroom /> },
    { text: "Работа", icon: <MdWorkOutline /> },
    { text: "Спорт", icon: <MdOutlineSportsVolleyball /> },
  ];

  const defaultData = [
    { text: "Статистика", icon: <AiOutlineBarChart /> },
    { text: "Сравнить", icon: <AiOutlineLineChart /> },
  ];

  return (
    <div className="side-menu">
      <img src={logo} alt="logo" />
      <div>
        <List
          items={defaultCategories}
          listTitle="Категории"
          activityIcon={true}
        />

        <Button className="addCategories" onClick={addCategory}>
          <AiOutlinePlusSquare /> Добавить
        </Button>
      </div>

      <List items={defaultData} listTitle="Данные" />
      <Button
        useDefaultClassName={false}
        className="btn-logout"
        onClick={logout}
      >
        <IoMdExit /> <span>Выйти</span>
      </Button>
    </div>
  );
};
