import Gallery from "./page/Gallery";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
const Container = styled.div`
  padding: 2rem;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Unsplash Image Search App</h1>
      </Header>
      <Gallery />
    </Container>
  );
};

export default App;
