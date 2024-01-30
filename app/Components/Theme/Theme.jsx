"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Theme = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Theme;