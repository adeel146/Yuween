import {  FaUsers } from 'react-icons/fa';

import hom from '../../../assests/iconhome.svg'
import icon1 from '../../../assests/icon1.svg'
import icon2 from '../../../assests/icon2.svg'
import icon3 from '../../../assests/icon3.svg'
import icon4 from '../../../assests/icon4.svg'
import icon5 from '../../../assests/icon5.svg'
import icon6 from '../../../assests/icon6.svg'
import icon7 from '../../../assests/icon7.svg'
import icon8 from '../../../assests/icon8.svg'
import icon9 from '../../../assests/icon9.svg'
import icon11 from '../../../assests/icon11.svg'
import icon17 from '../../../assests/icon17.svg'
import icon15 from '../../../assests/icon15.svg'
import icon16 from '../../../assests/icon16.svg'
import icon18 from '../../../assests/icon18.svg'
import icon19 from '../../../assests/icon19.svg'

const SidebarObj = () => {
    return [
      {
        groupname: 'DASHBOARD',
        menuitems: [
          {
            label: 'Dashboard',
            leftIcon: <img src={hom} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon11} alt="icon" className='object-cover' />
            ),
            rightIcon: 'sadf',
            path: '/dashboard',
            pathname: '/dashboard',
            subMenuItems: [],
          },

          {
            label: 'User management',
            leftIcon: <FaUsers size={22}/>,
            activeLeftIcon: (
              <FaUsers size={22}/>
            ),
            rightIcon: 'sadf',
            path: '/vehicalRenters',
            pathname: 'vehicalRenters',
            subMenuItems: [
              {
                label: 'Vehical Renters',
                path: '/vehicalRenters',
                subMenuItems: [],
              },
              {
                label: 'Vehical Owners',
                path: '/vehicalOwner',
                subMenuItems: [],
              },
            ],
          },
          {
            label: 'Customer Report',
            leftIcon: <img src={icon3} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon3} alt="icon" className='object-cover  ' />
            ),
            rightIcon: 'sadf',
            path: '/customerRenter',
            pathname: '/customerRenter',
            subMenuItems: [
              {
                label: 'Car Renters',
                path: '/customerRenter',
                subMenuItems: [],
              },
              {
                label: 'Car Owners',
                path: '/customerOwner',
                subMenuItems: [],
              },
            ],
          },

          {
            label: 'Global Reporting',
            leftIcon:<img src={icon4} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon4} alt="icon" className='object-cover  ' />
            ),
            rightIcon: 'sadf',
            path: '/globelRenter',
            pathname: 'globelRenter',
            subMenuItems: [
              {
                label: 'Car Renters',
                path: '/globelRenter',
                subMenuItems: [],
              },
              {
                label: 'Car Owners',
                path: '/globelOwner',
                subMenuItems: [],
              },
            ],
          },



          {

            label: 'Broadcast',
            leftIcon: <img src={icon5} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon15} alt="icon" className='object-cover' />
            ),
            rightIcon: 'sadf',
            path: '/broadcast',
            pathname: 'broadcast',
            subMenuItems: [

            ],
          },

          {

            label: 'Manage Roles',
            leftIcon: <img src={icon6} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon16} alt="icon" className='object-cover' />
            ),
            rightIcon: 'sadf',
            path: '/manageRole',
            pathname: 'manageRole',
            subMenuItems: [

            ],
          },



          {
            label: 'Management',
            leftIcon: <img src={icon7} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon17} alt="icon" className='object-cover' />
            ),
            rightIcon: 'sadf',
            path: '/management',
            pathname: 'management',
            subMenuItems: [

            ],
          },
          {
            label: 'Marketing',
            leftIcon: <img src={icon8} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon18} alt="icon" className='object-cover' />
            ),
            rightIcon: 'sadf',
            path: '/marketing',
            pathname: 'marketing',
            subMenuItems: [


            ],
          },
          {
            label: 'Customer Support',
            leftIcon: <img src={icon9} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={icon19} alt="icon" className='object-cover' />
            ),
            rightIcon: 'sadf',
            path: '/ticket',
            pathname: 'ticket',
            subMenuItems: [
              {
                label: 'Tickets',
                path: '/ticket',
                subMenuItems: [],
              },
              {
                label: 'Report',
                path: '/report',
                subMenuItems: [],
              },

            ],
          },
        ]

      }
    ];
 
};
export default SidebarObj;
