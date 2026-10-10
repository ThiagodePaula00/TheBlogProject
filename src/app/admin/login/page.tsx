import { LoginForm } from "@/src/components/admin/LoginForm";
import ErrorMessage from "@/src/components/ErrorMessage";
import type { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Login",
};

export default async function AdminLoginPage() {
  await connection();

  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return (
      <ErrorMessage
        contentTitle="403"
        content="Habilite o sistema de login definindo ALLOW_LOGIN=1"
      />
    );
  }

  return <LoginForm />;
}