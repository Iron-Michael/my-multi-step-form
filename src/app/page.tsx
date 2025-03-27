"use client"
import { Provider } from "react-redux";
import BarProgress from "./components/BarProgress";
import Button from "./components/ButtonNext";
import InputSpace from "./components/InputSpace";
import NextSection from "./components/NextSection";
import BackgroundMain from "./components/ฺBackgroundMain";
import styles from "./page.module.css";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <>
      <BackgroundMain>
        <BarProgress/>
        <InputSpace/>   
      </BackgroundMain> 
      <NextSection/>
      </>
    </Provider>
  );
}
