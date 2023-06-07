import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <div className="menu">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/drift">Дрифт-такси</NavLink>
      <NavLink to="/timeattack">Time Attack</NavLink>
      <NavLink to="/forza">Forza Karting</NavLink>
    </div>
  );
}
