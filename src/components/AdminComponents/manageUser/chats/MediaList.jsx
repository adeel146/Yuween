import React from 'react'
import close from '../../../../assests/svg/close.svg'
import donwload from '../../../../assests/svg/down.svg'
import filepdf from '../../../../assests/svg/pdf.svg'
import filexls from '../../../../assests/svg/xls.svg'
import docCode from '../../../../assests/svg/documentcode.svg'
import docXXl from '../../../../assests/svg/documenttext.svg'
const MediaList = () => {


  const media = [
    { pic: filepdf, heading: "i9.pdf", file: "PDF", size: "9" },
    { pic: filexls, heading: "Screenshot-3817.png", file: "PNG", size: "4" },
    { pic: filepdf, heading: "share-file.docx", file: "DOC", size: "555" },
    { pic: filepdf, heading: "Jerry-2020_I-9_Form.xxl", file: "XXL", size: "24" },
    { pic: filepdf, heading: "i9.pdf", file: "PDF", size: "9" },
  ]

  return (
    <>

      <div className='bg-[white] rounded shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0'>
        <div className='flex justify-between items-center border-b p-6'>
          <h2 className='text-[18px] leading-[27px]'>Media</h2>
          <div className='bg-[#F7F7F6] rounded-md p-2 cursor-pointer' >
            <img src={close} alt="close" className='object-cover' />
          </div>
        </div>
        <hr className='mt-6' />
        <div className='py-6 px-4'>
          <div className=' flex items-center'>
            <h1 className='text-[#444444] text-[16px]'>Files</h1>
            <div className='bg-[#94D8B4] rounded-full mx-3 '>
              <h2 className='text-white text-[16px] px-2 py-[2px] font-semibold'>125</h2>
            </div>
          </div>
          {
            media.map((item, i) => (
              <div className='pt-8 flex justify-between items-center' key={i}>
                <div className='flex items-center'>
                  {
                    item?.file === "PDF" || item?.file === "PNG" ?
                      < img src={item?.pic} alt="close" className='object-cover' />
                      :
                        <img src={item?.file === "DOC" ? docCode : item?.file === "XXL" ? docXXl : ""} width='37px' height='37px' alt="close" className='object-cover' />
                      // <div className='bg-[#EBEBEB] rounded-md p-3'>
                      // </div>
                  }
                  <div className='ml-4'>
                    <h2 className='text-[12px] font-semibold text-[#444444] '>{item?.heading}</h2>
                    <p className='text-[14px] text-[#98A2B3]'>PDF <span>9mb</span></p>
                  </div>
                </div>
                <div>
                  <img src={donwload} alt="close" className='object-cover' />
                </div>
              </div>
            ))
          }


        </div>
      </div>
    </>
  )
}

export default MediaList