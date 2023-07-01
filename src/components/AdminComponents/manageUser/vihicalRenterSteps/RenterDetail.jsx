import React, { useState } from "react";
import Profile from "./RentalDetail/Profile";
import Drivinglicence from "./RentalDetail/Drivinglicence";
import PaymentInfo from "./RentalDetail/PaymentInfo";

const RenterDetail = ({ rentalUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div>
        {isEdit && (
          <div className="text-[#ACACAC] text-[16px] pb-4">
            <span
              className="cursor-pointer"
              onClick={() => setIsEdit(false)}
            >{`Rental Detail  >  `}</span>
            <span className="text-[#FF8C00]">Edit</span>
          </div>
        )}
        {/* User profile  */}
        <Profile
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          rentalUser={rentalUser}
        />
        <div className="grid lg:grid-cols-2  gap-5">
          <div>
            <Drivinglicence isEdit={isEdit} />
          </div>
          <div>
            <PaymentInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default RenterDetail;
