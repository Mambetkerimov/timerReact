import React, { FormEvent, useContext, useState } from "react";

import { IFieldProps } from "./types";
import { Context, initialContextValue } from "./context";
import { Modal, ThemeProvider, Timer } from "./components";

function App() {
  const { context, setContext } = useContext(Context);
  const [formFields, setFormFields] = useState<IFieldProps>(
    initialContextValue.formFields
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setContext((prevState) => ({
      ...prevState,
      formFields: {
        ...formFields,
      },
    }));
  };

  return (
    <ThemeProvider loopContext={context.loop}>
      <Modal
        formFields={formFields}
        setFormFields={setFormFields}
        handleSubmit={handleSubmit}
      />
      <Timer formFields={formFields} setLoopContext={setContext} />
    </ThemeProvider>
  );
}

export default App;
