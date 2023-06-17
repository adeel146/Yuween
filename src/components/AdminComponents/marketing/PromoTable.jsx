import React, { useState } from 'react'
import { BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import { IoMdShareAlt } from 'react-icons/io'
import ReactPaginate from 'react-paginate';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Popup from '../../../util/popup/Popup';
import DeleteData from './DeleteData';
import EditData from './EditData';
import ShareData from './shareData';
const PromoTable = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");
    const [itemOffset, setItemOffset] = useState(0);
    const [itemperPage, setItemPerPage] = useState(6);

    const endOffset = itemOffset + itemperPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemperPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemperPage) % items.length;
        setItemOffset(newOffset);
    };



    const openPopup = (e, mode) => {
        e.stopPropagation()
        setShow(true)
        setType(mode)
    }

    return (
        <>
            {show && <Popup modalOpen={show} data={type === "Edit" ? <EditData /> : type === "Delete" ? <DeleteData setShow={(val) => setShow(val)} /> : <ShareData />} onClose={() => setShow(false)} />}
            <div className="bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
                <div className="overflow-x-auto  mt-6 ">
                    {
                        // currentItems.length > 0 ?
                        <>
                            <table className="table-auto w-full ">
                                {/* Table header */}
                                <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                                    <tr className='text-[#626973]'>

                                        <th className="px-5 py-4 whitespace-nowrap w-px">
                                            <div className="font-[500] text-[14px] text-left">ID</div>
                                        </th>
                                        <th className="px-5 py-4 whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">Name</div>
                                        </th>
                                        <th className="px-5 py-4 whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">description</div>
                                        </th>
                                        <th className="px-5 py-4 whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">Starting Date</div>
                                        </th>
                                        <th className="px-5 py-4 whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">Ending Date</div>
                                        </th>

                                        <th className="px-5 py-4 whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-left">Updated at</div>
                                        </th>
                                        <th className="px-5 py-4 whitespace-nowrap">
                                            <div className="font-[500] text-[14px] text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm ">
                                    {
                                        currentItems.map((_, i) =>
                                            <tr className=' cursor-pointer' >
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">1374</div>
                                                </td>
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">DF683HF9</div>
                                                </td>
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">Amet minim mollit non deserunt ullamco est sit</div>
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">12 sept 2023</div>
                                                </td>
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] ">
                                                        12 sept 2023</div>
                                                </td>
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] ">
                                                        N/A</div>
                                                </td>
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-left flex justify-center ">
                                                        {/* <BsThreeDotsVertical className='text-[20px] text-[#898989]' /> */}
                                                        {/* <GenericDrodown /> */}

                                                        <div class="group inline-block">
                                                            <button

                                                                class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center"
                                                            >
                                                                <BsThreeDotsVertical className='text-[20px] text-[#898989]' />

                                                            </button>
                                                            <ul
                                                                class="bg-white rounded-md transform scale-0 group-hover:scale-100 absolute p-2 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] 
  transition duration-150 ease-in-out right-7 origin-top lg:w-[12%]  "
                                                            >

                                                                <li onClick={(e) => openPopup(e, "Edit")} class="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100">
                                                                    <BsPencil className='text-[14px] text-[#98A2B3]' />
                                                                    <h2 className='ml-2 text-[14px] text-[#444444]'>Edit</h2>
                                                                </li>
                                                                <li onClick={(e) => openPopup(e, "Delete")} class="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100">
                                                                    <BsTrash className='text-[14px] text-[#98A2B3]' />
                                                                    <h2 className='ml-2 text-[14px] text-[#444444]'>Delete</h2>
                                                                </li>
                                                                <li onClick={(e) => openPopup(e, "Share")} class="rounded-sm actions flex items-center px-2 py-2 hover:bg-gray-100">
                                                                    <IoMdShareAlt className='text-[14px] text-[#98A2B3]' />
                                                                    <h2 className='ml-2 text-[14px] text-[#444444]'>Share</h2>
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
                <div className='flex flex-wrap justify-between items-center pt-6 px-7'>
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

export default PromoTable