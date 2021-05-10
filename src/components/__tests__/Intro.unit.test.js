import { render } from "@testing-library/react";
import { Intro } from "src/components";
import { mockedItems } from "src/testUtils.js";

describe("<Intro />", () => {
  it("tests rendered elements", () => {
    const props = { items: mockedItems, language: "pt" };
    const { queryByText, getAllByRole } = render(<Intro {...props} />);
    expect(getAllByRole("button")).toHaveLength(2);
    expect(queryByText(/começar/i)).toBeInTheDocument();
  });
});
