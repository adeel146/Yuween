import React from 'react'
// import BreadCums from '../../components/MainLandingComp/breadCums/BreadCums'
import Layout from '../../components/layouts/mainLayout/MainLayout'
import Banner from '../../components/MainLandingComp/helpSupport/Banner'
// import SearchBar from '../../components/GenericComponents/SearchBar'
// import search from '../../assests/Vector (23).png'
const Gcu = () => {
    return (
        <Layout>
            {/* <div className=' lg:px-[165px] px-5 py-10'> */}
            <Banner left="Centre d’aide" right="Conditions Générales d'Utilisation" center="" />
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto md:px-5 px-3  pb-[158px] '>
                {/* <BreadCums left="Centre d’aide" right="Conditions Générales d'Utilisation" middle="" /> */}
                {/* <div className='lg:pt-[60px] md:pt-[50px] pt-8 '>
                    <SearchBar />
                </div> */}
                <div className='lg:pt-[50px] md:pt-[50px] pt-5'>

                    <div className='pt-[35px]'>
                        <h1 className='text-[#667085] text-[20px] pb-5'>Legal Notice:</h1>
                        <p className='text-[#5A5A5A] text-[16px] pb-6'>La plateforme <span className="font-bold ">www.primecarapp.com</span> est la propriété de la société dénommée Digital Innovation Services & Solution en abrégé <span className="font-bold ">DINSS</span>, une SARL au capital de 1000,000 FCFA, immatriculée au Registre du Commerce de Grand-Bassam, sous le numéro CI-GRDBSM-2021-B-9497, dont le siège est sis à Grand-Bassam route expresse Bassam-Bonoua, Section AX, Parcelle 62, Lot N°1690, ILOT 172.</p>

                        <p className='text-[#5A5A5A] text-[16px] pb-6'>Le responsable du site web et de l’application mobile Primecar est <span className="font-bold ">Monsieur Borgia Epiphane Bodje </span> agissant en qualité de Gestionnaire de la société.</p>


                        <p className='text-[#5A5A5A] text-[16px] pb-6'>Le présent site web est développé par <span className="font-bold ">DINSS</span>.</p>

                        <p className='text-[#5A5A5A] text-[16px] pb-6 '> Merci d’utiliser  <span className="font-bold ">Primecar</span>, nous sommes heureux de vous compter parmi les membres de notre communauté qui contribue à faciliter l’accès aux services de mobilité dans la région ouest africaine, notamment en Côte d’Ivoire.</p>

                        <p className='text-[#5A5A5A] text-[16px] '> Nous vous prions de porter une attention particulière aux présentes conditions générales d’utilisation et de service (les « CGU »). Elles contiennent des informations importantes sur les droits, les obligations des Utilisateurs, ainsi que les limitations et exclusions applicables.</p>
                    </div>
                    <div className=' mt-[50px]'>
                        <h1 className='text-[20px] text-[#FF8C00] font-medium'>Conditions Générales d'Utilisation</h1>
                        <ul className='text-[#6C6C6C] text-[15px] font-medium '>
                            <li className='pt-[24px]'> 1. Introduction</li>
                            <li className='pt-[24px]'> 2. Définitions</li>
                            <li className='pt-[24px]'> 3. Conditions d’accès et d’éligibilité des utilisateurs</li>
                            <li className='pt-[24px]'> 4. Documents contractuels</li>
                            <li className='pt-[24px]'> 5. Modification des CGU</li>
                            <li className='pt-[24px]'> 6. Détails sur la location</li>
                        </ul>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Gcu