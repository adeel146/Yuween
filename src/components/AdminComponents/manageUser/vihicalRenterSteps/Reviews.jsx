import React, { useState } from "react";
import review from "../../../../assests/review.png";
import { AiFillStar } from "react-icons/ai";
// import star from '../../../assests/star.png'

const Reviews = () => {
  const [expanded, setexpanded] = useState(false);
  return (
    <>
      <div className="bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] h-full border-0 p-5">
        <div className="flex items-center pb-5 ">
          <div className="h-[131px] h-[131px] rounded-full overflow-hidden">
            <img
              src={review}
              alt="review_img"
              className="object-cover rounded-full w-full"
            />
          </div>
          <div className="px-5">
            <h1 className="lg:text-[21px] text-[21px] text-[#444444] font-semibold">
              Renault Twingo
            </h1>
            <div className="flex items-center pt-0">
              {Array(5)
                .fill(5)
                .map((_, i) => (
                  <div key={i}>
                    <AiFillStar className="text-[#FF8C00]" />
                  </div>
                ))}
              <span className="text-[#B8B8B8] text-[14px] px-2 leading-[22px]">
                (200)
              </span>
            </div>
          </div>
        </div>
        <hr className="border-[#E0E0E0]" />
        <div className="py-4 px-2">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="lg:text-[20px] text-[20px] text-[#444444] leading-[30px] font-semibold">
                John Din
              </h1>
              <div className="flex items-center pt-2.5">
                {Array(5)
                  .fill(5)
                  .map((_, i) => (
                    <div key={i}>
                      <AiFillStar className="text-[#FF8C00]" />
                    </div>
                  ))}
                <span className="text-[#B8B8B8] text-[14px] px-2">(200)</span>
              </div>
            </div>
            <div>
              <h1 className="text-[#444444] font-semibold text-[14px]">
                Dec 7, 2022
              </h1>
            </div>
          </div>
          <div className="py-3">
            <p
              className={`text-[#898989] text-[16px] w-full  ${
                expanded ? "line-clamp-none" : "line-clamp-2"
              } `}
            >
              Lörem ipsum koras proräligt ore triktigt os. Möpp is emedan
              e-learning autos. Selig bimeter. On sagär. Teralig hexaska eurons
              samt ghosta. Husa gängen diheten, utom plador pneumaitet. Beson
              treräv filobel för funktionell dumhet lör. Paraning varähet i
              krost autonar nyngen. Tigt hyperfas och logostik. Nenenade gulören
              nyska, befos huruvida . Husa gängen diheten, utom plador
              pneumaitet. Beson treräv filobel för funktionell dumhet lör.
              Paraning varähet i krost autonar nyngen.
            </p>
          </div>
          <div className="flex justify-end ">
            <h2
              onClick={() => setexpanded(!expanded)}
              className="text-[#0D7CFF] text-[16px] cursor-pointer hover:underline "
            >
              {expanded ? "See Less" : "See more"}
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] h-full border-0 p-5 mt-5">
        <div className="flex items-center pb-5 ">
          <div className="h-[131px] h-[131px] rounded-full overflow-hidden">
            <img
              src={review}
              alt="review_img"
              className="object-cover rounded-full w-full"
            />
          </div>
          <div className="px-5">
            <h1 className="lg:text-[21px] text-[21px] text-[#444444] font-semibold">
              Renault Twingo
            </h1>
            <div className="flex items-center pt-0">
              {Array(5)
                .fill(5)
                .map((_, i) => (
                  <div key={i}>
                    <AiFillStar className="text-[#FF8C00]" />
                  </div>
                ))}
              <span className="text-[#B8B8B8] text-[14px] px-2 leading-[22px]">
                (200)
              </span>
            </div>
          </div>
        </div>
        <hr className="border-[#E0E0E0]" />
        {Array(3)
          .fill(3)
          .map((_, i) => (
            <div className="py-4 px-2 " key={i}>
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="lg:text-[20px] text-[20px] text-[#444444]  font-semibold">
                    John Din
                  </h1>
                  <div className="flex items-center pt-2.5">
                    {Array(5)
                      .fill(5)
                      .map((_, i) => (
                        <div>
                          <AiFillStar className="text-[#FF8C00]" />
                        </div>
                      ))}
                    <span className="text-[#B8B8B8] text-[14px] px-2">
                      (200)
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#444444] font-semibold text-[14px]">
                    Dec 7, 2022
                  </h1>
                </div>
              </div>
              <div className="py-3">
                <p className="text-[#898989] text-[16px] ">
                  Lörem ipsum koras proräligt ore triktigt os. Möpp is emedan
                  e-learning autos. Selig bimeter. On sagär. Teralig hexaska
                  eurons samt ghosta. Husa gängen diheten, utom plador
                  pneumaitet. Beson treräv filobel för funktionell dumhet lör.
                  Paraning varähet i krost autonar nyngen. Tigt hyperfas och
                  logostik. Nenenade gulören nyska, befos huruvida vär. .
                </p>
              </div>
              {/* <div className='flex justify-end '>
              <h2 className='text-[#0D7CFF] text-[16px] cursor-pointer'>See more</h2>
            </div> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default Reviews;
