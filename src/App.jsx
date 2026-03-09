import RatingCard from "./components/RatingCard/RatingCard";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #f0f0f0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
`;

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
      <GlobalStyle />
      <main>
        <RatingCard {...ratingData} />
      </main>
    </>
  );
}

export default App;
