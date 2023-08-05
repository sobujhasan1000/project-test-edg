import React from "react";

const PartnerCard = ({ partner }) => {
  const { name, email, profession, salary, gender, age,location } = partner;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary capitalize">{age}</div>
        </h2>
        <p>Gender: {gender}</p>
        <p>{email}</p>
        <p>Profession:{profession}</p>
        <p>Salary: ${salary}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
