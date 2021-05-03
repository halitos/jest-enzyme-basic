import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer tests all", () => {
  it("should render telephone number", () => {
    const wrapper = shallow(<Footer />);
    const p = wrapper.find("p");
    const result = p.text();

    expect(result).toBe("Tel. 0123 456 789");

    // const res = shallow(<Footer />)
    //   .find("p")
    //   .text();
    // expect(res).toBe("Tel. 0123 456 789");
  });
});
