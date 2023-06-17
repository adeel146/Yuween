import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { GetFilterCar, GetFilterData } from '../../../lib/Api/WebsiteApi'
const Left = () => {
    const [filter, setFilter] = useState(true)
    const [filter2, setFilter2] = useState(true)
    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState(0)
    const [Cartypes, setCarTypes] = useState([])
    const [CarFeule, setCarFeuel] = useState([])
    const [CarModel, setCarModel] = useState([])

    const [FormModel, setFormModel] = useState([])
    const [FormType, setFormType] = useState([])
    const [FormFuel, setFormFuel] = useState([])
    const [FormDoor, setFormDoor] = useState()



    const handleChange = (id, type) => {

        if (type === "model" && !FormModel.includes[id]) {

            setFormModel(() => [...FormModel , id])
        }
        else if (type === "type" && !FormType.includes[id]) {
            setFormType(() => [...FormType , id])

        }
        else if (type === "door" && FormDoor !== id ) {
           setFormDoor(id)
        }
        else  {
            setFormFuel(() => [...FormFuel , id])

        }

    }


    const FilterCar = async (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append('vehicle_category', "non-commercial")
        formData.append("location" , "in_abidjan")
        formData.append("start_date","15/05/2023" )
        formData.append("end_date", "15/05/2023")
        formData.append('vehicle_series[0]',FormType )
        formData.append('fuel_type_id[0]', FormFuel )
        formData.append('no_of_doors', FormDoor )
        formData.append('price_max', price )
        // formData.append('', )

        let { res } = await GetFilterCar(formData)
        console.log("res", res)
    }


    console.log("model" , FormModel)
    console.log("Type" , FormType)
    console.log("Fuel" , FormFuel)
    console.log("roome" , FormDoor)
    console.log("price" , price)



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { resModel, resType, resFuel } = await GetFilterData();
                let type = Object.assign({}, ...resType)
                setCarTypes(type?.serie)
                let model = Object.assign({}, ...resModel)
                setCarModel(model?.models)
                let fuel = Object.assign({}, ...resFuel)
                setCarFeuel(fuel?.fuel_types)
                setLoading(false);
            } catch (err) {
                // setError(true);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <div className=' lg:h-full md:h-full xl:h-[450px] xl:overflow-auto h-full '>
                <div className="lg:px-5 py-2">
                    <h2 className='text-[12px] text-[#98A2B3] font-semibold'>TYPE</h2>
                    <div className='flex  justify-between items-center '>
                        <div></div>

                        {/* <div className=' flex items-center'>
                            <input type="checkbox" className="border check_box rounded-lg w-[20px] h-[20px] " />
                            <h2 className='ml-2 font-semibold text-[16px]'>4x4 <span className='px-2 text-[#ACACAC]'>(12)</span></h2>
                        </div> */}
                        <div onClick={() => setFilter(!filter)}>
                            <MdOutlineKeyboardArrowUp className={`text-[#8D8D8D] text-[25px] ${filter && 'rotate-180 ease-in-out delay-100'}`} />
                        </div>
                    </div>
                    <div className={`${filter ? 'block' : 'lg:block  hidden'}  h-[150px]  overflow-y-auto search_scroll`} >
                        <ul>
                            {
                                Cartypes?.map((item, i) => (
                                    <li className='pt-[10px]' key={i}>
                                        <div className=' flex items-center'>
                                            {/* <input type="checkbox" className="border check_box rounded-lg w-[20px] h-[20px] " /> */}
                                            <input type="checkbox" onChange={() => handleChange(item.id , "type")} className="accent-[#FF8C00] text-white rounded-lg w-[20px] h-[20px]" />
                                            <h2 className='ml-2 font-semibold text-[16px]'>{item?.series_for_renters}
                                                {/* <span className="text-[#ACACAC]">({item?.total})</span> */}
                                            </h2>
                                        </div>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>

                </div>
                <div className="lg:px-5 pt-[32px] ">
                    <h2 className='text-[12px] text-[#98A2B3] font-semibold'>MODÈLE</h2>
                    <div className='flex  justify-between items-center'>
                        <div></div>
                        {/* <div className=' flex items-center w-full'>
                            <input type="checkbox" className="border check_box rounded-lg w-[20px] h-[20px] " />
                            <h2 className='ml-2 font-semibold text-[16px]'>Turbo S <span className='text-[#ACACAC]'>(12)</span></h2>
                        </div> */}
                        <div onClick={() => setFilter2(!filter2)}>
                            <MdOutlineKeyboardArrowUp className={`text-[#8D8D8D] text-[25px] ${filter2 && 'rotate-180 ease-in-out delay-100'}`} />
                        </div>

                    </div>
                    <div className={`${filter2 ? 'block' : 'lg:block  hidden'}  h-[150px]  overflow-y-auto search_scroll`} >

                        <ul className=''>
                            {
                                CarModel?.map((item, i) => (
                                    <li className='pt-[10px]' key={i}>
                                        <div className=' flex items-center'>
                                            <input type="checkbox" onChange={() => handleChange(item.id_car_model , "model")} className="border check_box rounded-lg w-[20px] h-[20px] " />
                                            <h2 className='ml-2 font-semibold text-[16px]'>{item?.name}</h2>
                                        </div>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>


                </div>

                <div className="lg:px-5 pt-[32px]">
                    <h2 className='text-[12px] text-[#98A2B3] font-semibold'>PORTES</h2>
                    {/* <div className='flex  justify-between items-center pt-5'>
                        <div className=' flex items-center'>
                            <input type="checkbox" className="border check_box rounded-lg w-[20px] h-[20px] " />
                            <h2 className='ml-2 font-semibold text-[16px]'>2 Portes  <span className='text-[#ACACAC]'>(12)</span></h2>
                        </div>
                    </div> */}

                    <div className=' overflow-y-auto mt-[30px] mb-[10px]'>
                        <ul>
                            <li className=''>
                                <div className=' flex items-center'>
                                    <input type="checkbox" onChange={() => handleChange(2 , "door")} className="border check_box rounded-lg w-[20px] h-[20px] " />
                                    <h2 className='ml-2 font-semibold text-[16px]'>2 Portes
                                        {/* <span className="text-[#ACACAC]">(16)</span> */}
                                    </h2>
                                </div>
                            </li>
                            <li className='mt-[10px]'>
                                <div className=' flex items-center'>
                                    <input type="checkbox" onChange={() => handleChange(4 , "door")} className="border check_box rounded-lg w-[20px] h-[20px] " />
                                    <h2 className='ml-2 font-semibold text-[16px]'>4 Portes
                                        {/* <span className="text-[#ACACAC]">(16)</span> */}
                                    </h2>
                                </div>
                            </li>

                        </ul>
                    </div>


                </div>

                <div className="lg:px-5 pt-[32px]">
                    <h2 className='text-[12px] text-[#98A2B3] font-semibold'>MOTEUR</h2>
                    <div className=' overflow-y-auto mt-[30px] mb-[10px]'>
                        <ul>
                            {
                                CarFeule?.map((item, i) => (
                                    <li className='' key={i}>
                                        <div className=' flex items-center'>
                                            <input type="checkbox" onChange={() => handleChange(item.id , "fuel")} className="border check_box rounded-lg w-[20px] h-[20px] " />
                                            <h2 className='ml-2 font-semibold text-[16px]'>{item?.fuel_type}
                                                {/* <span className="text-[#ACACAC]">(16)</span> */}
                                            </h2>
                                        </div>
                                    </li>

                                ))
                            }

                        </ul>
                    </div>
                </div>

                <div className="lg:px-5 pt-[32px] ">
                    <h2 className='text-[12px] text-[#98A2B3] font-semibold pb-6'>PRIX</h2>
                    {/* <input type="range" className='w-full bg-[#FF8C00]' /> */}
                    <input id="myinput" max={10000} onChange={(e) => setPrice(e.target.value)} className='progress' style={{ accentColor: "#FF8C00", width: '100%', color: 'red' }} type="range" />
                    <h2 className='text-[#FF8C00] font-semibold text-[16px]'>103 000 FCFA <span className='text-[#ACACAC] text-[16px]'>/jour</span></h2>
                </div>

                <div className="lg:px-5 pt-[32px] ">
                    <button onClick={FilterCar} className='bg-[#FF8C00] w-full px-5 rounded-md text-white py-2 font-semibold text-[16px]'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Left