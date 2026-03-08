import "./App.css";

import Card from "./components/RatingCard/RatingCard";

const ratingData = {
  totalReviews: 1142,
  breakdown: [
    { starValue: 1, count: 67 },
    { starValue: 2, count: 67 },
    { starValue: 3, count: 67 },
    { starValue: 4, count: 67 },
    { starValue: 5, count: 67 },
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
