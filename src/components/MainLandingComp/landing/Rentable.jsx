import React from 'react'
import rantable from '../../../assests/newDesign/rentable.svg'
const Rentable = () => {
    return (
        <>
            {/* <div className=' lg:px-[165px] px-5 pt-[4rem]'> */}
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto md:px-5 px-5 pt-[4rem] '>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-20 gap-5 md:gap-7'>
                    <div className=' w-full lg:order-1 order-0 md:order-1   '>
                        <img src={rantable} alt="rentable" className='object-cover w-full  ' />
                    </div>
                    <div className='lg:w-[40rem] w-full lg:order-0 md:order-0 order-1 lg:my-0  '>
                        <h1 className='lg:text-[31px] font-sans max-w-[500px] text-[#444444] text-[22px] leading-0 font-bold'>Rentabilisez votre <span className='text-[#FF8C00]'>véhicule maintenant !</span></h1>
                        <div className='pt-3 max-w-[400px]'>
                            <div className='flex '>
                                <div>
                                    <span className='text-[#FF8C00] px-1 text-[18px] font-semibold'>1.</span>
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='text-[18px] md:text-[16px] font-sans font-semibold text-[#444444] '> Déposez votre véhicule</h2>
                                    <p className='text-[14px]  font-sans font-normal text-[#5A5A5A]'>Téléchargez l’application faites-y gratuitement le dépôt de votre véhicule et à vous les locations !</p>
                                </div>
                            </div>

                        </div>
                        <div className='pt-[20px] max-w-[400px]'>
                            <div className='flex '>
                                <div>
                                    <span className='text-[#FF8C00] px-1 text-[18px] font-semibold'>2.</span>
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='text-[18px] font-semibold text-[#444444] '>Acceptez les demandes de location</h2>
                                    <p className='text-[16px] text-[#5A5A5A]'>TDonnez votre accord aux parties qui souhaitent louer votre bien.</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[20px] max-w-[400px]'>
                            <div className='flex '>
                                <div>
                                    <span className='text-[#FF8C00] px-1 text-[18px] font-semibold'>3.</span>
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='text-[18px] font-semibold text-[#444444] '>Faites plus du revenu</h2>
                                    <p className='text-[16px] text-[#5A5A5A]'>Gagnez de l’argent grâce à la mise en location de votre véhicule, et rentabilisez votre business !</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[50px]'>
                            <button className='px-8 py-2 rounded-md bg-[#FF8C00] text-white'>Louer mon véhicule</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Rentable