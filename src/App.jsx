import "./App.css";

import Card from "./components/RatingCard/RatingCard";

const ratingData = {
  rating: 4.6,
  totalReviews: 1142,
  breakdown: [
    { starValue: 1, count: 40 },
    { starValue: 2, count: 4 },
    { starValue: 3, count: 55 },
    { starValue: 4, count: 111 },
    { starValue: 5, count: 952 },
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
