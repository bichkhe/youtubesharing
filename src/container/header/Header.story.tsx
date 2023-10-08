import { Header } from "./Header";

export default {
  title: "Header",
};

export const Usage = () => (
  <Header
    opened={false}
    toggle={function (): void {
      throw new Error("Function not implemented.");
    }}
  />
);
