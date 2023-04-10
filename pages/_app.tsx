import HomeLayout from "@/component/layout/home.layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export const MainColor = "#ff8375";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}
