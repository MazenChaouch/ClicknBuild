import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, XIcon } from "lucide-react";

interface FeatureComparison {
  feature: string;
  basic: boolean | string;
  pro: boolean | string;
  subscription: boolean | string;
}

const featureComparison: FeatureComparison[] = [
  { feature: "Website Creation", basic: true, pro: true, subscription: true },
  {
    feature: "Templates",
    basic: "Limited",
    pro: "All",
    subscription: "Extended",
  },
  { feature: "SSD Storage", basic: "1GB", pro: "20GB", subscription: "5GB" },
  { feature: "Custom Domain", basic: true, pro: true, subscription: true },
  { feature: "SSL Certificate", basic: true, pro: true, subscription: true },
  { feature: "DDoS Protection", basic: false, pro: true, subscription: true },
  { feature: "2FA", basic: false, pro: true, subscription: false },
  { feature: "Email Support", basic: true, pro: true, subscription: true },
  { feature: "Phone Support", basic: false, pro: true, subscription: false },
  {
    feature: "Google Ads Integration",
    basic: false,
    pro: false,
    subscription: true,
  },
];
export const Details = () => {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-center text-6xl font-bold text-[#4A3AFF]">
        Feature Comparison
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Feature</TableHead>
            <TableHead>Basic</TableHead>
            <TableHead>Pro</TableHead>
            <TableHead>Subscription</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {featureComparison.map((item) => (
            <TableRow key={item.feature}>
              <TableCell className="font-medium">{item.feature}</TableCell>
              <TableCell>{renderFeatureValue(item.basic)}</TableCell>
              <TableCell>{renderFeatureValue(item.pro)}</TableCell>
              <TableCell>{renderFeatureValue(item.subscription)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
const renderFeatureValue = (value: boolean | string): React.ReactNode => {
  if (typeof value === "boolean") {
    return value ? (
      <CheckIcon className="h-5 w-5 text-green-500" />
    ) : (
      <XIcon className="h-5 w-5 text-red-500" />
    );
  }
  return value;
};
