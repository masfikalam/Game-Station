import { useRef } from "react";
import Admin from "./components/Admin";
import Community from "./components/Community";
import Container from "./components/Container";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Groups from "./components/Groups";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { faqlist, grouplist, testList } from "./database";

function App() {
  const groupRef = useRef(null);

  return (
    <>
      <Header />

      <Container groups={grouplist} groupRef={groupRef}>
        <Hero />
        <Community />
        <Groups grouplist={grouplist} groupRef={groupRef} />
        <Admin />
        <Testimonials testList={testList} />
        <Faqs faqlist={faqlist} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
