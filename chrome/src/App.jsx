import { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Usage } from "./components/Usage";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
  <Fragment>
    <Navbar></Navbar>
    <Hero></Hero>
    <Usage></Usage>
    <Footer></Footer>
  </Fragment>
  </BrowserRouter>
  )
}