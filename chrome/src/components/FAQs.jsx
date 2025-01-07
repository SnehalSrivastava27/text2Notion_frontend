import { Accordion,AccordionContent,AccordionTrigger,AccordionItem } from "./ui/accordion"
import { motion } from "motion/react"
export const FAQ=()=>{
return(
<section id="faq" className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
    <p className="text-gray-600">Everything you need to know about the product and billing.</p>
  </motion.div>

  <div className="max-w-3xl mx-auto">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it Paid?</AccordionTrigger>
        <AccordionContent>
         No its Absolutely Free, however you can sponsor us by approaching the founder on Linkedin
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Where Can I submit Request For more Features</AccordionTrigger>
        <AccordionContent>
         Just Drop a text to Snehal Srivastava on Linkedin , ID is in footer
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Who are the main customers</AccordionTrigger>
        <AccordionContent>
            The tool is open to use for everyone however it is more relevant to Students, Researchers and Employees which has lot of research work.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</div>
</section>
)
}