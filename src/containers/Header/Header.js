import './Header.css';
import React from 'react'
import { Link } from 'react-router-dom';

let menu = [
  { to: "/", title: "Asosiy" },
  { to: "/about", title: "Biz haqimizda" },
  { to: "/dashboard", title: "Ishlab chiqarish" },
  { to: "/service", title: "Xizmatlar" },
  { to: "/Product", title: "Mahsulotlar" },
  { to: "/Constructor", title: "Qurilish" },
  { to: "/News", title: "Yangiliklar" },
  { to: "/Contact", title: "Aloqalar" },
];

const Header = () => {
    return (
      <header className="shadow ">
        <div className="container py-3 d-flex justify-content-between ">
          <div>
            {" "}
            <img src="osten.svg" className="osten" alt="" />
          </div>
          <div >
            {" "}
            {menu.map((item, value) => (
              <Link to={item.to} key={item.to} className=" items me-3 fw-bold stn ">
                {item.title}
              </Link>
            ))}
            {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link> */}
          </div>
        </div>
      </header>
    );
}

export default Header
