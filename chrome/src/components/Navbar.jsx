import  Logo from '../assets/Text2Notion.png'
import {ArrowRight} from 'lucide-react'
import { Button } from './ui/button'
export const Navbar=()=>
{
    return(
        <div className="flex items-center justify-between mt-2 max-w-7xl">
            <div className='flex items-center text-xl font-semibold'>
                <img src={Logo} className='w-15 h-12'></img>TextToNotion
            </div>
            <div className='flex items-center gap-8 mr-1'>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>About us</a>
                <a className='text-gray-600 hover:text-gray-900 cursor-pointer'>FAQs</a>
                <Button asChild>
             <a href="https://chromewebstore.google.com/detail/text-to-notion/gbbfjpcgipipdknhhdhaigjbjlkkaomb" className="flex items-center ">
               Try Now
               <ArrowRight className="w-4 h-4" />
             </a>
           </Button>
            </div>
        </div>
    )
}
//https://chrome-extension-frontend.vercel.app/