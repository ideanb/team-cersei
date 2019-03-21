import React from "react";
import { shallow } from "enzyme";
import SkillItem from './SkillItem';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<SkillItem />);
})

it("should render without crashing", () => {
  expect(wrapper).to.exist;
})