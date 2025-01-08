import { Link } from "react-router-dom"
import Logo from "../assets/Text2Notion.png"
export const Footer=()=>{
    return(
      <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8rounded-lg" >
                <img src={Logo}></img>
                </div>
              <span className="text-xl font-semibold">TextToNotion</span>
            </Link>
            <p className="text-gray-400 mb-6"> Collect all your Readings and Research Hassle Free.</p>
            <div className="flex gap-4">
              {[
                { icon: "linkedin", href: "https://www.linkedin.com/in/snehal-srivastava-73974022b/" },
                { icon: "mail", href: "mailto:snehalsrivastava27@gmail.com" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social.icon}</span>
                  {social.icon === "linkedin" && <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                  {social.icon === "mail" && <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>}
                </a>
              ))}
            </div>
          </div>
  
          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
    
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2025 TextToNotion - Snehal Srivastava
          </p>
        </div>
      </div>
    </footer>
    )
}