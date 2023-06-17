import React, { useState } from 'react'
// import rent from '../../../assests/rent.png'
import { BsEye, BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import ReactPaginate from 'react-paginate';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import { BiRefresh } from 'react-icons/bi';
const TicketDetail = ({ setDetail }) => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    const [itemOffset, setItemOffset] = useState(0);
    const [itemperPage, setItemPerPage] = useState(6);

    const endOffset = itemOffset + itemperPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemperPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemperPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div>
                <div className="overflow-x-auto bg-white rounded-md mt-6 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
                    {
                        // currentItems.length > 0 ?
                        <>
                            <table className="table-auto w-full">
                                {/* Table header */}
                                <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                                    <tr className='text-[#626973]'>

                                        <th className="px-5 py-4 pr-[25px] whitespace-nowrap w-px">
                                            <div className="font-[500] text-[14px] text-left">ID</div>
                                        </th>
                                        <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-center">Username</div>
                                        </th>
                                        <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">Email</div>
                                        </th>
                                        <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">Title</div>
                                        </th>
                                        <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">Status</div>
                                        </th>
                                        <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm">
                                    {
                                        currentItems.map((_, i) =>
                                            <tr className=' cursor-pointer' >
                                                <td className="px-5 py-4 pr-[25px] flex items-center whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">1374</div>
                                                </td>
                                                <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                    <div className="text-center text-[14px] text-[#898989]">DF683HF9</div>
                                                </td>
                                                <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">abc@example.com</div>
                                                </td>
                                                <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">Amet minim mollit non deserunt ullamco est sit</div>
                                                </td>

                                                <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                    <div className="text-center py-[3px] w-fit px-2.5 text-[12px] leading-4 text-[#0041B2] rounded-full bg-[#E9F3FF]">
                                                        Open</div>
                                                </td>
                                                <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                    <div className="text-center flex justify-center ">
                                                        {/* <BsThreeDotsVertical className='text-[20px] text-[#898989]' /> */}
                                                        {/* <GenericDrodown /> */}

                                                        <div class="group inline-block">
                                                            <button

                                                                class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center"
                                                            >
                                                                <BsThreeDotsVertical className='text-[20px] text-[#898989]' />

                                                            </button>
                                                            <ul
                                                                class="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] p-2 rounded-md transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out right-7 origin-top lg:w-[12%]  "
                                                            >

                                                                <li class="rounded-sm flex items-center px-2 py-2 mb-2 hover:bg-gray-100">
                                                                    <BsPencil className='text-[15px]' />
                                                                    <h2 className='ml-2'>Edit</h2>
                                                                </li>
                                                                <li class="rounded-sm flex items-center px-2 py-2 mb-2 hover:bg-gray-100">
                                                                    <BsTrash className='text-[15px]' />
                                                                    <h2 className='ml-2'>Delete</h2>
                                                                </li>
                                                                <li onClick={() => setDetail(true)} class="rounded-sm actions flex items-center px-2 py-2 hover:bg-gray-100">
                                                                    <BsEye className='text-[15px]' />
                                                                    <h2 className='ml-2'>View details</h2>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>


                        </>
                        // :
                        // <div className='p-5 '>
                        //     <h2>Record not found</h2>
                        // </div>
                    }

                </div>
                <div className='flex flex-wrap justify-between items-center pt-6'>
                    <div className='flex items-center'>
                        <h2 className='text-[#333333] text-[12px]'>Show</h2>
                        <select value={itemperPage} onChange={(e) => setItemPerPage(e.target.value)} className='border focus:outline-none rounded-md px-3 py-2.5 mx-3 text-[12px]'>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        <h2 className='text-[#333333] text-[12px]'>entries of {items?.length}</h2>
                    </div>
                    <div className='lg:px-8 my-6 '>
                        <ReactPaginate
                            breakLabel="..."
                            breakClassName=" bg-[#F3F3F3]"
                            nextLabel={<MdOutlineKeyboardArrowRight />}
                            onPageChange={handlePageClick}
                            activeClassName="bg-[#FF8C00] text-white rounded"
                            nextClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded"
                            previousClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded"
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={<MdOutlineKeyboardArrowLeft />}
                            className=" flex justify-end"
                            pageClassName=" w-[30px] h-[30px]  text-center mx-2 pt-[3px] rounded bg-[#F3F3F3] "
                            renderOnZeroPageCount={null}
                        />


                    </div>

                </div>

            </div>
        </>
    )
}

export default TicketDetail