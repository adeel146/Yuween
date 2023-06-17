import React, { useState } from 'react'
import car from '../../../assests/newDesign/rent_car_bg_img.svg'
import Rent_bg_img from '../../../assests/newDesign/rent_bg_img.svg'
import { useEffect } from 'react'
import { GetMetaData } from '../../../lib/Api/WebsiteApi'
import car_orang from '../../../assests/newDesign/rent-orange-city-car.svg'
const Banner = () => {

  const [carLoading, setLoading] = useState(false)
  const [carModel, setCarModel] = useState([])
  const [carMake, setCarMake] = useState([])
  const [carYear, setCarYear] = useState([])

  useEffect(() => {
    try {
      setLoading(true)
      let fetchData = async () => {
        let { resModel, resMake, resYear } = await GetMetaData()
        let model = Object.assign({}, ...resModel)
        setCarModel(model?.models)
        let make = Object.assign({}, ...resMake)
        setCarMake(make?.makes)
        let year = Object.assign({}, ...resYear)
        setCarYear(year?.years)
        setLoading(false)
      }
      fetchData()
    }
    catch (err) { }
  }, [])
  return (
    <>
      {/* <div className='bg-rentImg bg-no-repeat bg-cover h-[500px] '> */}
      <div className='relative mt-9'>
        <div className='flex z-50  justify-end  tablet:pt-8 flex-wrap lg:flex-nowrap tablet:flex-nowrap  md:flex-nowrap '>
          <div className='w-[55%] flex justify-end  lg:order-1 tablet:order-1  order-0 md:order-1'>
            <img src={car} alt="car_img" className='object-cover -mt-10 ' />
          </div>
        </div>
        <div className='z-30'>
          <img src={Rent_bg_img} alt="car_img" className='object-cover -mt-20 xl:h-auto ' />
        </div>
        <div className='container  mx-auto xl:px-[110px]   md:px-5 lg:m-auto px-3 md:py-5'>
          <div className=' ml-5  absolute top-0 tablet:w-auto  lg:pb-5 md:pb-0 pb-5 lg:pt-10 md:pt-10 xl:order-0 bg-[#F4F4F4]  rounded-lg px-3 py-5  tablet:order-1  md:order-0 order-1'>
            <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center'>
              <select className='border text-[16.53px] font-medium leading-[19.84px] text-[#444444] rounded-md focus:outline-none lg:w-[354px] w-[330px] h-[50px] px-2 border-[ACACAC]'>
                <option>{carLoading ? "Loading...." : "Please Select"}</option>
                {
                  carMake?.map((item, i) => (
                    <option key={i}>{item?.name}</option>
                  ))
                }
              </select>
              <select className='border rounded-md focus:outline-none lg:w-[354px] w-[330px] h-[50px] my-3 px-2 border-[ACACAC]'>
                <option>{carLoading ? "Loading...." : "Please Select"}</option>
                {
                  carModel?.map((item, i) => (
                    <option key={i}>{item?.id_car_model}</option>
                  ))
                }
              </select>
              <select className='border rounded-md focus:outline-none lg:w-[354px] w-[330px] h-[50px] px-2 border-[ACACAC]'>
                <option>{carLoading ? "Loading...." : "Please Select"}</option>
                {
                  carYear?.map((item, i) => (
                    <option key={i}>{item?.year}</option>
                  ))
                }
              </select>
            </div>
            <div className='text-center  flex flex-col items-center lg:justify-center'>
              <p className='text-[15px] leading-[19.84px]  pt-[2rem] text-[#ACACAC]'>Votre revenu est estimé à</p>
              <h2 className='text-[31px] text-[#FF8C00] leading-[43.58px] font-semibold'>108 000 FCFA</h2>
              <span className='text-[16.53px] text-[#ACACAC] leading-[19.84px]  '>par mois</span>
              <button className='text-[text-16px] leading-[24px] mt-5 w-[175px] h-[44px] rounded-md font-medium bg-[#FF8C00] text-white'>Ça m’intéresse !</button>
            </div>


          </div>
          <div className='absolute right-0 top-20 flex justify-end items-end'>
            <img src={car_orang} alt="car_img" className='object-cover  w-[83%]  ' />

          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Banner