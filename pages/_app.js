import { Provider } from "react-redux";
import { store } from "../app/store";
import Router from "next/router";
import "../styles/globals.css";
//progressBar lib
import ProgressBar from "@badrap/bar-of-progress";
// custom css
import "../styles/custom.css";

const progress = new ProgressBar({
  size: 4,
  color: "#FD3D57",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
