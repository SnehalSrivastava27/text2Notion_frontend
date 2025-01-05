import  Logo from '../assets/react.svg'
import {ArrowRight} from 'lucide-react'
import { Button } from './ui/button'
export const Navbar=()=>
{
    return(
        <div className="flex items-center justify-between mt-2 max-w-7xl">
            <div className='flex items-center text-xl font-semibold'>
                <img src={Logo}></img>TextToNotion
            </div>
            <div className='flex items-center gap-8 mr-1'>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>About us</a>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>FAQs</a>
                <Button asChild>
             <a href="/try-now" className="flex items-center ">
               Try Now
               <ArrowRight className="w-4 h-4" />
             </a>
           </Button>
            </div>
        </div>
    )
}