import React from 'react'
// import { callApi } from '../../utils/CallApi';
// import { useForm } from "react-hook-form";
// import { toast, Toast container mx-auto xl:px-[110px] } from 'react-toastify';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



const Popup = ({ modalOpen, onClose, data }) => {


    return (
        <>
            <Modal open={modalOpen} className="" onClose={onClose} center>
                <div className="bg-white rounded shadow-lg overflow-auto p-5 w-[501px]">
                    {/* Modal header */}
                    <div className=''>
                        {data}
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default Popup