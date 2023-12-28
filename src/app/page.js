"use client";
import React, { createContext, useContext, useEffect } from "react";
import useQuote from "./Quote/quote";

import Dashboard from "./Dashboard/dashboard";
import Data from "./data";

export const QuoteContext = createContext();

export default function Home() {
  const api = "https://api.quotable.io/random";
  const { fetchQuote, quote } = useQuote(api);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <main className="">
      <QuoteContext.Provider value={{ fetchQuote, quote }}>
        <Data />
      </QuoteContext.Provider>
      <Dashboard />
    </main>
  );
}
