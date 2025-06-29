import React from 'react'
import { Link } from 'react-router-dom'
// import SubNav from '../../components/SubNav'
import SubNav from '../../components/SubNav.jsx'


 

const SubHeader = () => {

  const subheaderList = [
            {section:"Profile", path:'profile'},
             {section:'Notifications', path:'notification'},
             {section:'Privacy & Security', path:'privacy'},
             ]

  return (
    <div>
      <SubNav 
      list={subheaderList}
      />
    </div>

    // <div>
    //    {/* sub header */}
    //     <nav 
    //     aria-label='Sub navigation'
    //     className=' bg-white  items-center rounded-lg md:py-2  text-[#8b8b8b]'>
    //         <ul className='flex  md:gap-8 px-4'>
    //         {
    //             subheaderList.map(({section, path})=>(
    //               <li
    //               key={path}
    //                 className='hover:text-[#02402d] py-2 px-4 rounded-sm hover:bg-[#d5f0e8] text-[10px] md:text-[14px]'
    //                 >
    //              <Link to={path}>                     
    //                   {section}
                   
    //               </Link>
    //               </li>
                  
                   
    //             ))
    //         }
    //         </ul>
    //     </nav>
    // </div>
  )
}

export default SubHeader
