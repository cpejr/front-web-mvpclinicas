import PropTypes from "prop-types";
import { Container, Label, Title, StyledDatePicker } from "./Styles";
import { Controller } from "react-hook-form";
import { useState } from "react";
import { registerLocale } from "react-datepicker";
//import DatePicker from "react-datepicker";
import { ptBR } from "date-fns/locale/pt-BR";
//import "react-datepicker/dist/react-datepicker.css";

export default function FormDatePicker({
  inputKey,
  label,
  icon: Icon,
  control,
  setValue,
  error,
  placeholder,
}) {
  const [date, setDate] = useState(new Date());

  const handleChange = (dateChange) => {
    setValue("data_nascimento", dateChange.toLocaleDateString("pt-BR"), {
      shouldDirty: true,
    });
    console.log(typeof dateChange.toString());
    setDate(dateChange);
  };
  registerLocale("ptBR", ptBR);
  return (
    <Container>
      <Title>
        <Label>{label}</Label>
        {Icon && (
          <Icon style={{ width: "2rem", marginTop: "2px", color: "#570b87" }} />
        )}
      </Title>
      <Controller
        name={inputKey}
        control={control}
        defaultValue={date}
        render={() => (
          <StyledDatePicker
            error={error}
            selected={date}
            locale="ptBR"
            placeholderText={placeholder}
            onChange={handleChange}
            dateFormat="dd/MM/yyyy"
          />
        )}
      />
    </Container>
  );
}
FormDatePicker.defaultProps = {
  width: "70%",
};
FormDatePicker.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  control: PropTypes.func,
  setValue: PropTypes.func,
};
