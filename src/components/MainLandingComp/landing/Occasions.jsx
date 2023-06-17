import React from 'react'
import fram from '../../../assests/svg/Vehicle renting occasion (SVG).svg'
import c1 from '../../../assests/newDesign/c_1.svg'
import c2 from '../../../assests/newDesign/c_2.svg'
import c3 from '../../../assests/newDesign/c_3.svg'
import c4 from '../../../assests/newDesign/c_4.svg'
import c5 from '../../../assests/newDesign/c_5.svg'
const Occasions = () => {
    const cars = [c1, c2, c3, c4, c5]
    return (
        <>
            {/* <div className=' lg:px-[165px] px-5 text-center pb-[8rem] pt-[6rem]'> */}
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-5 md:px-5 text-center  pt-[6rem]'>
                {/* <h2 className='lg:text-[31px] text-[#444444]  font-sans text-[22px] font-bold '>Des véhicules pour toutes <span className='text-[#FF8C00]'> vos occasions </span></h2> */}
                <h2 className='lg:text-[31px] text-[#444444]   font-sans text-[22px] font-bold '>Votre mobilité n’aurait pas <span className='text-[#FF8C00]'> été plus simple </span></h2>

                 

                <p className='lg:text-[14px] md:text-[14px] font-sans xl:max-w-[830px] m-auto font-normal leading-[24px] pt-3 text-[13px] text-[#5A5A5A]'>Primecar, c’est une grande variété de véhicules à choisir. Trouvez la voiture ou l’utilitaire parfait. Que vous planifiez un évènement, un voyage, un déplacement professionnel, des vacances ou de grands travaux, vous êtes au bon endroit. Louez l’esprit léger.</p>
                <div className='flex xl:justify-between justify-center flex-wrap mt-10'>
                    {
                        cars.map((car, i) => (
                            <img src={car} alt="fram_img" key={i} className='object-contain xl:mx-0 mx-1 xl:mt-0 mt-3 xl:w-auto lg:w-auto md:w-auto w-[30%]' />
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default Occasions