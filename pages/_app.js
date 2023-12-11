import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

// styles
import "../styles/topNav.css";
import "../styles/midPart.css";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
          `}
        </style>
      </Helmet>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;