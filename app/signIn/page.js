import React from "react";
import LoginForm from "@/components/LoginForm";
import { Authoptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(Authoptions);

  if (session) {
    redirect("/MailSystem");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;
