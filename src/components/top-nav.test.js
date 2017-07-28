import React from "react";
import { shallow, mount } from "enzyme";
import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("Renders without crashing", () => {
    //check props onInfo and onNewGame
    shallow(<TopNav />);
  });
  
  it('Should activate callback when clicked', () => {
    const callback = jest.fn()
    const wrapper = mount(<TopNav onInfo={callback} />)
      wrapper.find('.what').simulate('click', { preventDefault() {} });
      expect(callback).toHaveBeenCalled();
  });

});
