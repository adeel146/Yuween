import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const TableLists = () => {
    return (
        <>
            <div className="overflow-x-auto bg-white rounded-md mt-6 shadow-md border border-gray-100">
                {
                    // currentItems.length > 0 ?
                    <>
                        <table className="table-auto w-full ">
                            {/* Table header */}
                            <thead className="text-xs font-semibold bg-[#FFF8EF]   border-b border-slate-200">
                                <tr className='text-[#626973]'>

                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div className="font-semibold text-[14px] text-left">Vehicle Owner </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-[14px] text-center">Brand</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-[14px] text-left">Date</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-[14px] text-left">Vehicle Type</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-[14px] text-left">Greater Abidjan </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-[14px] text-left">Driver  </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-[14px] text-left">Status  </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-[14px] text-center">Action  </div>
                                    </th>

                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm ">
                                {
                                    Array(5).fill(5).map((_, i) =>
                                        <tr className=' cursor-pointer  ' >
                                            <td className="px-2 first:pl-5 flex items-center last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989] px-1">hell</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-center text-[14px] text-[#898989] px-1">Fortuner</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989] px-1">02-16-2023</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989] px-1">Commercial</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989] px-1"><span className='text-[#FF8C00]'>33 000 FCFA </span>/day</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left text-[14px] text-[#898989] px-1"><span className='text-[#FF8C00]'>110 000 FCFA</span>/day</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-center p-0 text-[14px] text-[#8E3F3A]  rounded-full bg-[#F0DFD6]">Pendding</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-center flex justify-center  px-1">
                                                    <BsThreeDotsVertical className='text-[20px] text-[#898989]' />
                                                </div>
                                            </td>

                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>

                        {/* <div className='px-8 my-6 flex justify-end'>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="Next "
                                    onPageChange={handlePageClick}
                                    activeClassName="text-[#E84025] px-3"
                                    nextClassName="px-3"
                                    prevClassName="px-3"
                                    disabledLinkClassName="text-gray-300"
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="Prev"
                                    className=" flex justify-end"
                                    renderOnZeroPageCount={null}
                                />

                                
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

export default TableLists