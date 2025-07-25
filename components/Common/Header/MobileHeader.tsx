import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileHeader = ({showNav, closeNav}: Props) => {

    const navOpen = showNav ? 'translate-x-0': 'translate-x-[-100%]';

    return (
        <div>
            <div className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>

            <div className={`${navOpen} fixed flex justify-center flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050] text-white`}>
                {NavLinks.map(link => (
                    <Link 
                        key={link.id} 
                        href={link.url}
                        title={link.label}
                        className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
                    >
                        {link.label}
                    </Link>
                ))}

                <CgClose 
                    onClick={closeNav}
                    className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-5 h-6'
                />
            </div>
        </div>
  )
}

export default MobileHeader