import React from "react";
import { shallow } from "enzyme";
import App from './App';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
})

it("should render without crashing", () => {
  expect(wrapper).to.exist;
})