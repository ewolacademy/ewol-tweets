import React from "react";
import ContentLoader from "react-content-loader";

const ITEM_HEIGHT = 130;
const ITEM_MARGIN = 20;

const ProblemCardLoader = () => (
  <ContentLoader
    height={900}
    width="100%"
    speed={3}
    viewBox="0 0 600 900"
    backgroundColor="#f2f2f2"
    foregroundColor="#eee"
  >
    {new Array(5).fill(null).map((_, index) => (
      <rect
        key={`key-${index}`}
        x="0"
        y={index * (ITEM_HEIGHT + ITEM_MARGIN)}
        rx="25"
        ry="25"
        width="600"
        height={ITEM_HEIGHT}
      />
    ))}
  </ContentLoader>
);

export default ProblemCardLoader;
