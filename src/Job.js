import React from "react";

const Job = () => {
  return (
    // const Title = ({ title, contraType, country, city }) =>
    <div className="container">
      {/* className="item" */}
      <div className="item red">
        {/* className="title" */}
        <div className="title">Infirmiere</div>
        {/* className=contratType */}
        <div className="contratType"></div>
      </div>
      <div className="item green">
        <div className="title">Gardien</div>
      </div>
      <div className="item yellow">
        <div className="title">Responsable d'atelier</div>
      </div>
      <div className="item blue">
        <div className="title">Chef de projet</div>
      </div>
      <div className="item pink">
        <div className="title">Developpeur react.js</div>
      </div>
      <div className="item red">
        <div className="title">Sales Associate - Stockholm</div>
      </div>
      <div className="item green">
        <div className="title">Vendeur/se</div>
      </div>
      <div className="item yellow">
        <div className="title">CRM & Data Analyst</div>
      </div>
      <div className="item blue">
        <div className="title">Infirmier (H/F)</div>
      </div>
    </div>
    //className, title, contractType, country et city
  );
};
export default Job;
