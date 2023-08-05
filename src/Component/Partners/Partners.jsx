import React, { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {partners.map((partner, i) => (
          <PartnerCard key={i} partner={partner}></PartnerCard>
        ))}
      </div>
    </div>
  );
};

export default Partners;
