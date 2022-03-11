import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Dog from './components/Dog/Dog'
import Loading from './components/Loading/Loading'
import PageInitial from './components/PageInitial/PageInitial'

configure({ adapter: new Adapter() });

describe("<Dog />", () => {
  let wrapper;
  let name;
  let weight;
  let temperament;
  beforeEach(() => {
    name = "super dog";
    wrapper = mount(<Dog name={name} weight={weight} temperament={temperament} />);
  });

  it('should render a tag "h1" with "name" that get to props', () => {
    expect(wrapper.contains(<h1>{name}</h1>)).toEqual(true);
  });

  it('should render a tag "h2" with "weight" that get to props', () => {
    expect(wrapper.contains(<h2>{weight} kg</h2>)).toEqual(true);
  });

  it('should render a tag "h2" with "temperament" that get to props', () => {
    expect(wrapper.contains(<h2>{temperament}</h2>)).toEqual(true);
  });
});


describe("<Loading />", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Loading />);
    });

    it("Render a <img>", () => {
      expect(wrapper.find("img")).toHaveLength(1);
    });

})


describe("<PageInitial />", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PageInitial />);
    });

    it("Render a <h1>", () => {
      expect(wrapper.find("h1")).toHaveLength(1);
    });

    it("Render a <div> with a phrase", () => {
      expect(wrapper.find("div")).toHaveLength(1);
    });

    it("Render a <button> to join", () => {
      expect(wrapper.find("button")).toHaveLength(1);
    });

    it("Render a <video> from back-ground", () => {
      expect(wrapper.find("video")).toHaveLength(1);
    });

    it('Render a <p> with de Name of person who said the prase', () => {
      expect(wrapper.find("p").at(1).text()).toEqual("-Sirius Black");
    });

})
