import { render } from "@testing-library/react";
import { Layout } from "src/components";

describe("<Layout />", () => {
  it("tests rendered elements", () => {
    const { getAllByTestId, getByAltText } = render(<Layout />);
    expect(getByAltText("Logo Ensinio")).toBeInTheDocument();
    expect(getAllByTestId("languagesHover")).toHaveLength(3);
  });
});
