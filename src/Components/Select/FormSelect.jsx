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
  placeholder,
  defaultValue,
  setSelectType,
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

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
        onChange={(e) => {
          setSelectedValue(e.target.value);
          setSelectType && inputKey === "tipo" && setSelectType(e.target.value);
        }}
      >
        <option value="" disabled defaultValue={""}>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.name}>{option.name}</option>
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
  error: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  setSelectType: PropTypes.func,
};
