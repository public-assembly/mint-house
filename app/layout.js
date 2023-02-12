import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  );
}

export const metadata = {
  title: "PA Mint House",
  description: "Welcome to PA Mint House!",
}