import HomeLayout from "@/component/layout/home.layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </RecoilRoot>
  );
}
