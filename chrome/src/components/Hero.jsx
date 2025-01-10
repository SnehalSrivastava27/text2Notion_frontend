{/* Hero Section */ }
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Button } from "./ui/button"
import Video from "../assets/Usage.mp4"
import ChromeLogo from '../assets/chrome.png'

export const Hero = () => {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Save your Readings
          <br />
          {/* Updates{" "} */}
          <motion.span
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a href="https://chromewebstore.google.com/detail/text-to-notion/gbbfjpcgipipdknhhdhaigjbjlkkaomb">in One Click</a>
            <ArrowRight className="w-6 h-6" />
          </motion.span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Text to Notion is a Chrome extension that lets you seamlessly save highlighted text
          directly to Notion with a single click. It automatically includes the source URL for easy reference.
          Perfect for organizing insights, research, and bookmarks efficiently increases your productivity by 10x
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Button size="lg" className="flex mb-2">
            <a href="https://chromewebstore.google.com/detail/text-to-notion/gbbfjpcgipipdknhhdhaigjbjlkkaomb">Download Chrome Extension</a>
            <img src={ChromeLogo} className="w-10 h-10"></img>
          </Button>
          <p className="text-sm text-gray-500">Connect your Notion in One Click</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative bg-white rounded-2xl p-8"
      >
        <motion.div
          className="absolute inset-0 bg-blue-500/5 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h2 className="text-2xl font-semibold mb-6 relative">
          Save Readings in One Go!!
        </h2>
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <video
            src={Video}
            type="video/mp4"
            muted
            autoPlay
            playsInline
            controls
            loop
            alt="QuickScore Dashboard"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </main>
  )

}
