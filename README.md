# Openfort Extension for Scaffold-ETH 2

This [Scaffold-ETH 2](https://scaffoldeth.io/) extension integrates [Openfort](https://www.openfort.io/) embedded smart contract wallets, giving your users ERC-4337 compatible accounts out of the box.

## Features

- Embedded wallet creation on sign-up (no browser extension needed)
- ERC-4337 smart contract wallets with gas sponsorship support
- Multiple authentication methods (email, social, wallet, guest)
- Full wagmi/viem compatibility via `OpenfortWagmiBridge`
- Built-in connect button UI (`OpenfortButton`)

## Installation

1. Create a new Scaffold-ETH 2 project with this extension:

```bash
npx create-eth@latest -e emauja/openfort-extension
```

2. Configure your environment variables:

Copy `.env.example` to `.env.local` in `packages/nextjs/`:

```bash
cp packages/nextjs/.env.example packages/nextjs/.env.local
```

3. Get your Openfort publishable key:

Visit the [Openfort Dashboard](https://dashboard.openfort.xyz/) to create a project and get your publishable key. Add it to `packages/nextjs/.env.local`:

```
NEXT_PUBLIC_OPENFORT_PUBLIC_KEY=pk_...
```

4. Start the development server:

```bash
yarn start
```

## How It Works

The extension adds an `OpenfortProvider` and `OpenfortWagmiBridge` into SE2's provider hierarchy. The bridge syncs Openfort's embedded wallet as a standard wagmi connector, so all existing SE2 hooks and components work seamlessly.

### Provider Hierarchy

```
<WagmiProvider>              (SE2 base)
  <QueryClientProvider>      (SE2 base)
    <OpenfortProvider>       (this extension)
      <OpenfortWagmiBridge>  (this extension)
        {children}
      </OpenfortWagmiBridge>
    </OpenfortProvider>
  </QueryClientProvider>
</WagmiProvider>
```

## Documentation

- [Openfort Documentation](https://www.openfort.io/docs)
- [Openfort React SDK](https://www.npmjs.com/package/@openfort/react)
- [Scaffold-ETH 2 Documentation](https://docs.scaffoldeth.io/)
