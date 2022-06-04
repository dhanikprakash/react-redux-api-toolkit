import React from "react";
import { useSelector } from "react-redux";

import { MusicSection } from "./MusicSection";
import { musicResults } from "./MusicSelector";

export const Music: React.FC = () => {
  const results = useSelector(musicResults);
  return (
    <MusicSection
      searchResults={results.searchResults}
      status={results.status}
    />
  );
};
