import styled from "styled-components";

const CardContainer = styled.section`
  font-family: "Poppins", sans-serif;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  padding: 28px 24px 24px;
  width: 100%;
  max-width: 340px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    padding: 20px 16px 18px;
    border-radius: 12px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const RatingLabel = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #222;
  margin: 0 0 12px;
`;

const ScoreText = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 10px 0 4px;
  font-weight: 500;
`;

const FeefoLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 0.8rem;
  color: #888;
  font-weight: 500;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid #f5a623;
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
`;

const FeefoText = styled.span`
  font-style: italic;
  font-weight: 700;
  font-size: 1rem;
  color: #222;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ebebeb;
  margin: 16px 0;
`;

export {
  CardContainer,
  Header,
  RatingLabel,
  ScoreText,
  FeefoLogo,
  FeefoText,
  Divider,
};
