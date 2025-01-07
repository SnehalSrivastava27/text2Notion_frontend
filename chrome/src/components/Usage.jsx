import { motion } from "motion/react"
import {ArrowRight} from 'lucide-react'
import { Pencil } from "lucide-react"
import { CheckCircle } from "lucide-react"
import { FileText } from "lucide-react"
import { Button } from "./ui/button"

export const Usage=()=>{
    return(
<section className="bg-black text-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-5xl font-bold mb-4">Three Simple Steps to Smarter Note-Taking</h2>
      <p className="text-xl text-gray-400">Start saving important content to Notion in seconds, not minutes</p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {[
        {
          number: "1",
          title: "Highlight Text",
          description: "Select any text you want to save while browsing",
          icon: <motion.div className="w-12 h-12 text-blue-500"><Pencil className="w-full h-full" /></motion.div>
        },
        {
          number: "2",
          title: "Click Extension",
          description: "Click the Text to Notion icon in your Context Menu",
          icon: <motion.div className="w-12 h-12 text-blue-500"><FileText className="w-full h-full" /></motion.div>
        },
        {
          number: "3",
          title: "Done!",
          description: "Text is automatically saved to your Notion workspace",
          icon: <motion.div className="w-12 h-12 text-blue-500"><CheckCircle className="w-full h-full" /></motion.div>
        }
      ].map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative bg-zinc-900 rounded-xl p-8 text-center"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
              {step.number}
            </div>
          </div>
          <div className="mt-8 mb-6 flex justify-center">{step.icon}</div>
          <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
          <p className="text-gray-400">{step.description}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <Button size="lg" asChild>
        <a href="/try-now" className="text-lg px-8">
          Start Saving Time Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </Button>
    </motion.div>
  </div>
</section>
    )
}