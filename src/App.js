import Admin from "./components/Admin";
import Community from "./components/Community";
import Container from "./components/Container";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />

      <Container>
        <Hero />
        <Community />
        <Admin />
        <Testimonials />
        <Faqs />
      </Container>
    </>
  );
}

export default App;
