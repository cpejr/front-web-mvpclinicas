import PropTypes from "prop-types";
import { Container, StyledInput, Label, Title } from "./Styles";
import { Controller } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    setValue("dateOfBirth", dateChange, {
      shouldDirty: true,
    });
    setDate(dateChange);
  };
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
          <DatePicker
            error={error}
            selected={date}
            placeholderText={placeholder}
            onChange={handleChange}
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
