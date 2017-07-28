import React from "react";
import { shallow } from "enzyme";
import GuessList from "./guess-list";

describe("<GuessList />", () => {
  it("Renders without crashing", () => {
    const guesses=['1','2','3']
    shallow(<GuessList guesses={guesses}/>);
  });
});