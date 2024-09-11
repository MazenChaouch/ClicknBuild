"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import bg from "@/app/assets/sign-in/bg.png";
import logo from "@/app/assets/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { newverification } from "./action";
import { BarLoader } from "react-spinners";
import { FormSuccess } from "@/app/_componants/auth/form-success";
import { FormError } from "@/app/_componants/auth/form-error";

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Token is Missing!");
      return;
    }
    newverification(token)
      .then((res) => {
        setSuccess(res.success);
        setError(res.error);
      })
      .catch((err) => {
        return { error: "Something went wrong!" };
      });
  }, [token]);
  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <main className="flex flex-col items-center justify-center space-y-8 h-screen w-full py-4">
      <Image
        src={bg}
        alt="bg"
        className="absolute -z-10 object-fill object-center h-full w-full"
      />
      <div className="flex flex-col items-center justify-center">
        <Card className="w-[500px] max-w-xl p-8">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col gap-4 justify-center items-center">
                <Image src={logo} alt="logo" className="size-20" />
                <p className="font-bold text-3xl">ClickPro</p>
              </div>
              <p className="font-bold text-xl">Email verification!</p>
              <div className="py-2">
                {!success && !error ? (
                  <BarLoader className="m-2" color="#8755bf" width={350} />
                ) : null}
                <FormSuccess message={success} />
                <FormError message={error} />
              </div>
              <p className="font-light text-lg">
                Close this tab after the verification
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Page;
