import React from 'react'
import review from '../../../../assests/Rectangle 1278.png'
import reason from '../../../../assests/Rectangle 34624142.png'
const CarRequest = () => {
  let request = [
    { heading: "Renault twingo", period: "Renault twingo", periodDate: '28-30 janv.', periodTime: "Time left: 24:00:00", pic: review, price: "50 000", status: "Approved", reason: "", },
    { heading: "Renault twingo", period: "Renault twingo", periodDate: '28-30 janv.', periodTime: "", pic: review, price: "50 000", status: "Ended", reason: "" },
    { heading: "Renault twingo", period: "Renault twingo", periodDate: '28-30 janv.', periodTime: "", pic: review, price: "50 000", status: "Pending", reason: "" },
    { heading: "Renault twingo", period: "Renault twingo", periodDate: '28-30 janv.', periodTime: "", pic: reason, price: "50 000", status: "Rejected", reason: "Lörem ipsum koras proräligt ore triktigt os. Möpp is emedan e-learning autos. Selig bimeter. On sagär. Teralig hexaska eurons samt ghosta. Husa gängen diheten, utom plador pneumaitet. Beson treräv filobel för funktionell dumhet lör. Paraning varähet i krost autonar nyngen. Tigt hyperfas och logostik. Nenenade gulören nyska, befos huruvida vär." },
    { heading: "Renault twingo", period: "Renault twingo", periodDate: '28-30 janv.', periodTime: "", pic: review, price: "50 000", status: "Ongoing", reason: "" },
  ]
  return (
    <>
      {
        request.map((item, i) => (
          <div className='bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] h-full border-0 border-gray-100 px-5 py-5 mt-5' key={i}>
            <div className='flex lg:flex-nowrap flex-wrap  justify-between '>
              <div className='flex items-center'>
                <div className='h-[90px] w-[90px] rounded-full overflow-hidden'>
                  <img src={item?.pic} alt="review_img" className='object-cover' />
                </div>
                <div className='px-2.5'>
                  <h1 className='text-[16px] leding-[24px] text-[#444444] font-bold'>{item?.heading}</h1>
                  <p className='text-[#98A2B3] text-[15px] pt-1.5'>{item?.period}</p>
                  <p className='text-[#ACACAC] text-[16px] leading-[16px] pt-2'>{item?.periodDate}</p>
                  <p className='text-[#444444] text-[16px] leading-[16px] pt-1.5'>{item?.periodTime}</p>
                </div>
              </div>
              <div className='flex lg:flex-col md:flex-col lg:justify-center md:justify-start justify-between flex-row lg:w-auto md:w-auto w-full xxtra-small:mt-5'>
                <h2 className='text-[#FF8C00] text-[25px] leading-[35px] font-semibold'>{item?.price} FCFA</h2>
                <div className={`${item?.status === 'Approved' ? 'bg-[#ECFFEC] text-[#6ABD8B]' : item?.status === "Ended" ? 'bg-[#DCDCDC] text-[#363636]' : item.status === "Pending" ? 'bg-[#F0DFD6] text-[#8E3F3A]' : item.status === "Rejected" ? 'bg-[#FFE7E7] text-[#F04438]' : item.status === "Ongoing" ? "bg-[#FFECD6] text-[#FF8C00]" : ""} rounded-full text-center lg:mt-6 px-3.5 py-1 text-[16px] leading-[22px] max-w-[70%] lg:ml-auto xxtra-small:text-[14px] xxtra-small:leading-[26px]`}>
                  <h2>{item?.status}</h2>
                </div>
              </div>
            </div>
            {
              item.reason &&
              <div className='pt-6'>
                <h1 className='text-[#444444] text-[20px] leading-[24px]'>Reason:</h1>
                <p className='text-[#898989] text-[16px] leading-[24px] pt-2.5'>{item?.reason}</p>
              </div>
            }

          </div>
        ))
      }

    </>
  )
}

export default CarRequest