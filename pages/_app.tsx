import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

import Menu from "@/components/menu/Menu";
import Footer from "@/components/Footer";
import CopyDialog from "@/components/CopyModal/CopyDialog";


export default function MyApp({Component, pageProps}: AppProps,) {
    return (
        <>
            <Head>
                <title>OneSS</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <Menu/>
            <div className={'min-h-screen w-full'}>
                <Component {...pageProps}/>
            </div>

            <CopyDialog/>

            <Footer/>
        </>
    );
}
