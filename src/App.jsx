import Card from "./components/card/Card.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Card
          title="EXCELLENT"
          rating={4.6}
          description="This is a simple card component."
        />
      </div>
    </>
  );
}

export default App;
