import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from "./BlurText";

const faqs: FaqItem[] = [
  { 
    question: "What is Evoc Labz?", 
    answer: "Evoc Labz is a performance-driven eCommerce SaaS platform that helps brands grow profitably by managing checkout, orders, ads, operations, and insights from one dashboard." 
  },
  { 
    question: "What pricing model does Evoc Labz follow?", 
    answer: "No subscription. No service fee. Only 4% commission on delivered orders. Zero charges on RTO or failed deliveries." 
  },
  { 
    question: "What kind of brands can use Evoc Labz?", 
    answer: "Evoc Labz is built for: D2C brands, COD-heavy businesses, Dropshipping & hybrid brands, Shopify-based stores, and brands looking to scale profitably." 
  },
  { 
    question: "Does Evoc Labz integrate with Shopify?", 
    answer: "Yes. Evoc Labz integrates seamlessly with Shopify and related tools." 
  },
  { 
    question: "Will Evoc Labz help reduce RTO?", 
    answer: "Yes. Our systems are built to reduce fake orders, improve order confirmation, and optimize COD performance." 
  },
  { 
    question: "Is Evoc Labz suitable for new brands?", 
    answer: "Yes. It’s especially useful for new brands that want to grow without burning money on fixed costs." 
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
            <BlurText
               text="Frequently asked questions"
               className="text-3xl md:text-5xl font-semibold mb-4 text-text-main tracking-tight"
            />
          <div className="mt-4">
          <BlurText
             text="Everything you need to know about working with us."
             className="text-text-muted inline-block"
             delay={0.2}
          />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              key={index} 
              className={`border rounded-lg transition-all duration-300 ${openIndex === index ? 'bg-surface border-border' : 'bg-transparent border-transparent hover:bg-surface/50'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-text-main' : 'text-text-secondary'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? <Minus className="text-text-secondary w-5 h-5" /> : <Plus className="text-text-muted w-5 h-5" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;