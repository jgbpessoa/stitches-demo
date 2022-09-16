import Button from "./components/Button";
import { css } from "@stitches/react";

const title = css({
  fontFamily: "sans-serif",
  variants: {
    type: {
      primary: {
        textDecoration: "underline",
        color: "black",
      },
      secondary: {
        color: "Gray",
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <h1 className={title({ type: "primary" })}>Introduction to Stitches</h1>
      <h2 className={title({ type: "secondary" })}>
        Let's learn how to work with it
      </h2>
      <Button>Simple Button</Button>
    </div>
  );
}

export default App;
