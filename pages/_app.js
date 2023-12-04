import "../public/assets/css/style.css";
import "../styles/globals.css"; //tailwindcss
// pages/_app.js

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("../public/assets/js/bootstrap.bundle.min.js");
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
