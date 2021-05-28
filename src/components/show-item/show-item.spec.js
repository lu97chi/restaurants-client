import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShowItem from "./index";
import { services } from "../showcase/constants";

test("Show Item", () => {
  const { title, subtitle, icon } = services[0];
  render(
    <MemoryRouter>
      <ShowItem title={title} subtitle={subtitle} icon={icon} />
    </MemoryRouter>
  );
  const titleEl = screen.getByText(title);
  const subtitleEl = screen.getByText(subtitle);

  expect(titleEl).toBeInTheDocument();
  expect(subtitleEl).toBeInTheDocument();
});
