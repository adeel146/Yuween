import React from 'react';
import { useLocation } from "react-router-dom";
import Weights from '../../components/AdminComponents/customerList/Weights'
import DataTable from '../../components/AdminComponents/customerReports/RenterListTable/Table'
import PieChart from '../../components/AdminComponents/manageUser/PieChart'
import TransactionTable from '../../components/AdminComponents/customerReports/TransactionTable/Table'
import OwnerWeights from '../../components/AdminComponents/customerList/OwnerWeights'
const CustomerReports = () => {

    const location = useLocation().pathname;

    // const wights = [{heading : "Total Requested Rents" , pic:"" , price:"51 000"}]
    return (
        <>
            <>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 pt-[19px]'>
                    <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md h-full p-5 '>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-[#FF8C00] leading-[20.16px] text-[20px] font-semibold'>Statistics </h2>
                        </div>
                        <PieChart />
                    </div>
                    <div>
                        { location === "/customerRenter" ? <Weights /> : <OwnerWeights/> }
                    </div>
                </div>


                <div className='bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] rounded-md h-full p-5 mt-5'>
                    <DataTable title={ location === "/customerRenter" ? "Vehicle Renters List" : "Vehicle Owner's List"} />
                </div>
                
                <div className='bg-white rounded-md h-full mt-5'>
                    <TransactionTable title={"Transaction"} />
                </div>
            </>
        </>
    )
}

export default CustomerReports