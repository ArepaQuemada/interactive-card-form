import { FormContextProvider } from "./context/FormContext";
import CardForm from "./pages/CardForm";

function App() {
  return (
    <FormContextProvider>
      <CardForm />
    </FormContextProvider>
  );
}

export default App;
