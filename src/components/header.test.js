import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./header";
import TopNav from "./top-nav";
import InfoModal from "./info-modal";

describe("<Header />", () => {
  it("Renders without crashing", () => {
    shallow(<Header />);
  });

  it("Hides the info modal initially", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("InfoModal").exists()).toEqual(false);
  });

  it("Should render the info modal when toggled", () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal(true);
    expect(wrapper.find("InfoModal").exists()).toEqual(true);
  });
});

