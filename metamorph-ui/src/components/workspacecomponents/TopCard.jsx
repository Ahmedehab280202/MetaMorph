import React from "react";
import '../../CSS/workspace_styling/topcard.css'

const TopCard = () => {
  return (
    <div className="top_card_wrapper">
      <div className="top_card">
        <h4 className="top_card_header">
          Upgrade your workspace to Professional
        </h4>
        <div className="top_card_body">
          <p className="top_card_body_text">
            On the Free plan, you are limited to 1 project and 10 code views or
            downloads. For unlimited projects, custom domains, Vercel
            integration and a whole lot more, upgrade your workspace.
          </p>
          <button className="top_card_btn">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
