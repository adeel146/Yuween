import React, { useState } from 'react'
import rent from '../../../../assests/rent.png'
import ReactPaginate from 'react-paginate';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
const TransactionList = () => {
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
            <div className=' bg-white rounded-md shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] '>
                <div className="overflow-x-auto  mt-6">
                    {
                        // currentItems.length > 0 ?
                        <>
                            <table className="table-auto w-full ">
                                {/* Table header */}
                                <thead className="text-xs font-[500]  bg-[#FFF8EF] border-0">
                                    <tr className='text-[#626973]'>

                                        <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500]  text-[14px] text-left">ID </div>
                                        </th>
                                        <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500]  text-[14px] text-left">Renter </div>
                                        </th>
                                        <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500]  text-[14px] text-left">Vehical</div>
                                        </th>
                                        <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500]  text-[14px] text-left">Date</div>
                                        </th>
                                        <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500]  text-[14px] text-left">Location</div>
                                        </th>

                                        <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500]  text-[14px] text-left">Status  </div>
                                        </th>
                                        <th className="px-4 py-4 pr-[25px] whitespace-nowrap">
                                            <div className="font-[500]  text-[14px] text-center">Amount  </div>
                                        </th>

                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm ">
                                    {
                                        currentItems.map((_, i) =>
                                            <tr className=' cursor-pointer  ' >
                                                <td className="px-4 first:pl-4 last:pr-4 py-3 whitespace-nowrap pr-5">
                                                    <div className="text-left text-[14px] text-[#898989]">1347</div>
                                                </td>
                                                <td className="px-4 first:pl-4 flex items-center last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="object-cover w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                                                        <img src={rent} alt="rent_image" className='w-auto' />
                                                    </div>
                                                    <div className="text-left text-[14px] text-[#898989] px-1">john</div>
                                                </td>
                                                <td className="px-4 first:pl-3 last:pr-4 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">Renault twingo</div>
                                                </td>
                                                <td className="px-4 first:pl-4 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">02-16-2023</div>
                                                </td>
                                                <td className="px-4 first:pl-4 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989]">Abidjan</div>
                                                </td>

                                                <td className="px-4 first:pl-4 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-center py-[3px] w-fit px-2.5 text-[12px] leading-4 rounded-full text-[#008E28] bg-[#cceed9]">
                                                        Success</div>
                                                </td>
                                                <td className="px-4 first:pl-4 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-center text-[14px] text-[#898989]"><span className='text-[#FF8C00]'>33 000 FCFA </span></div>
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
                <div className='flex flex-wrap justify-between items-center pt-6 md:px-8 px-5'>
                    <div className='flex items-center'>
                        <h2 className='text-[#333333] text-[12px]'>Show</h2>
                        <select value={itemperPage} onChange={(e) => setItemPerPage(e.target.value)} className='border focus:outline-none rounded-md px-3 py-2 mx-2 text-[12px] text-[#333333]'>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        <h2 className='text-[#333333] text-[12px]'>entries of {items?.length}</h2>
                    </div>
                    <div className='lg:px-8  my-6 '>
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

export default TransactionList