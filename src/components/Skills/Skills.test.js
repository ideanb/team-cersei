import React from "react";
import { shallow } from "enzyme";
import Skills from './Skills';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Skills />);
})

it("should render without crashing", () => {
  expect(wrapper).to.exist;
})