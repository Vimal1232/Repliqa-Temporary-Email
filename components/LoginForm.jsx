"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Router = useRouter();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Not Valid Credentials");
        return;
      }
      Router.replace("/MailSystem");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto flex items-center justify-center h-screen">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <Link href="/">
          <div className="flex items-center gap-2 mb-14 ">
            <img src="/logo.png" alt="" className=" w-[48px]" />
            <div className=" font-Manrope font-semibold text-[24px] ">
              Repliqa
            </div>
          </div>
        </Link>
        <form className="mx-auto" onSubmit={handlesubmit}>
          <div className="mt-5">
            <label className="font-semibold text-sm text-gray-600 pb-1 ">
              UserName
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-Primary"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 ">
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-Primary"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-right mb-4">
            <a
              className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-center w-full items-center">
            <div>
              {error && (
                <div className="text-Primary text-xs font-semibold p-1 mb-2">
                  {error}
                </div>
              )}
            </div>
          </div>
          <div className="mt-5">
            <button
              className="py-2 px-4  bg-Primary hover:bg-black  text-white w-full transition ease-in duration-500 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Log in
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-black  md:w-1/4"></span>
            <Link href="/signup">
              <h1
                className="text-xs text-black  uppercase  hover:underline"
                href="#"
              >
                or sign up
              </h1>
            </Link>
            <span className="w-1/5 border-b border-black  md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
