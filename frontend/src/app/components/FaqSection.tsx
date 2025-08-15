import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Free 1-Month Trial for EMS & OMS: Try our Election Management System (EMS) and Office Management System (OMS) free for 1 month! Experience real-time voter insights, social media monitoring, booth-level analysis, daily office management, and team tracking—risk-free. Get started now and see how our systems boost your campaign and office efficiency!",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can easily upgrade or change your plan anytime during or after the trial period to best fit your needs.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No, there is no setup fee. We ensure a smooth onboarding process to get you started quickly and easily.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Yes, we offer custom enterprise solutions tailored to your specific needs. Contact our sales team to discuss your requirements and get a personalized quote.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all plans. Our Professional plan includes priority email support, while Enterprise customers enjoy 24/7 dedicated support and a dedicated account manager.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your plan until the end of your current billing period.",
  },
];

const FaqSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400">
            Find answers to common questions about products. If you can't find
            what you're looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-saas-darkGray rounded-xl p-6 md:p-8 border border-gray-800 card-shadow">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-800 last:border-0"
              >
                <AccordionTrigger className="text-left text-white hover:text-saas-orange py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
