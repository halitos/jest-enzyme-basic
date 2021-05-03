import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Ticket from "./Ticket";
import Footer from "./Footer";

it("should render Ticket and Footer", () => {
  const wrapper = shallow(<App />);
  const ticket = wrapper.find(Ticket);
  const footer = wrapper.find(Footer);
  expect(footer.exists()).toBe(true);
  expect(ticket.exists()).toBe(true);
});
