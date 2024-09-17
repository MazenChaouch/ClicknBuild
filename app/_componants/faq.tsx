import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import faq from "@/app/assets/pricing/faq.png";
const faqs: { question: string; answer: string }[] = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "We offer a 14-day free trial for all our plans. No credit card required.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We offer email support for all plans, with additional phone support for our Pro plan customers.",
  },
];
export const Faq = () => {
  return (
    <div className="mx-auto my-12 flex flex-col items-center justify-center">
      <h2 className="mb-8 text-center text-6xl font-bold text-[#4A3AFF]">
        Frequently Asked Questions
      </h2>
      <div className="flex items-center gap-8">
        <Accordion
          type="single"
          collapsible
          className="w-full min-w-96 rounded-lg bg-white"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Image src={faq} alt="faq" className="w-1/2" />
      </div>
    </div>
  );
};
