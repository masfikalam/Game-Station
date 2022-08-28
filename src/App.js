import Admin from "./components/Admin";
import Community from "./components/Community";
import Container from "./components/Container";
import Faqs from "./components/Faqs";
import Groups from "./components/Groups";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { grouplist } from "./database";

function App() {
  return (
    <>
      <Header />

      <Container groups={grouplist}>
        <Hero />
        <Community />
        <Groups grouplist={grouplist} />
        <Admin />
        <Testimonials />
        <Faqs />
      </Container>
    </>
  );
}

export default App;
