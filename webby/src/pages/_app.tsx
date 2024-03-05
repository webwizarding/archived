import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    className:
                        "!rounded !bg-[#202020]/50 !backdrop-blur-sm !text-white !shadow",
                }}
            />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="selection:bg-indigo-600 selection:text-white">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
