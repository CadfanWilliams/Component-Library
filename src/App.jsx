import "./App.css";

import Card from "./components/RatingCard/RatingCard";

const ratingData = {
  breakdown: [
    { starValue: 1, count: 100 },
    { starValue: 2, count: 67 },
    { starValue: 3, count: 213 },
    { starValue: 4, count: 213 },
    { starValue: 5, count: 1142 },
  ],
};

function App() {
  return (
    <>
      <Card {...ratingData} />
    </>
  );
}

export default App;
