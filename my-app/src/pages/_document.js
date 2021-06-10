// Chris Diewtragulchai
// Attempting material-ui fix to get it to work nicely with next.js as listed from https://github.com/vercel/next.js/issues/16347
// Code based on this Article https://itnext.io/next-js-with-material-ui-7a7f6485f671 


import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from "@material-ui/styles";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) =>sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};