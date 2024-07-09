import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Testimonials } from "./components/Testimonials/index.jsx";
import { Services } from "./components/Services/index.jsx";
import { Team } from "./components/Team";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <div className="min-h-[100vh]">
      <TopNav />
      <Services />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
