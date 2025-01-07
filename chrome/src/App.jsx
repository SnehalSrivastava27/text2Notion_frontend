import { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Usage } from "./components/Usage";

export default function App() {
  return (
  <Fragment>
    <Navbar></Navbar>
    <Hero></Hero>
    <Usage></Usage>
  </Fragment>
  )
}