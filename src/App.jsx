import "./App.css";
import Card from "./components/RatingCard/RatingCard";

function App() {
  return (
    <>
      <Card
        title="EXCELLENT"
        rating={4.6}
        description="This is a simple card component."
      />
    </>
  );
}

export default App;
