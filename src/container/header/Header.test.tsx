import { fireEvent, render, screen } from "@test-utils";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { mockLocalStorage } from "@test-utils";

const { getItemMock, setItemMock } = mockLocalStorage();

jest.mock("react-router-dom", () => {
  const nav = jest.fn();
  return {
    ...jest.requireActual("react-router-dom"),
    mockedNavigation: nav,
    useLocation: jest.fn(() => ({ pathname: "/example" })),
    useNavigate: jest.fn(() => nav),
  };
});

const Router = require("react-router-dom");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("Logo component", () => {
  it("should redirect to login page when clicking login buttion", async () => {
    const AUTH_TOKEN = "youtubesharing.auth_token";
    setItemMock(AUTH_TOKEN, "token");
    render(
      <BrowserRouter>
        <Header
          opened={false}
          toggle={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </BrowserRouter>
    );
    const LogoutBtn = await screen.findByText("Logout");
    console.log("loginBtn:", LogoutBtn);
    fireEvent.click(LogoutBtn);
    expect(Router.mockedNavigation).toHaveBeenCalledWith("/auth", {
      state: { mode: "/login" },
    });
  });
});
