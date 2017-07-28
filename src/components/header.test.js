import React from "react";
import { shallow, mount} from "enzyme";
import Header from "./header";
import TopNav from "./top-nav";
import InfoModal from "./info-modal";

describe("<Header />", () => {
  it("Renders without crashing", () => {
    shallow(<Header />);
  });

  // it.only('Should render onNewGame prop when passed', () => {
  //   const callback = 'hello';
  //   const wrapper = shallow(<Header onNewGame={callback}/>)
  //     expect(wrapper.contains(
  //     <header>
  //       <TopNav
  //         onInfo={() => this.toggleInfoModal()}
  //         onNewGame={callback}
  //       />
  //       {infoModal}
  //       <h1>HOT or COLD</h1>
  //     </header>)).toEqual(true)
  // })
  
});

// Header props: onNewGame