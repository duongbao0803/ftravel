import React from "react";
import CityList from "../CityList";

const CityManagement: React.FC = React.memo(() => {
  return (
    <>
      <div className="rounded-t-xl bg-[#e8e8e8] p-5">
        <p className="text-2xl font-bold text-[#000000]">Quản lý thành phố</p>
      </div>
      <div className="p-5">
        <CityList />
      </div>
    </>
  );
});

export default CityManagement;
