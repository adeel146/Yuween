import React from 'react'
// import BreadCums from '../../components/MainLandingComp/breadCums/BreadCums'
import Layout from '../../components/layouts/mainLayout/MainLayout'
// import SearchBar from '../../components/GenericComponents/SearchBar'
import Banner from '../../components/MainLandingComp/helpSupport/Banner'
const GcuDetail = () => {
    return (
        <Layout>
            {/* <div className=' lg:px-[165px] md:px-[50px] px-5 py-10'> */}
                <Banner left="Centre d’aide" right="Introduction" center="Conditions Générales d'Utilisation" middleLink="/gcu" />
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-5  pb-[144px]'>
                {/* <BreadCums left="Centre d’aide" right="Introduction" middle="Conditions Générales d'Utilisation" middleLink="/gcu" /> */}
                <div className=''>
                    {/* <SearchBar /> */}
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 pt-[60px] gap-20'>
                        <div className='col-span-2 '>
                            <h1 className='text-[#667085] text-[24px] '>Introduction</h1>
                            <p className='text-[16px] font-medium text-justify text-[#5A5A5A] pb-10 pt-[24px]'>
                                <span className='font-bold'>Primecar</span> met à disposition une plateforme de mise en relation entre des Utilisateurs recherchant un véhicule à louer et des propriétaires souhaitant louer leur véhicule. Se faisant, <span className='font-bold'>Primecar</span> se positionne comme un acteur de l’économie collaborative.  La plateforme est un intermédiaire qui n'est pas partie à l'opération de location qui est faite entre les propriétaires des véhicules et les locataires. <span className='font-bold'>Primecar</span> ne procède à aucune location de véhicule, que ce soit à travers notre site internet, l’application ou les services proposés, et n'a pas d'autres activités que celle de mettre en relation des utilisateurs pour la location d'un véhicule.
                            </p>

                            <p className='text-[18px] font-medium text-[#5A5A5A] pb-10'>La Plateforme permet ainsi le dépôt d’annonces de location, la recherche et la location de véhicules avec ou sans chauffeur sur une durée bien déterminée. Elle agit en tiers de confiance pour réaliser les transactions liées à ces locations.</p>

                            <p className='text-[18px] font-medium text-[#5A5A5A] '>Les Locations sont régies par les présentes CGU et sont complétées par les Contrats de Location, tels qu'ils sont décrits dans les CGU. Les utilisateurs ne peuvent bénéficier des services proposés par <span className='font-bold'>Primecar</span> que s'ils respectent les CGU ainsi que les termes du contrat de location.</p>

                        </div>
                        <div className=''>
                            <h1 className='text-[#FF8C00] text-[20px] font-medium pt-[10px]'>Related Articles</h1>
                            <ul className='text-[#6C6C6C] text-[15px] font-medium '>
                                <li className='pt-[24px]'> Définitions</li>
                                <li className='pt-[24px]'> Conditions d’accès et d’éligibilité des utilisateurs</li>
                                <li className='pt-[24px]'> Documents contractuels</li>
                                <li className='pt-[24px]'> Modification des CGU</li>
                                <li className='pt-[24px]'> Détails sur la location</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default GcuDetail