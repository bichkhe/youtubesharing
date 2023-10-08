import { fireEvent, render, screen, userEvent, waitFor } from "@test-utils";
import { AuthPage } from "./Auth.page";
import { BrowserRouter } from "react-router-dom";

const mockUsedNavigate = jest.fn();

describe("AuthPage page", () => {
  it("should show Login buttion  when mode default", () => {
    jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom") as any),
      useNavigate: () => mockUsedNavigate,
      useLocation: () => ({
        state: { mode: "login" },
      }),
    }));
    render(<AuthPage />);
    const loginBtn = screen.getByTestId("submit-btn-testid");
    expect(loginBtn.textContent).toBe("Login");
  });
});

describe("AuthPage page: Show Register button", () => {
  it("should show Register buttion  when the mode is changed", () => {
    jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom") as any),
      useNavigate: () => mockUsedNavigate,
      useLocation: () => ({
        state: { mode: "login" },
      }),
    }));
    render(<AuthPage />);

    const changeModeTextEl = screen.getByTestId("change-mode-testid");
    fireEvent.click(changeModeTextEl);
    const registerBtn = screen.getByTestId("submit-btn-testid");
    expect(registerBtn.textContent).toBe("Register");
  });
});

describe("AuthPage page: Show Register button", () => {
  it("should show Register buttion  when the mode is register", () => {
    jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom") as any),
      useNavigate: () => mockUsedNavigate,
      useLocation: () => ({
        pathname: "/auth",
        state: { mode: "register" },
      }),
    }));
    render(<AuthPage />);

    const changeModeTextEl = screen.getByTestId("change-mode-testid");
    fireEvent.click(changeModeTextEl);
    const registerBtn = screen.getByTestId("submit-btn-testid");
    expect(registerBtn.textContent).toBe("Register");
  });
});

describe("AuthPage page: Not show name field", () => {
  it("should not show name field in login page", () => {
    jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom") as any),
      useNavigate: () => mockUsedNavigate,
      useLocation: () => ({
        pathname: "/auth",
        state: { mode: "login" },
      }),
    }));
    render(<AuthPage />);

    const nameFieldEl = screen.queryByText("Name");
    expect(nameFieldEl).toBeNull();
  });
});

describe("AuthPage page: Register validation", () => {
  it("should register failed: email invalid", async () => {
    jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom") as any),
      useNavigate: () => mockUsedNavigate,
      useLocation: () => ({
        pathname: "/auth",
        state: { mode: "register" },
      }),
    }));
    render(<AuthPage />);
    const onSubmit = jest.fn();

    const emailFieldEl = await screen.getByTestId("email-field-testid");
    userEvent.type(emailFieldEl, "mr.bichkhexxxxxx");
    userEvent.click(screen.getByTestId("submit-btn-testid"));

    await waitFor(() => {
      // expect(onSubmit).toHaveBeenCalledTimes(1)
      // expect(emailFieldEl).toBeNull()
      const emailErrMessageEl = screen.queryByText("Invalid email1x2");
      expect(emailErrMessageEl).toBeInTheDocument();
    });
  });
});
