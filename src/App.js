import Admin from "./components/Admin";
import Community from "./components/Community";
import Container from "./components/Container";
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
      </Container>
    </>
  );
}

export default App;
