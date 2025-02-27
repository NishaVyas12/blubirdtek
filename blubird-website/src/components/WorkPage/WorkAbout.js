import React from "react";
import CalendarIcon from "../../assets/images/Work/Calendar.svg";
import MapIcon from "../../assets/images/Work/Map.svg"; 
import "../../assets/css/WorkPage/WorkAbout.css";

const WorkAbout = () => {
  return (
    <section className="work_desc">
      <div className="work_left">
        <h1 className="desc_title">Best Restaurants</h1>
        <div className="work_info">
          <img src={CalendarIcon} alt="Calendar" className="icon" />2024
          <img src={MapIcon} alt="Location" className="icon" />Gold Coast | Australia
        </div>
        <hr className="line" />
        <ul className="work_left_desc">
          <li>- Branding visual and communication strategy</li>
          <li>- Website design and development</li>
          <li>- SEO</li>
        </ul>
      </div>
      <div className="work_right">
        <p className="desc_right_desc">
          With a gift card that unlocks a curated selection of Australia's finest
          eateries, Best Restaurants is about more than just dining; it's an
          invitation to feast on unique and memorable culinary experiences with those
          you love.
        </p>
        <br />
        <p className="desc_right_desc">
          As the appetite for new and diverse dining options grew, Best Restaurants
          and its parent company, Best Gift Group, recognised the need to spice up
          their brand to prepare for their expanding verticals. They chose Smack
          Bang to lead a creative overhaul, refreshing their brand and strategy to
          ensure they remain the top choice for food lovers everywhere.
        </p>
        <br />
        <p className="desc_right_desc">
          We cooked up a brand identity that's as bold and engaging as the flavours
          they champion, setting the table for Best Restaurants to serve up
          unforgettable dining adventures as they expand into new territories.
        </p>
        <h2 className="desc_right_title">Scope</h2>
        <div className="desc_right_scope">
          <div>
            <p>&#8226; Art Direction</p>
            <p>&#8226; Brand Strategy</p>
            <p>&#8226; Branding</p>
          </div>
          <div>
            <p>&#8226; Art Direction</p>
            <p>&#8226; Brand Strategy</p>
            <p>&#8226; Branding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAbout;
