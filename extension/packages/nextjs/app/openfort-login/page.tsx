"use client";

import { OpenfortButton } from "@openfort/react";
import { useUser, useSignOut } from "@openfort/react";
import { useAccount } from "wagmi";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const OpenfortLogin: NextPage = () => {
  const { user, isAuthenticated } = useUser();
  const { signOut } = useSignOut();
  const { address, isConnected } = useAccount();

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">Scaffold-ETH 2 with Openfort</span>
        </h1>
        <p className="text-center text-lg">
          Embedded smart contract wallets powered by{" "}
          <a href="https://www.openfort.io/" className="underline font-bold" target="_blank" rel="noopener noreferrer">
            Openfort
          </a>
        </p>

        <div className="flex justify-center mt-6">
          <OpenfortButton />
        </div>

        {isAuthenticated && (
          <div className="flex justify-center mt-4">
            <button className="btn btn-secondary" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        )}

        {isConnected && address && (
          <div className="flex justify-center items-center space-x-2 mt-4">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={address} />
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/components/Header.tsx
            </code>
          </p>
          <p className="text-lg mt-2">
            Remember to get your{" "}
            <a href="https://dashboard.openfort.xyz/" className="underline font-bold" target="_blank" rel="noopener noreferrer">
              Openfort publishable key
            </a>{" "}
            and add it to{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              NEXT_PUBLIC_OPENFORT_PUBLIC_KEY
            </code>{" "}
            in your{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              .env.local
            </code>{" "}
            file
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenfortLogin;
