import React, { useState } from 'react'
// import { BsEye, BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
// import ReactPaginate from 'react-paginate';
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
const BradCastTable = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    const [itemOffset] = useState(0);
    const [itemperPage] = useState(6);

    const endOffset = itemOffset + itemperPage;
    const currentItems = items.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(items.length / itemperPage);

    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemperPage) % items.length;
    //     setItemOffset(newOffset);
    // };

    return (
        <>
            <div className="overflow-x-auto bg-white mt-6">
                {
                    // currentItems.length > 0 ?
                    <>
                        <table className="table-auto w-full ">
                            {/* Table header */}
                            <thead className="text-xs font-[500] bg-[#FFF8EF] border-0">
                                <tr className='text-[#606060]'>
                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap w-[30%]">
                                        <div className="font-[500] text-[14px] text-left">Date</div>
                                    </th>
                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap w-[40%]">
                                        <div className="font-[500] text-[14px] text-left">Send To</div>
                                    </th>
                                    <th className="px-5 py-4 pr-[25px] whitespace-nowrap w-[30%]">
                                        <div className="font-[500] text-[14px] text-left">Send Via</div>
                                    </th>
                                  

                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm ">
                                {
                                    currentItems.map((_, i) =>
                                        <tr className=' cursor-pointer  ' >
                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989]">1374</div>
                                            </td>
                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989]">DF683HF9</div>
                                            </td>
                                            <td className="px-5 py-4 pr-[25px] whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989]">abc@example.com</div>
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

export default BradCastTable