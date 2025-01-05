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
            <div className='flex items-center gap-10'>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>About us</a>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>FAQs</a>
                <Button asChild>
             <a href="/try-now" className="flex items-center gap-2">
               Try Now
               <ArrowRight className="w-4 h-4" />
             </a>
           </Button>
            </div>
        </div>
    )
    // <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    //     <Link href="/" className="flex items-center gap-2">
    //       <div className="w-8 h-8 bg-blue-500 rounded-lg" />
    //       <span className="text-xl font-semibold">QUICKSCORE</span>
    //     </Link>
    //     <div className="flex items-center gap-8">
    //       <Link href="/coverage" className="text-gray-600 hover:text-gray-900">
    //         Coverage
    //       </Link>
    //       <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
    //         Pricing & FAQs
    //       </Link>
    //       <Button asChild>
    //         <Link href="/try-now" className="flex items-center gap-2">
    //           Try Now
    //           <ArrowRight className="w-4 h-4" />
    //         </Link>
    //       </Button>
    //     </div>
    //   </nav>
}