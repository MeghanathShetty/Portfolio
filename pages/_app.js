// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

import { Analytics } from '@vercel/analytics/react';

// styles
import "../styles/topNav.css";
import "../styles/midPart.css";
import "../styles/main.css";
import "../styles/project.css"
import "../styles/contact.css"

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Helmet>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          `}
        </style>
        <link rel="icon" href="/imgs/web_icon.png" />
      </Helmet>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;