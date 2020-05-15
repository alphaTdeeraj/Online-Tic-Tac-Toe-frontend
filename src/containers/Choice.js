import React from "react";
import ButtonContainer from "../components/js/button/ButtonContainer";

import { useHistory } from "react-router-dom";

const Choice = () => {
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <ButtonContainer
      hostGameHandler={() => redirectTo("/game")}
      createGameHandler={() => redirectTo("/join")}
    />
  );
};

export default Choice;
