import "./Home.css"
import React from 'react'

const Home = () => {
    return (
      <div className="container-flued">
        <div className="written_items ">
          <h1 className="h1 text-light fw-bold">
            "Osten" - bu Markaziy Osiyoda noyob liftlar <br /> va eskalatorlar
            ishlab chiqaruvchisi
          </h1>
          <p className="p text-light fw-bold">
            Osten 2019 yilda tashkil etilgan!
          </p>
          <input
            type="button"
            value="Batafsil ma'lumot"
            placeholder=""
            className="btn btn-warning"
          />
        </div>

        {/* ================================= */}
        {/* BIZNING XIZMATLARIMIZ section */}
        {/* ================================= */}
      </div>
    );
  
}
<footer>
  <div className="col col-sm-6 col-md-4 col-lg-3">
    <ul>
      <li>asosiy</li>
      <li>Biz haqimizda</li>
      <li>Ishlab chiqarish</li>
      <li>Xizmatlar</li>
    </ul>
  </div>

  <div className="col col-sm-6 col-md-4 col-lg-3">
    <ul>
      <li>asosiy</li>
      <li>Biz haqimizda</li>
      <li>Ishlab chiqarish</li>
      <li>Xizmatlar</li>
    </ul>
  </div>

  <div className="col col-sm-6 col-md-4 col-lg-3">
    <ul>
      <li>asosiy</li>
      <li>Biz haqimizda</li>
      <li>Ishlab chiqarish</li>
      <li>Xizmatlar</li>
    </ul>
  </div>

  <div className="col col-sm-6 col-md-4 col-lg-3">
    <ul>
      <li>asosiy</li>
      <li>Biz haqimizda</li>
      <li>Ishlab chiqarish</li>
      <li>Xizmatlar</li>
    </ul>
  </div>
</footer>;

export default Home;
