import Image from "next/image";
import logo from "@/app/assets/logo.png";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen">
      <div className="flex flex-col p-8 w-1/2">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="logo" width={40} height={40} />
          <p className="font-medium text-xl align-baseline leading-none inline-block">
            ClickPro
          </p>
        </div>
        {children}
      </div>
      <div className="relative flex justify-center items-center bg-[#E7E0FF] w-1/2">
        <div className="size-[270px] rounded-full bg-[#2D5BFF] animate-bounce-1.5" />
        <div className="absolute bg-[#F8F2F0]/40 backdrop-blur-md h-1/2 bottom-0 w-full" />
      </div>
    </main>
  );
}
