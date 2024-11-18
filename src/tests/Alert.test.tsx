import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "../components/Alert"; // Adjust path as needed

describe("Alert Component", () => {
  it("renders with a title and content", () => {
    render(
      <Alert type="success" title="Success" duration={3000}>
        This is a success alert!
      </Alert>
    );

    // Check if the title and content are rendered correctly
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("This is a success alert!")).toBeInTheDocument();
  });


  it("closes when the close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Alert
        type="warning"
        title="Warning"
        closable
        onClose={onClose}
        duration={0}
      >
        This alert will be closed when the button is clicked.
      </Alert>
    );

    // Simulate a click on the close button
    fireEvent.click(screen.getByRole("presentation")); // Close button
    expect(onClose).toHaveBeenCalledTimes(1); // Ensure onClose is called once
  });
});
