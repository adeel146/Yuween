import React from "react";
import message from "../../../../../assests/message.svg";
import call from "../../../../../assests/call.svg";
import car from "../../../../../assests/unsplash_eTuO9BNtcPA.png";
import car2 from "../../../../../assests/caar2.png";
import car3 from "../../../../../assests/car3.png";
import car4 from "../../../../../assests/car4.png";
import pump from "../../../../../assests/svg/carburant-icon.svg";
import boite from "../../../../../assests/svg/boite-icon.svg";
import seet from "../../../../../assests/svg/places-portes-icon.svg";
import setting from "../../../../../assests/svg/AC-icon.svg";
import usb from "../../../../../assests/svg/USB-icon.svg";
import upload from "../../../../../assests/Input fields.png";
import bluthoth from "../../../../../assests/svg/bluetooth-icon.svg";
import location from "../../../../../assests/svg/location-icon.svg";
// import { IoLocation } from 'react-icons/io5'
import file from "../../../../../assests/svg/file-icon.svg";
import { MdDelete, MdOutlineKeyboardArrowRight } from "react-icons/md";
import PieChart from "../../PieChart";
const CarlistDetail = (props) => {
  const { name = "" } = props;
  // const [isEdit, setIsEdit] = useState(true)

  return (
    <>
      <div className="flex items-center">
        <h2 className="text-[#ACACAC] text-[16px]">
          {name ? name : "Vehicle management"}
        </h2>
        <MdOutlineKeyboardArrowRight className="text-[#ACACAC] text-[20px]" />
        <h2 className="text-[#FF8C00] text-[16px]">Detail</h2>
      </div>

      {/* section 1  */}

      <section>
        <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md border-gray-100 p-5 my-5 pt-[29px]">
          <h1 className="text-[#FF8C00] text-[20px] font-semibold"> Details</h1>
          <div className="grid lg:gap-40 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 pt-5">
            <div className="">
              <h2 className="text-[#444444] text-[14px]">Number Plate</h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                REH1235GH
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[14px]">Brand</h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                Fortuner
              </p>
            </div>
            <div className="lg:my-0 md:my-0 my-3">
              <h2 className="text-[#444444] text-[14px]">Model</h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                206+
              </p>
            </div>
            <div className="lg:my-0 md:my-0 my-3">
              <h2 className="text-[#444444] text-[14px] text-left">Mileage</h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                50,000-100,000 km
              </p>
            </div>
          </div>
          <div className="grid lg:gap-40 lg:grid-cols-4 grid-cols-2 pt-10 xxtra-small:pt-3">
            <div className="">
              <h2 className="text-[#444444] text-[14px]">Vehicle type</h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                Non-Commercial
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[14px]"> Email</h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                azizmalik@example.com
              </p>
            </div>
            <div className="lg:my-0 md:my-0 my-3">
              <h2 className="text-[#444444] text-[14px]">Phone</h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                03422587560
              </p>
            </div>
            <div className="lg:my-0 md:my-0 my-3">
              <h2 className="text-[#444444] text-[14px] text-left">
                Vehicle ID
              </h2>
              <p className="text-[14px] pt-5 xxtra-small:pt-2 text-[#898989] leading-[22px]">
                0000168535
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
        <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md border-gray-100 p-5">
          <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center">
            <div className="bg-[#D9D9D9] max-w-[90px] w-full h-[87px] rounded-lg "></div>
            <div className="w-full lg:pl-9 md:pl-8 ">
              <div className="flex items-center">
                <h2 className="text-[#444444] text-[20px]">Jacob Jones</h2>
                <span className="text-[#ACACAC] text-[14px] px-5">
                  ( With Driver )
                </span>
              </div>
              <div className="flex justify-between items-start pt-1.5">
                <div className="">
                  <h2 className="text-[#ACACAC] text-[16px] leading[27px]">
                    Proprétaire
                  </h2>
                  <div
                    className={`bg-[#ECFFEC] mt-1.5 text-[16px] text-[#6ABD8B] rounded-full text-center px-2.5 w-full py-[3px] leading-[26px] ml-auto`}
                  >
                    <h2>Approved</h2>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={message} alt="message" className="object-cover" />
                  <img
                    src={call}
                    alt="message"
                    className="object-cover ml-2.5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <p className="text-[#ACACAC] text-[17px] leading-[23px]">
              Renault est connu pour son rôle dans le sport automobile, en
              particulier le rallye, la Formule 1 et la Formule E. Ses premiers
              travaux sur la modélisation mathématique des courbes pour les
              carrosseries automobiles sont importants dans l'histoire de
              l'infographie.Renault est connu pour son rôle dans{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-[309px] xxtra-small:h-[206px] rounded-xl overflow-hidden">
          <img src={car} alt="car" className="w-full" />
        </div>
      </div>

      {/*  section 2 */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 pt-6">
        <div className="bg-white lg:order-0 md:order-0 order-1 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md border-gray-100 p-5">
          <h1 className="text-[#FF8C00] font-semibold text-[20px] leading-[30px]">
            Caracteristiques
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 xxtra-small:grid-cols-3 grid-cols-2 pt-[30px]">
            <div className="">
              <img src={pump} alt="car" className="object-cover" />
              <h2 className="text-[#444444] font-medium text-[18px] xxtra-small:text-[14px] pt-6 xxtra-small:pt-3">
                Carburant
              </h2>
              <p className="text-[#ACACAC] text-[17px] xxtra-small:text-[12px] pt-1.5 xxtra-small:pt-1">
                Hybride
              </p>
            </div>
            <div className="">
              <img src={boite} alt="car" className="object-cover" />
              <h2 className="text-[#444444] font-medium text-[18px] xxtra-small:text-[14px] pt-6 xxtra-small:pt-3">
                Boite
              </h2>
              <p className="text-[#ACACAC] text-[17px] xxtra-small:text-[12px] pt-1.5 xxtra-small:pt-1">
                Manuelle
              </p>
            </div>
            <div className="lg:my-0 md:my-0 my-0">
              <img src={seet} alt="car" className="object-cover" />
              <h2 className="text-[#444444] font-medium text-[18px] xxtra-small:text-[14px] pt-6 xxtra-small:pt-3">
                Places, Portes
              </h2>
              <p className="text-[#ACACAC] text-[17px] xxtra-small:text-[12px] pt-1.5 xxtra-small:pt-1">
                2,2
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 xxtra-small:grid-cols-3 grid-cols-2 pt-11 xxtra-small:pt-6">
            <div className="">
              <img src={setting} alt="car" className="object-cover" />
              <h2 className="text-[#444444] font-medium text-[18px] xxtra-small:text-[14px] pt-6 xxtra-small:pt-3">
                AC
              </h2>
              <p className="text-[#ACACAC] text-[17px] xxtra-small:text-[12px] pt-1.5 xxtra-small:pt-1">
                convertisseur
              </p>
            </div>
            <div className="lg:my-0 md:my-0 my-0">
              <img src={usb} alt="car" className="object-cover" />
              <h2 className="text-[#444444] font-medium text-[18px] xxtra-small:text-[14px] pt-6 xxtra-small:pt-3">
                USB
              </h2>
              <p className="text-[#ACACAC] text-[17px] xxtra-small:text-[12px] pt-1.5 xxtra-small:pt-1">
                chargeur
              </p>
            </div>
            <div className="">
              <img src={bluthoth} alt="car" className="object-cover" />
              <h2 className="text-[#444444] font-medium text-[18px] xxtra-small:text-[14px] pt-6 xxtra-small:pt-3">
                Bluetooth
              </h2>
              <p className="text-[#ACACAC] text-[17px] xxtra-small:text-[12px] pt-1.5 xxtra-small:pt-1">
                connexion
              </p>
            </div>
          </div>
        </div>
        <div className="lg:order-1 md:order-1 order-0">
          <div className="grid grid-cols-5 gap-5 pl-1">
            <img
              src={car2}
              alt="car"
              className="object-cover w-full rounded-md border-[3px] border-[#FF8C00]"
            />
            <img
              src={car2}
              alt="car"
              className="object-cover w-full rounded-md"
            />
            <img
              src={car3}
              alt="car"
              className="object-cover w-full rounded-md"
            />
            <img
              src={car4}
              alt="car"
              className="object-cover w-full rounded-md"
            />
            <img
              src={car2}
              alt="car"
              className="object-cover w-full rounded-md"
            />
          </div>
          <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md p-5 mt-4">
            <h1 className="text-[#FF8C00] text-[20px] font-semibold">
              Total Requests
            </h1>
            <div>
              <PieChart />
            </div>
          </div>
        </div>
      </div>

      {/* secrtion 3  */}
      <section>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 pt-6">
          <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md border-gray-100 p-5">
            <h1 className="text-[#FF8C00] font-semibold text-[20px]">
              Location
            </h1>

            <div className="flex justify-between items-center pt-5">
              <h2 className="text-[#898989] text-[14px] leading-[22px]">
                Within Abidjan
              </h2>
              <p className="text-[#FF8C00]  text-[14px] leading-[22px]">
                33 000 FCFA<span className="text-[#898989] ">/day</span>
              </p>
            </div>
            <div className="flex justify-between items-center pt-5">
              <h2 className="text-[#898989] text-[14px] leading-[22px]">
                Within Abidjan
              </h2>
              <p className="text-[#FF8C00]  text-[14px] leading-[22px]">
                33 000 FCFA<span className="text-[#898989] ">/day</span>
              </p>
            </div>
            <div className="flex items-center pt-5">
              <img src={location} alt="" />
              {/* <IoLocation className='text-[#FF8C00]' /> */}
              <h2 className="ml-3.5 text-[#898989] text-[14px] leading-[22px]">
                4709 Shadowmar drive kenner, LA 70062
              </h2>
            </div>
          </div>
          <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md border-gray-100 p-5">
            <h1 className="text-[#FF8C00] font-semibold text-[20px] leading-[30px]">
              Rental Options
            </h1>

            <div className="flex justify-between items-center pt-5">
              <h2 className="text-[#444444] text-[14px]">Smokers</h2>
              <p className="text-[#444444]  text-[14px]">Pets</p>
            </div>
            <div className="flex justify-between items-center pt-5">
              <h2 className="text-[#898989] text-[14px]">Not Accepting</h2>
              <p className="text-[#898989]  text-[14px]">Not Accepting</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4  */}

      {/* <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md border-gray-100 p-5 mt-5'>
                <h1 className='text-[#FF8C00] font-semibold text-[18px]'>Vehicle Details</h1>
                <div className='grid grid-cols-5 lg:gap-28 pt-5'>
                    <div className=''>
                        <h2 className='text-[#444444] text-[14px] '>Number Plate</h2>
                        <p className='text-[#444444]  text-[14px]'>REH1235GH</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Brand</h2>
                        <p className='text-[#898989]  text-[14px]'>Fortuner</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Model</h2>
                        <p className='text-[#898989]  text-[14px]'>206+</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Mileage</h2>
                        <p className='text-[#898989]  text-[14px]'>50,000-100,000 km</p>
                    </div>
                    <div className=''>
                        <h2 className='text-[#898989] text-[14px] '>Vehicle type</h2>
                        <p className='text-[#898989]  text-[14px]'>Non-Commercial</p>
                    </div>

                </div>
            </div> */}

      {/* section 5  */}
      <section>
        <div className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 rounded-md border-gray-100 p-5 mt-5">
          <h1 className="text-[#FF8C00] text-[20px] font-semibold">
            Insurance Details
          </h1>
          <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center pt-5">
            <div className="">
              <h2 className="text-[#444444] text-[14px] xxtra-small:text-[12px]">
                Insurance ID
              </h2>
              <p className="text-[14px] pt-5 text-[#898989] leading-[22px] xxtra-small:text-[12px] xxtra-small:pt-3">
                REH1235GH
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[14px] xxtra-small:text-[12px]">
                Registration ID
              </h2>
              <p className="text-[14px] pt-5 text-[#898989] leading-[22px] xxtra-small:text-[12px] xxtra-small:pt-3">
                REH1235GH
              </p>
            </div>
            <div className="">
              <h2 className="text-[#444444] text-[14px] xxtra-small:text-[12px]">
                Insurance Validity
              </h2>
              <p className="text-[14px] pt-5 text-[#898989] leading-[22px] xxtra-small:text-[12px] xxtra-small:pt-3">
                1 month
              </p>
            </div>
            <div className=" w-[10%]">
              <h2 className="text-[#444444] text-[14px] xxtra-small:text-[12px] text-left">
                Status
              </h2>
              <p className="text-[16px] mt-5 text-[#2BA676] bg-[#E0F3EC] px-2.5 py-1 rounded-full leading-[22px] w-fit xxtra-small:text-[12px] xxtra-small:mt-2.5 xxtra-small:py-[1px]">
                valid
              </p>
            </div>
          </div>

          <div className="pt-5">
            <h2 className="text-[#444444] text-[14px] font-medium pb-5">
              Upload Insurance Doccuments
            </h2>
            <img src={upload} alt="upload" className="object-cover w-full" />
          </div>
          <div className="pt-5">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              {Array(4)
                .fill(4)
                .map((_, i) => (
                  <div
                    key={i}
                    className="border border-[#ACACAC] rounded-md mt-0 px-6"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={file}
                          alt="file_image"
                          className="object-cover"
                        />
                        <div className="px-3.5 py-2.5">
                          <p className="text-[12px] text-[#444444] leading-[12px]">
                            license front.PNG
                          </p>
                          <span className="text-[12px] text-[#898989]">
                            13 dec 2022, 5.7MB
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <h2 className="underline mx-2.5 text-[#397DED] text-[12px]">
                          Preview
                        </h2>
                        {<MdDelete className="text-[#F04438] " />}
                        {/* {isEdit && <MdDelete className='text-[#F04438] ' />} */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarlistDetail;
