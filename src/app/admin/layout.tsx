import { connection } from 'next/server';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default async function adminLayout({ children }: AdminLayoutProps) {
  await connection();

  return children;
}
