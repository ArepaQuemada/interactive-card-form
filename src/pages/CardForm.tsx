import Card from "../components/card/Card";
import CardUI from "../components/ui/card-ui/CardUI";
import FormUI from "../components/ui/form-ui/FormUI";
import CardFront from "../components/card-front/CardFront";
import CardBack from "../components/card-back/CardBack";

const CardForm = () => (
  <>
    <CardUI>
      <CardFront />
      <CardBack />
    </CardUI>
    <FormUI>Form</FormUI>
  </>
);

export default CardForm;
