import  Logo from '../assets/react.svg'
export const Navbar=()=>
{
    return(
        <div className="flex items-center justify-between mt-2 max-w-7xl">
            <div className='flex items-center text-xl font-semibold'>
                <img src={Logo}></img>TextToNotion
            </div>
            <div className='flex items-center gap-10'>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>About us</a>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>FAQs</a>
                <a className='text-white bg-black rounded-lg w-40 hover:cursor-pointer'>Try Now </a>
            </div>
        </div>
    )
}