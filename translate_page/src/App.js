import "./styles.css";
import React from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
  return (
    <div>
      <Field />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}
