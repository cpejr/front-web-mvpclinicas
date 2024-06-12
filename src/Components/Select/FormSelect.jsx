import PropTypes from "prop-types";
import { Container, Label, Title, StyledSelect } from "./Styles";
import { useEffect, useState } from "react";

export default function FormSelect({
  inputKey,
  error,
  register,
  type,
  label,
  icon: Icon,
  options,
  isSubmitSuccessful,
}) {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (isSubmitSuccessful) setSelectedValue("");
  }, [isSubmitSuccessful]);

  return (
    <Container>
      <Title>
        <Label>{label}</Label>
        {Icon && (
          <Icon style={{ width: "2rem", marginTop: "2px", color: "#570b87" }} />
        )}
      </Title>
      <StyledSelect
        inputKey={inputKey}
        type={type}
        label={label}
        error={error}
        value={selectedValue}
        {...(register && { ...register(inputKey) })}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="" disabled selected>
          Selecione sua formação
        </option>
        {options?.map((option) => (
          <option key={option.key}>{option.name}</option>
        ))}
      </StyledSelect>
    </Container>
  );
}
FormSelect.defaultProps = {
  width: "70%",
};
FormSelect.propTypes = {
  inputKey: PropTypes.string.isRequired,
  isSubmitSuccessful: PropTypes.bool,
  register: PropTypes.func,
  error: PropTypes.bool.isRequired,
  type: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  options: PropTypes.array,
};
