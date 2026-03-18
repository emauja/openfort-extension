"use client";

import { PropsWithChildren } from "react";
import { OpenfortProvider } from "@openfort/react";
import { OpenfortWagmiBridge } from "@openfort/react/wagmi";

export const OpenfortScaffoldProvider = ({ children }: PropsWithChildren) => {
  return (
    <OpenfortProvider publishableKey={process.env.NEXT_PUBLIC_OPENFORT_PUBLIC_KEY!}>
      <OpenfortWagmiBridge>{children}</OpenfortWagmiBridge>
    </OpenfortProvider>
  );
};
