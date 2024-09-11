"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import google from "@/app/assets/sign-up/google.svg";
import facebook from "@/app/assets/sign-up/facebook.svg";

interface SocialMediaProps {
  onclick: (provider: "google" | "facebook") => void;
}
const SocialMedia = ({ onclick }: SocialMediaProps) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Button
        onClick={() => onclick("google")}
        type="button"
        className="flex w-full px-8 py-7 gap-4 rounded-full bg-white hover:bg-white hover:brightness-95 shadow-md ring-1 ring-blue-950/30 text-white text-lg"
      >
        <Image src={google} alt="google" />
        <p className="text-lg font-semibold text-blue-950/85">
          Login with Google
        </p>
      </Button>
      <Button
        type="button"
        onClick={() => onclick("facebook")}
        className="flex w-full px-8 py-7 gap-4 rounded-full bg-white hover:bg-white hover:brightness-95 shadow-md ring-1 ring-blue-950/30 text-white text-lg"
      >
        <Image src={facebook} alt="google" />
        <p className="text-lg font-semibold text-blue-950/85">
          Login with Facebook
        </p>
      </Button>
    </div>
  );
};

export default SocialMedia;
