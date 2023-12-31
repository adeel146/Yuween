import React, { useState } from 'react'
import { BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
// import ReactPaginate from 'react-paginate';
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import EditData from './EditData';
import DeleteData from './DeleteData';
import Popup from '../../../util/popup/Popup';
import editIcon from '../../../assests/svg/edit-pencil-icon.svg';
import deleteIcon from '../../../assests/svg/delete-icon.svg';
const ManageRoleTable = () => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    // const [itemOffset, setItemOffset] = useState(0);
    // const [itemperPage, setItemPerPage] = useState(6);

    const itemOffset = 0 
    const itemperPage = 6 


    const endOffset = itemOffset + itemperPage;
    const currentItems = items.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(items.length / itemperPage);

    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemperPage) % items.length;
    //     setItemOffset(newOffset);
    // };



    const openPopup = (e , mode ) => {
        e.stopPropagation()
        setShow(true)
        setType(mode)
    }


    return (
        <>
           {show && <Popup id="job-modal" modalOpen={show} data={ type === "Edit" ? <EditData setShow={setShow}/> :  <DeleteData setShow={(val) => setShow(val)}  />} onClose={() => setShow(false)} /> }

            <div className="overflow-x-auto bg-white mt-6">
                {
                    // currentItems.length > 0 ?
                    <>
                        <table className="table-auto w-full ">
                            {/* Table header */}
                            <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                                <tr className='text-[#626973]'>

                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap w-px">
                                        <div className="font-[500] text-[14px] text-left">Name</div>
                                    </th>
                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                        <div className="font-[500] text-[14px] text-left">Email</div>
                                    </th>
                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                        <div className="font-[500] text-[14px] text-left">Last Active</div>
                                    </th>
                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                        <div className="font-[500] text-[14px] text-left">Role</div>
                                    </th>
                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                        <div className="font-[500] text-[14px] text-center">Action</div>
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm ">
                                {
                                    currentItems.map((_, i) =>
                                        <tr className=' cursor-pointer  ' >
                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989]">John</div>
                                            </td>
                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989]">abc@example.com</div>
                                            </td>
                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989]">35 min ago</div>
                                            </td>
                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989]">Admin</div>
                                            </td>


                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-center flex justify-center">
                                                    {/* <BsThreeDotsVertical className='text-[20px] text-[#898989]' /> */}
                                                    {/* <GenericDrodown /> */}

                                                    <div class="group inline-block">
                                                        <button

                                                            class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center"
                                                        >
                                                            <BsThreeDotsVertical className='text-[20px] text-[#898989]' />

                                                        </button>
                                                        <ul
                                                            class="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] border-0 p-4 rounded-md transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out right-7 origin-top w-[12%]  "
                                                        >

                                                            <li  onClick={(e) => openPopup(e , "Edit")} class="rounded-sm flex items-center px-2 py-2 mb-2 hover:bg-gray-100">
                                                                <img src={editIcon} className="text-sm" alt="Edit" />
                                                                <h2 className='ml-2'>Edit</h2>
                                                            </li>
                                                            <li  onClick={(e) => openPopup(e , "Delete")} class="rounded-sm flex items-center px-2 py-2 hover:bg-gray-100">
                                                                <img src={deleteIcon} className="text-sm" alt="Delete" />
                                                                <h2 className='ml-2'>Delete</h2>
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
                        {/* <div className='flex justify-between items-center pt-6'>
                            <div className='flex items-center'>
                                <h2 className='text-[#333333] text-[14px]'>Show</h2>
                                <select value={itemperPage} onChange={(e) => setItemPerPage(e.target.value)} className='border focus:outline-none rounded-md px-5 py-2 mx-3'>
                                    <option value="6">6</option>
                                    <option value="12">12</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                </select>
                                <h2 className='text-[#333333] text-[14px]'>entries of {items?.length}</h2>
                            </div>
                            <div className='px-8 my-6 '>
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

                        </div> */}


                    </>
                    // :
                    // <div className='p-5 '>
                    //     <h2>Record not found</h2>
                    // </div>
                }

            </div>
        </>
    )
}

export default ManageRoleTable