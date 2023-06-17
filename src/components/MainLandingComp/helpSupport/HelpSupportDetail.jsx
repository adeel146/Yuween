import React from 'react'
import BreadCums from '../../../components/MainLandingComp/breadCums/BreadCums'
import Layout from '../../../components/layouts/mainLayout/MainLayout'
import search from '../../../assests/Vector (23).png'
import like from '../../../assests/lik.png'
import dlike from '../../../assests/dlike.png'
import Banner from '../../MainLandingComp/helpSupport/Banner'
const HelpSupportDetail = () => {
    return (
        <Layout>
            {/* <div className=' lg:px-[165px] md:px-[50px] px-5 py-10'> */}
            <Banner left="Help and Support" center="Vehicles Owner" right="Déposez votre véhicule" />
            <div className=' container mx-auto xl:px-[110px]   lg:m-auto px-3 md:px-5 pt-[54px] pb-[128px]'>

                <div className='pt-[50px]'>
                    {/* <div className="flex border items-center h-[50px] rounded border-[#ACACAC] px-1   ">
                        <img src={search} alt="search" className='object-cover pl-[24px]' />
                        <input type="text" placeholder='Insurance, additional driver, extensions...' name="search" value="" className='focus:outline-none placeholder:text-[#ACACAC] placeholder:text-[14px]  h-full ml-5 w-full' />
                    </div> */}
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 pt-[48px] gap-10'>
                        <div className='col-span-2 '>
                            <h1 className='text-[#444444] text-[24px] max-w-[600px] font-semibold pb-5'>Pourrais-je déposer mon véhicule pour la location ?</h1>
                            <p className='text-[14px] font-medium text-[#5A5A5A] pt-[5px] pb-5'>
                                Absolument, vous devrez vous assurez que votre véhicule est en très bon état et qu’il dispose d’un contrôle technique à jour (à l’exception des véhicules de moins de 4 ans) !
                            </p>

                            <p className='text-[14px] font-medium text-[#5A5A5A] pb-5'>
                                Ainsi, en tant que propriétaire, vous devrez remplir sur l’application via votre compte, une fiche Produit du véhicule (marque, modèle, etc.), comprenant ses caractéristiques. Vous devrez vous engager à signaler les détails essentiels de votre véhicule (par exemple, le volume, la hauteur, la longueur ou la charge utile lorsque celui-ci est un utilitaire, …) en sorte de fournir le plus d’informations possible au locataire</p>

                            <p className='text-[14px] font-medium text-[#5A5A5A] pb-5 '>Les Locations sont régies par Veuillez préparer les documents ci-après avant le dépôt sur la plateforme</p>

                            <ul className='pb-5 list-disc pl-5 text-[14px] font-medium text-[#5A5A5A]'>
                                <li>Votre pièce d’identité (CNI, Passeport)</li>
                                <li> La carte grise du véhicule</li>
                                <li>Un certificat d’assurance valide du véhicule couvrant le locataire, ainsi que les passagers, qu’il soit chauffeur ou non</li>
                            </ul>

                            <p className='text-[14px] font-medium text-[#5A5A5A] pb-5 '>De plus, vous devriez communiquer un numéro de téléphone à partir duquel le locataire pourra vous joindre facilement.</p>

                            <p className='text-[14px] font-medium text-[#5A5A5A] pb-5'>
                                Une fois le dépôt effectué, nous procèderons aux vérifications nécessaires et si tout est conforme, votre véhicule sera disponible à la location sur la plateforme dans un délais de vingt-quatre (24h).</p>

                            <div className="border mt-[50px] rounded-md flex justify-between items-center p-5 max-w-[400px]">
                                <div>
                                    <h2 className='text-[#4E5565] text-[16px] '>Cet article vous a-t-il été utile?</h2>
                                    <p className='text-[#979797] text-[12px]'>Utilisateurs l’ayant trouvé utile: 1 sur  19</p>
                                </div>
                                <div className='flex'>
                                    <div className='border rounded-md p-2 mx-2'>
                                        <img src={like} alt="like" className='object-cover' />
                                    </div>
                                    <div className='border rounded-md p-2 '>
                                        <img src={dlike} alt="like" className='object-cover' />
                                    </div>
                                </div>
                            </div>

                            <div className='pt-[24px]'>
                                <h1 className='text-[#5A5A5A] text-[16px] '>Vous avez d’autres questions ? <span className='text-[#FF8C00] fontd-semibold'>Contactez-nous</span></h1>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-[#FF8C00] text-[20px] font-medium '>Related Articles</h1>
                            <ul className='text-[#6C6C6C] text-[14px] font-medium pt-1'>
                                <li className='pt-[16px]'> Définitions</li>
                                <li className='pt-[16px]'> Conditions d’accès et d’éligibilité des utilisateurs</li>
                                <li className='pt-[16px]'> Documents contractuels</li>
                                <li className='pt-[16px]'> Modification des CGU</li>
                                <li className='pt-[16px]'> Détails sur la location</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default HelpSupportDetail