
import { FaDiscord } from 'react-icons/fa'

function Navbar() {
    return (
        <>
            <navbar>
                <div className="navbar lg:px-16 lg:pt-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabIndex="0">
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-white normal-case text-xl"><FaDiscord /> <span className='mx-2'>Discord</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu font-bold  text-white menu-horizontal p-0">
                            <li><a className='hover:underline underline-offset-1'>Download</a></li>
                            <li><a className='hover:underline underline-offset-1'>Nitro</a></li>
                            <li><a className='hover:underline underline-offset-1'>Safety</a></li>
                            <li><a className='hover:underline underline-offset-1'>Support</a></li>
                            <li><a className='hover:underline underline-offset-1'>Careers</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <a className="btn rounded-full bg-white text-black hover:bg-white hover:text-[#404eed] hover:shadow-xl">Open Discord</a>
                    </div>
                </div>
            </navbar>
        </>
    )
}

export default Navbar