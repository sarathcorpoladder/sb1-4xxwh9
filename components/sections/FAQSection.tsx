'use client'

import { inter } from "@/styles/fonts"

export function FAQSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gradient ${inter.className}`}>Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              question: "What types of training programs does CORPOLADDER offer?",
              answer: "CORPOLADDER offers a wide range of training programs focusing on three main areas: Artificial Intelligence, ESG (Environmental, Social, and Governance), and Leadership Development. Our courses are designed to cater to various industries and skill levels."
            },
            {
              question: "How are CORPOLADDER's training programs delivered?",
              answer: "Our training programs are delivered through a combination of in-person workshops, online live sessions, and self-paced e-learning modules. We tailor the delivery method to suit your organization's needs and preferences."
            },
            {
              question: "Can CORPOLADDER customize training programs for our company?",
              answer: "Absolutely! We specialize in creating customized training solutions that address your organization's specific challenges and goals. Our team works closely with you to develop targeted programs that align with your business objectives."
            },
            {
              question: "What makes CORPOLADDER's trainers unique?",
              answer: "Our trainers are industry experts with extensive real-world experience in their respective fields. They bring a combination of theoretical knowledge and practical insights, ensuring that participants receive relevant and applicable training."
            },
            {
              question: "How can I get started with CORPOLADDER's training programs?",
              answer: "Getting started is easy! Simply click on the 'Get in Touch' button or 'Contact Sales' link on our website. Our team will reach out to you to discuss your training needs and guide you through the process of selecting or customizing the right program for your organization."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className={`text-xl font-semibold mb-2 text-gray-900 ${inter.className}`}>{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}