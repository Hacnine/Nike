import {headerLogo} from '../assets/images';
import {shoe8} from '../assets/images';

import { navLinks } from '../constants/index';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-white'>
        <nav className='flex justify-between items-center max-container'>
            <a href="">
                <img 
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden max-lg'>
              {navLinks.map((item) => (
                <li key ={item.label}>
                  <a
                   href={item.href}
                   className='font-motserrat leading-normal text-lg text-gray-700'>
                    {item.label}
                   </a>
                </li>
              ))}
            </ul>
            <div className="hidden max-lg:block">
              <img src={shoe8} 
              alt="Hamburger"
              width={25}
              height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
