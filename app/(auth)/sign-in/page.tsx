import Image from "next/image";
import logo from "../../assets/sign-in/logo.svg";

const page = () => {
  return (
    <main className="h-screen w-screen flex">
      <div className="w-[40%] h-full">
        <div className="pl-20 py-10 flex items-end gap-4 border-b border-stone-400">
          <Image src={logo} alt="logo" />
          <p className="font-bold text-3xl align-baseline inline-block leading-none">
            ClickPro
          </p>
        </div>
      </div>
      <div className="w-[60%] flex h-full overflow-hidden">
        <div
          className="bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(../../assets/sign-in/cover.jpg)` }}
        ></div>
      </div>
    </main>
  );
};

export default page;
