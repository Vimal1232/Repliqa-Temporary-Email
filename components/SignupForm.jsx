"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill all the fields");
      return;
    }
    try {
      const resp = await fetch("/api/UserExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const { user } = await resp.json();

      if (user) {
        setError("User already exists");
        return;
      }

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        Router.push("/signIn");

        return;
      } else {
        setError("user cannot be created");
        return;
      }
    } catch (error) {
      console.error("Internal server error");
    }
  };

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto flex items-center justify-center h-screen">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10">
        <Link href="/">
          <div className="flex items-center gap-2 mb-14 ">
            <img src="/logo.png" alt="" className=" w-[48px]" />
            <div className=" font-Manrope font-semibold text-[24px]">
              Repliqa
            </div>
          </div>
        </Link>
        <form className=" mx-auto" onSubmit={handleSubmit}>
          <div className="mt-5">
            <div className="">
              <label className="font-semibold text-sm text-gray-600 pb-1 ">
                UserName
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-Primary "
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="">
              <label className="font-semibold text-sm text-gray-600 pb-1">
                Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-Primary   "
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              {error && (
                <span className="text-Primary text-xs font-semibold">
                  {error}
                </span>
              )}
            </p>
          </div>
          <div className="mt-5">
            <Button variant="my" type="submit">
              Sign up
            </Button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-black  md:w-1/4"></span>
            <Link href="/signIn">
              <h1 className="text-xs text-black uppercase hover:underline">
                have an account? Log in
              </h1>
            </Link>
            <span className="w-1/5 border-b border-black  md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
