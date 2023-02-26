import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { SessionProvider } from "@/components/SessionProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { Montserrat } from "@next/font/google";
import ClientProvider from "@/components/ClientProvider";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}  max-w-screen-2xl mx-auto`}>
        <SessionProvider session={session}>
          <ClientProvider />
          <Header />

          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
