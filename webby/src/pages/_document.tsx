import { Html, Head, Main, NextScript } from "next/document";

function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:100,200,300,400,500,600,700,800,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-[#171717]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;
