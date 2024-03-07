import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";
import { Component } from "react";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <Icon component="img" src="/icons/bitcoin.png" alt="Bitcoin" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <Icon component="img" src="/icons/ethereum.png" alt="Ethereum" />,
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: <Icon component="img" src="/icons/solana.png" alt="Ethereum" />,
  }
];
