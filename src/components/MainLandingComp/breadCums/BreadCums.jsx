import React from 'react'
import { Link } from 'react-router-dom'

const BreadCums = ({ left, right, middle, leftLink , middleLink }) => {
    // const location = useLocation().pathname
    return (
        <>
            <div className='mb-3'>
                <ul className='inline-flex flex-wrap text-sm font-medium'>
                    <li className="flex items-center">
                        <Link to={leftLink} className="text-[15px] font-medium text-[#ACACAC]" >{left} </Link>
                        <svg className="h-4 w-4 fill-current text-[#ACACAC] lg:mx-[24px] mx-[10px]" viewBox="0 0 16 16">
                            <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                        </svg>
                    </li>
                    {middle &&
                        <li className='flex items-center'>
                            <Link
                                to={middleLink}
                                className={`text-[15px] font-medium text-[#ACACAC]`}
                            >
                                {middle}
                            </Link>
                            <svg
                                className='h-4 w-4 fill-current text-[#ACACAC] lg:mx-[24px] mx-[10px]'
                                viewBox='0 0 16 16'
                            >
                                <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                            </svg>
                        </li>
                    }
                    <li className='flex items-center'>
                        <div
                            className={`text-[15px] text-[#FF8C00] font-bold `}

                            href='#0'
                        >
                            {right}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default BreadCums