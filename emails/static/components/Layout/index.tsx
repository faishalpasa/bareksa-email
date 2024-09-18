import * as React from "react";
import { Html, Head, Body, Container } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import type { TailwindConfig } from "@react-email/tailwind";

const TAILWIND_CONFIG: TailwindConfig = {
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    }
  },
} as any;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;display=swap" rel="stylesheet"></link>
      </Head>
      <Tailwind config={TAILWIND_CONFIG}>
        <Body>
          <Container className="w-full max-w-[600px] bg-white lg:">
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Layout;