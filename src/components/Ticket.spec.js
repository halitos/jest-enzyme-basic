import React from "react";
import { shallow } from "enzyme";
import Ticket from "./Ticket";

describe("increment function and count value tests", () => {
  it("should have the initial value of 0", () => {
    const wrapper = shallow(<Ticket />);
    const count = wrapper.find("h3.test").text();

    expect(count).toBe("0");
  });

  it("should increment the count by one when clicked", () => {
    const wrapper = shallow(<Ticket />);

    const button = wrapper.find("button");
    button.simulate("click");

    const count2 = wrapper.find("h3.test").text();

    expect(count2).toBe("1");
  });
});

it("should render ticket name in title", () => {
  const wrapper = shallow(<Ticket name={"New title"} />);
  const title = wrapper.find("h1");

  expect(title.text()).toBe("New title");
});
