import React from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/app.scss";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./../store";
import { useDispatch } from "react-redux";
import { checkAuth, loginFromEmail } from "store/actions/user";
import { useRouter } from "next/router";

const AppWrapper = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

const App = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  React.useEffect(() => {
    if (router.query && router.query.email && router.query.password) {
      const user = {
        email: router.query.email.toString(),
        password: router.query.password.toString(),
      };

      dispatch(loginFromEmail(user.email, user.password));
      router.push("/");
    }
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, [dispatch, router]);
  return (
    <>
      <Head>
        <title>ARTEM'S art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <ToastContainer />
    </>
  );
};

export default AppWrapper;
