import React from 'react'
import user from '../../../../assests/Ellipse 1490.png'
import file from '../../../../assests/filesend.svg'
import send from '../../../../assests/send.svg'
import ffile from '../../../../assests/ffile.png'
import del from '../../../../assests/del.png'
import friend from '../../../../assests/Ellipse 1490 (1).png'
import { BsThreeDotsVertical } from 'react-icons/bs'
// import { useLocation } from 'react-router-dom'

const Messages = ({ type }) => {
  return (
    <>
      <div className="flex flex-col flex-auto h-full ">
        <div
          className={`flex flex-col flex-auto flex-shrink-0  ${type === "ticket" ? 'bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md' : 'bg-gray-100 rounded-md'} h-full p-4`}
        >
          <div className='flex justify-between items-center pb-2.5'>
            <div className='flex items-center'>
              <div className='h-[60px] w-[60px] rounded-full overflow-hidden'>
                <img src={friend} alt="user" className='object-cover' />
              </div>
              <div className='px-4'>
                <h2 className='lg:text-[26px] lg:leading-[39px] text-[18px] font-semibold text-[#444444]'>Florencio Dorrance</h2>
                <p className='text-[12px] text-[#898989] flex items-center leading-[18px]'>
                  <p className='w-[10px] mr-2 h-[10px] bg-[#06A551] rounded-full border-0' />
                  Onlion</p>
              </div>
            </div>
            <div className='bg-white rounded-md relative flex z-10 items-center justify-center h-[40px] w-[36px]'>
              <div class="group inline-block  ">
                <button
                  class="outline-none focus:outline-none  px-3 py-1  flex items-center"
                >
                  <BsThreeDotsVertical className='text-[20px] text-[#444444]' />

                </button>
                  <ul
                    class={`bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] p-2 rounded-md transform scale-0 group-hover:scale-100 absolute 
                    transition duration-150 ease-in-out top-full w-[150px] right-0  `}
                  >
                    <li class="rounded-sm cursor-pointer actions flex items-center px-2 py-2 mb-2 hover:bg-gray-100">
                      <img src={ffile} alt="file_img" className='object-cover' />
                      <h2 className='ml-2 text-[14px]' >Media</h2>
                    </li>

                    <li class="rounded-sm cursor-pointer flex items-center px-2 py-2 hover:bg-gray-100">
                      <img src={del} alt="file_img" className='object-cover' />
                      <h2 className='ml-2 text-[14px]'>Delete</h2>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          {type === "ticket" ? "" :
            <p className='border border-[gray-200]' />}

          <div className={`${type === "ticket" ? 'pt-0' : 'pt-4'}  flex justify-between items-center`}>
            <p className='border border-[#AEB2C0] opacity-[0.5] w-full' />
            <p className='text-[12px] text-[#444444] w-[48%] text-center'>8 Aug 2022</p>
            <p className='border border-[#AEB2C0] opacity-[0.5] w-full' />
          </div>

          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2 pt-4">
                <div className="col-start-1  col-end-13 p-3 rounded-lg ">
                  <div className="flex flex-row ">
                    <div
                      className=""
                    >
                      
                      <div className='h-[44px] w-[44px] rounded-full'>
                        <img src={user} alt="user" className='object-cover' />
                      </div>
                    </div>
                    <div className=''>
                      <div
                        className="relative ml-4 text-sm bg-white py-2 px-4 lg:w-auto w-full rounded-xl"
                      >
                        <div className='text-[#444444] text-[14px]'>Hey How are you today?</div>
                      </div>
                      <div className='flex justify-between items-center pt-2 pl-4'>
                        <p className='text-[#9F9F9F] text-[12px] '>4 days ago</p>
                        <p className='text-[#9F9F9F] text-[12px] '>11:05</p>
                      </div>
                    </div>
                  </div>


                </div>

                <div className=" col-start-1 col-end-13 p-3 rounded-lg">
                  <div className="flex  justify-start flex-row-reverse">
                    <div
                      className=""
                    >
                      <div className='h-[44px] w-[44px] rounded-full'>
                        <img src={friend} alt="user" className='object-cover' />
                      </div>
                    </div>
                    <div className=' mr-3'>
                      <div
                        className="relative text-sm bg-white py-2 px-4 rounded-xl"
                      >
                        <div className='text-[#444444] text-[14px]'>Hey How are you today?</div>
                      </div>
                      <div className='flex justify-between items-center pt-2 pl-4'>
                        <p className='text-[#9F9F9F] text-[12px] '>4 days ago</p>
                        <p className='text-[#9F9F9F] text-[12px] '>11:05</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <div className="mr-5 ml-3.5">
              <img src={file} alt="send" className='object-cover' />
            </div>
            <div
              className={`flex flex-row items-center h-[48px] rounded-xl ${type === "ticket" ? 'bg-[#F5F5F5]' : 'bg-white'} w-full px-4`}
            >
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder='Type a message'
                    className="flex w-full bg-transparent  focus:outline-none focus:border-indigo-300 h-full"
                  />
                </div>
              </div>
              <div className="ml-4">
                <img src={send} alt="send" className='object-cover' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messages