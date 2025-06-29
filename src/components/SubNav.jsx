import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SubNav = ({list =[]}) => {

    const {pathname} = useLocation();

  return (
    <div>
        <nav 
         aria-label='Sub navigation'
        className='bg-white items-center justify-center rounded-lg py-2 text-[#8b8b8b]'>
            <ul className='flex  md:gap-8 md:px-4 px-2  items-center'>
         
            {
                list.map(({section, path})=>{

                    const isActive = pathname.includes(path);
                    return(
                        <li key={path}
                        className={`
                            py-2 md:px-4 px-2 rounded-sm text-[12px] md:text-[14px]
                            ${isActive ? `text-[#02402d] bg-[#d5f0e8]`:`text-[#8b8b8b]`}`}
                        >
                            <Link to={path}>
                            {section}
                            </Link>
                            </li>
                    )

                })
            }
             </ul>
        </nav>
      
    </div>
  )
}

export default SubNav
