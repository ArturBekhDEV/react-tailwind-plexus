import React from "react";

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left  py-12 px-8">
      <div>
        <div className="blue inline-flex p-2 ">{props.icon}</div>
        <h3 className="text-xl font-bold py-4">{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
