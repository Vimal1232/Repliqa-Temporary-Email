"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import random from "random-string-generator";
import Badge from "@/components/Badge";
import md5 from "md5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const page = () => {
  const [Details, setDetails] = useState({});
  const [inbox, setInbox] = useState([]);

  const handleClick = async () => {
    const url = "https://privatix-temp-mail-v1.p.rapidapi.com/request/domains/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        "x-rapidapi-host": "privatix-temp-mail-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const string = random(12);
      const email = `${string}${result[0]}`;
      setDetails({ emailAddress: email });
    } catch (error) {
      console.error(error);
    }
  };

  const HandleEmails = async () => {
    const email = Details.emailAddress;
    const hash = md5(email.trim().toLowerCase());

    const url = `https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/${hash}/`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        "x-rapidapi-host": "privatix-temp-mail-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (Array.isArray(result)) {
        setInbox(result);
      } else {
        console.log("wrong format");
        setInbox([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-20 max-sm:px-5 ">
      <div className=" mt-10 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className=" w-[48px]" />
            <div className=" font-Manrope font-semibold text-[24px]">
              Repliqa
            </div>
          </div>
        </Link>
        <Button
          className="w-[100px]"
          variant="my"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </Button>
      </div>
      <div className=" flex-col flex items-center gap-10  mt-20">
        <div>
          <Badge ButtonName="Digital Freedom" />
        </div>
        <div>
          <h1 className=" text-center text-[64px] font-bold font-Manrope leading-[1.2em]  ">
            This Is It! Enjoy Your New Found Freedom
          </h1>
        </div>
      </div>

      <div>
        <div className={`flex items-center gap-20   flex-row-reverse mt-20 `}>
          <div>
            <TooltipProvider delayDuration={700}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="my" onClick={handleClick}>
                    {Details.emailAddress
                      ? " Generate New Mail"
                      : "Generate Email"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {" "}
                    {Details.emailAddress
                      ? "Generates a New Email Address"
                      : "Generate a Email Address"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="text-center text-[18px] w-full text-black font-bold border border-black font-Manrope leading-[1.2em] px-5 py-3 bg-Button rounded-full">
            {Details.emailAddress ? Details.emailAddress : "No Email Address"}
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center flex justify-between">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Your MailBox
            </h2>
            <div>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="my" onClick={HandleEmails}>
                      Reload
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to See New Emails</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className=" mx-auto mt-12 cursor-pointer">
            {inbox.length === 0 && (
              <div className="text-center">
                <h2 className="text-[14px] font-bold text-gray-900 font-pj">
                  No Emails Yet
                </h2>
              </div>
            )}

            {inbox.map((step, index) => (
              <div key={index} className="relative pb-10">
                {index > 0 && (
                  <div className="absolute -mt-10 inset-y-8 -inset-x-1">
                    <div
                      className="w-full h-full mx-auto opacity-30 blur-lg filter"
                      style={{
                        background:
                          "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                      }}
                    ></div>
                  </div>
                )}

                <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                  <div className="flex items-start sm:items-center">
                    <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                      {index + 1}
                    </div>
                    <div className=" flex flex-col gap-2">
                      <p className="ml-6 text-[18px] font-medium text-gray-900 font-pj block">
                        From:
                        {step.mail_from}
                      </p>
                      <p className="ml-6 text-[14px] font-medium text-gray-900 font-pj block">
                        Subject:
                        {step.mail_subject}
                      </p>

                      <p className="ml-6 text-[14px] font-medium text-gray-900 font-pj block">
                        Body:
                        {step.mail_text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
