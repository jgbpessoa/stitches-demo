import Button from "./components/Button";
import { css, globalCss } from "@stitches/react";

const title = css({
  fontFamily: "sans-serif",
  marginBottom: "1rem",
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

const globalStyles = globalCss({
  body: {
    background: "AntiqueWhite",
    margin: "2rem 1rem",
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});

function App() {
  globalStyles();
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
