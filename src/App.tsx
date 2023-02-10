import { FormContextProvider } from "./context/FormContext";
import CardForm from "./pages/CardForm";

/**
 * TODO
 * VALIDAR FORM
 * AGREGAR ESTADOS DE ERROR
 * RESTRINGIR CARACTERES DE NUMEROS / LETRAS RESPECTIVAMENTE
 */
function App() {
  return (
    <FormContextProvider>
      <CardForm />
    </FormContextProvider>
  );
}

export default App;
