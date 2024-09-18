import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen">
      <div className="flex w-1/2 flex-col p-8">
        <div className="flex items-center gap-4">
          <Link href="/" target="_blank">
            <Image src={logo} alt="logo" width={40} height={40} />
          </Link>
          <p className="inline-block align-baseline text-xl font-medium leading-none">
            ClickPro
          </p>
        </div>
        {children}
      </div>
      <div className="relative flex w-1/2 items-center justify-center bg-[#E7E0FF]">
        <div className="size-[270px] animate-bounce-1.5 rounded-full bg-[#2D5BFF]" />
        <div className="absolute bottom-0 h-1/2 w-full bg-[#F8F2F0]/40 backdrop-blur-md" />
      </div>
    </main>
  );
}
