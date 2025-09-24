import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/layout/Layout";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Services from "./components/section/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
    </Layout>
  );
}

export default App;
