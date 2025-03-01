// pages/_app.js

import "@/styles/globals.css";
import TopBar from "@/components/TopBar";
import { CartProvider } from "@/context/CartContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <TopBar />
      <Component {...pageProps} />
    </CartProvider>
  );
}
