import PropTypes from "prop-types";
import { Container, Label, Title, StyledDatePicker } from "./Styles";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale/pt-BR";

export default function FormDatePicker({
  inputKey,
  label,
  icon: Icon,
  control,
  setValue,
  error,
  placeholder,
  isSubmitSuccessful,
  defaultValue,
}) {
  registerLocale("ptBR", ptBR);
  const [date, setDate] = useState(defaultValue || null);

  const handleChange = (dateChange) => {
    setValue("data_nascimento", dateChange.toLocaleDateString("pt-BR"), {
      shouldDirty: true,
    });

    setDate(dateChange);
  };
  useEffect(() => {
    if (isSubmitSuccessful) setDate(null);
  }, [isSubmitSuccessful]);

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
  error: PropTypes.bool,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  control: PropTypes.func,
  setValue: PropTypes.func,
  isSubmitSuccessful: PropTypes.bool,
  defaultValue: PropTypes.date,
};
