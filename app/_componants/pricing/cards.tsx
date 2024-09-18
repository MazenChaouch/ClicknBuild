"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import basicIcon from "@/app/assets/pricing/basic-icon.svg";
import proIcon from "@/app/assets/pricing/pro-icon.svg";
import ultimateIcon from "@/app/assets/pricing/ultimate-icon.svg";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
interface PricingPlan {
  logo: StaticImageData;
  name: string;
  price: string;
  period: string;
  description: string;
  for: string;
  features: string[];
  popular?: boolean;
}

export const Cards = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const pricingPlans: PricingPlan[] = [
    {
      logo: basicIcon,
      name: "Basic",
      price: isAnnual ? "350DT" : "35DT",
      period: isAnnual ? "/year" : "/monthly",
      for: "For individuals",
      description:
        "The basic pocket to get some benefits for free,Specifications of a web platform",
      features: [
        "Basic website creation",
        "Limited choice of templates",
        "Hosting included,1GB SSD",
        "Standard security, Email support",
      ],
    },
    {
      logo: proIcon,
      name: "Premium",
      price: isAnnual ? "2000DT" : "200DT",
      period: isAnnual ? "/year" : "/monthly",
      for: "For startups",
      description: "The pro packet you get all the benefits by pricing",
      features: [
        "All features of the advanced",
        "Full site customization, 20GB SSD",
        "Maximum security (SSL, DDOS, 2FA)",
        "Access to all templates, Phone support",
      ],
      popular: true,
    },
    {
      logo: ultimateIcon,
      name: "Diamand",
      price: isAnnual ? "750DT" : "75DT",
      period: isAnnual ? "/year" : "/monthly",
      for: "For big companies",
      description:
        "The company packet you get mediums benefits and more by pricing",
      features: [
        "All the features of the basic",
        "More choice of templates, Chat",
        "Automatic Google Ads, 5 SSD",
        "Advanced security (SSL, DDoS)",
      ],
    },
  ];
  return (
    <div className="my-24">
      <div className="my-16 flex items-center justify-center">
        <span className="mr-2 text-[#4A3AFF]">Monthly</span>
        <Switch
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
          className="bg-purple-300 data-[state=checked]:bg-[#4A3AFF]"
        />
        <span className="ml-2 text-[#4A3AFF]">Annually</span>
      </div>
      <div className="flex h-fit w-full items-center justify-center gap-8">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`max-w-md rounded-3xl p-4 ${plan.popular ? "-translate-y-6 border-[#4A3AFF] bg-[#4A3AFF] text-white" : "bg-white"}`}
          >
            <CardHeader className="flex-row justify-between gap-4">
              <div className="flex gap-4">
                <Image src={plan.logo} alt={plan.name} />
                <div className="flex flex-col gap-2">
                  <p
                    className={`text-sm ${plan.popular ? "text-purple-200" : "text-[#4A3AFF]"}`}
                  >
                    {plan.for}
                  </p>
                  <CardTitle
                    className={plan.popular ? "text-white" : "text-[#4A3AFF]"}
                  >
                    {plan.name}
                  </CardTitle>
                </div>
              </div>
              {plan.popular && (
                <div className="h-fit rounded-lg bg-white/20 px-6 py-2">
                  Popular
                </div>
              )}
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <p className="text-lg">{plan.description}</p>
              <div className="flex items-baseline gap-4">
                <p className="text-6xl font-bold">{plan.price}</p>
                <p className="text-3xl">{plan.period}</p>
              </div>
              <p className="text-lg font-bold">What&apos;s included</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex gap-8">
                    <CheckIcon
                      className={`mr-2 size-7 rounded-full stroke-2 p-1 ${plan.popular ? "bg-white text-[#4A3AFF]" : "bg-[#4A3AFF] text-white"}`}
                    />
                    <span
                      className={`text-lg ${plan.popular ? "text-purple-100" : "text-[#4A3AFF]"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-fit self-center rounded-full px-24 py-8 text-xl ${plan.popular ? "bg-white text-[#4A3AFF] hover:bg-stone-100" : "bg-[#4A3AFF] text-white hover:bg-[#4a3affe3]"}`}
              >
                Select plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
