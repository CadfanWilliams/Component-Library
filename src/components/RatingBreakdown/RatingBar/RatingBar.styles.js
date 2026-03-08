import styled from "styled-components";

const BarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const StarLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 0.85rem;
  color: #555;
  width: 16px;
  text-align: right;
  flex-shrink: 0;
`;

const StarIcon = styled.span`
  color: ${({ active }) => (active ? "#f5a623" : "#ccc")};
  font-size: 0.85rem;
  flex-shrink: 0;
  line-height: 1;
`;

const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  background: #e8e8e8;
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 4px;
  background: ${({ starValue }) => {
    if (starValue >= 4) return "#2d9b6e";
    if (starValue === 3) return "#f5a623";
    return "#e05a5a";
  }};
  width: ${({ percentage }) => percentage}%;
  transition: width 0.4s ease;
`;

const Count = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 0.85rem;
  color: #555;
  width: 36px;
  text-align: right;
  flex-shrink: 0;
`;

export { BarRow, StarLabel, StarIcon, BarTrack, BarFill, Count };
