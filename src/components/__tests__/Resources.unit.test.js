import { render } from "@testing-library/react";
import { Resources } from "src/components";
import { mockedItems } from "src/testUtils.js";

describe("<Resources />", () => {
  it("tests rendered elements", () => {
    const props = { items: mockedItems, language: "pt" };
    const { getAllByTestId, getByText } = render(<Resources {...props} />);
    expect(getByText("Trilhas")).toBeInTheDocument();
    expect(getAllByTestId("resources")).toHaveLength(3);
  });
});
