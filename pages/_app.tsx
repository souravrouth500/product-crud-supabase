import GlobalContextWrapper from "@/GlobalContextWrapper/Wrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/sonner"

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Toaster />
      <GlobalContextWrapper>
        <Component {...pageProps} />
      </GlobalContextWrapper>
    </>
  )
}
