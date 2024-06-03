import PropTypes from "prop-types";
import { Container, StyledInput, Label, Title } from "./Styles";

export default function FormInput({
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  type,
  icon: Icon,
  color,
  width,
  placeholdercolor,
  ...props
}) {
  return (
    <Container>
      <Title>
        <Label>{inputKey}</Label>
        {Icon && (
          <Icon style={{ width: "2rem", marginTop: "2px", color: "#570b87" }} />
        )}
      </Title>
      <StyledInput
        id={inputKey}
        inputKey={inputKey}
        type={type}
        autoComplete="off"
        {...(register && { ...register(inputKey) })}
        placeholder={placeholder}
        defaultValue={defaultValue}
        error={error}
        color={color}
        placeholdercolor={placeholdercolor}
        width={width}
        {...props}
      />
    </Container>
  );
}
FormInput.defaultProps = {
  width: "70%",
};
FormInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func,
  error: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
  placeholdercolor: PropTypes.string,
};
