import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    const [active, setActive] = useState(0)

    return (
        <>
            {/* <div className=' lg:px-[165px] md:px-[50px] px-5 py-20'> */}
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-5 py-20'>
                <div className='border-b'>
                    <div className='text-center flex flex-nowrap items-center  justify-center max-w-[700px] m-auto'>
                        {/* <h2 onClick={() => setActive(0)} className={`${active === 0 ? 'border-b border-[#FF8C00]' : ''}text-[#444444] cursor-pointer text-[24px] font-bold pb-2  w-full`}>Je suis locataire</h2> */}
                        <h2 onClick={() => setActive(0)} className={`${active === 0 ? 'border-b-2 border-[#FF8C00] text-[#444444] font-bold ' : 'text-[#5A5A5A]'} w-full cursor-pointer lg:px-6 md:px-6 lg:text-[18px] md:text-[18px] text-[16px]  pb-2   `}>Je suis locataire</h2>
                        <h2 onClick={() => setActive(1)} className={`${active === 1 ? 'border-b-2 border-[#FF8C00] text-[#444444] font-bold' : 'text-[#5A5A5A]'} lg:pt-0 md:pt-0  w-full cursor-pointer md:px-6  lg:px-6 lg:text-[18px] md:text-[18px] text-[16px]  pb-3  lg:ml-[5rem]`}>Je suis propriétaire</h2>
                    </div>
                </div>
                {
                    active === 0 ?
                        <div className='lg:pt-[8rem] md:pt-[8rem] pt-10 grid lg:grid-cols-2 md:grid-cols-2 gap-6'>
                            <div className='flex flex-col '>
                                <div className='pb-5'>
                                    <h1 className='text-[18px] font-medium text-[#ACACAC] pb-3'>Trouvez un véhicule</h1>
                                    <ul className='text-[#FF8C00] text-[16px] font-medium pt-[30px]'>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Pourrais-je louer un véhicule sur Yuween Car ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Comment est fixé le prix de la location d’un véhicule ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Quels moyens pourrais-je utiliser pour payer la réservation d’un véhicule ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Pourrais-je contacter le propriétaire du véhicule ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Pourrais-je louer un véhicule avec ou sans chauffeur ?</Link></li>
                                    </ul>
                                </div>

                                <div>
                                    <h1 className='text-[18px] font-medium text-[#ACACAC] pb-3'>Récupérez-le et partez</h1>
                                    <ul className='text-[#FF8C00] text-[16px] font-medium pt-[30px]'>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   À quel moment je récupère le véhicule ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Ma location est-elle protégée par un contrat de location ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   La voiture louée est-elle en bon état ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Pourrais-je savoir qui contacter en cas de problème ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Que faire en cas d’accident ?</Link></li>
                                    </ul>
                                </div>

                            </div>

                            <div className='flex flex-col '>
                                <div className='pb-5'>
                                    <h1 className='text-[18px] font-medium text-[#ACACAC] pb-3'>Réservez votre véhicule</h1>
                                    <ul className='text-[#FF8C00] text-[16px] font-medium pt-[30px]'>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Comment je procède pour réserver un véhicule ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Pourrais-je modifier ma réservation ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">    À quel moment pourrais-je annuler ma réservation ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Pourrais-je prolonger ma réservation si j’ai toujours besoin du véhicule ?</Link></li>
                                    </ul>
                                </div>

                                <div className='pt-10'>
                                    <h1 className='text-[18px] font-medium text-[#ACACAC] pb-3'>Après la location</h1>
                                    <ul className='text-[#FF8C00] text-[16px] font-medium pt-[30px]'>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Pourrais-je laisser un avis après une location ?</Link></li>
                                        <li className='pb-4 leading-[24px] font-medium'><Link to="/helpsupport_detail">   Et si je dois être rembourser ?</Link></li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                        :
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 md:gap-10 gap-5'>
                            <div className='flex flex-col w-full '>
                                <div className='xl:pt-[5.5rem] md:pt-[8rem] pt-10'>
                                    <h1 className='text-[18px] font-medium text-[#ACACAC] pb-3'>Déposez votre véhicule</h1>
                                    <ul className='text-[#FF8C00] text-[16px] font-medium pt-[30px]'>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Pourrais-je déposer mon véhicule pour la location ?</Link></li>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Pourrais-je déposer mon véhicule pour la location avec chauffeur ?</Link></li>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Je loue mon véhicule exclusivement pour la zone d’Abidjan, que faire ?</Link></li>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Le dépôt de véhicule est-il valable pour les professionnels ?</Link></li>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Pourrais-je gérer la disponibilité de mon véhicule ?</Link></li>
                                        <li className='pt-[24px]'>
                                            <button className='border border-[#FF8C00] bg-transparent px-6 h-[50px]  rounded-md text-[#FF8C00] text-[16px]'>Voir les 7 articles</button>
                                        </li>
                                    </ul>
                                </div>

                                <div className='pt-[42px]'>
                                    <h1 className='text-[18px] font-medium text-[#ACACAC]  pt-[20px]'>Faites plus du revenu</h1>
                                    <ul className='text-[#FF8C00] text-[16px] font-medium pt-[25px]'>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Combien je gagne pour ma location ?</Link></li>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Quand et comment pourrais-je percevoir mes gains ?</Link></li>
                                        {/* <li className='pb-4'><Link to="/helpsupport_detail">   La voiture louée est-elle en bon état ?</Link></li>
                                        <li className='pb-4'><Link to="/helpsupport_detail">   Pourrais-je savoir qui contacter en cas de problème ?</Link></li>
                                        <li className='pb-4'><Link to="/helpsupport_detail">   Que faire en cas d’accident ?</Link></li> */}
                                    </ul>
                                </div>

                            </div>

                            <div className='flex flex-col w-full '>
                                <div className='pt-[90px]'>
                                    <h1 className='text-[18px] font-medium text-[#ACACAC] pb-3'>Acceptez les demandes de location</h1>
                                    <ul className='text-[#FF8C00] text-[16px] font-medium pt-[30px]'>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   J’ai une demande de location, que faire ?</Link></li>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">   Je souhaite annuler la réservation en cours ?</Link></li>
                                        <li className='pb-[16px]'><Link to="/helpsupport_detail">    Et si je dois être rembourser ?</Link></li>
                                    </ul>
                                </div>


                            </div>
                        </div>}
            </div>
        </>
    )
}

export default Main