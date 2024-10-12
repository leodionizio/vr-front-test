import { render, screen } from '@testing-library/react';
import { Footer } from "../";

describe("Footer component", () => {
  it("renders the VR Benefícios logo", () => {
    render(<Footer />);

    const logo = screen.getByAltText("VR Benefícios Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the copyright text", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/todos os direitos reservados/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
