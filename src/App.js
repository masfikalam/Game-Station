import Admin from "./components/Admin";
import Community from "./components/Community";
import Container from "./components/Container";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />

      <Container>
        <Hero />
        <Community />
        <Admin />
        <Faqs />
      </Container>
    </>
  );
}

export default App;
