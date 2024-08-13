import PropTypes from "prop-types";
import { Container, StyledInput, Label, Title, Map, ErrorMessage } from "./Styles";
import { useState } from "react";

export default function AddressInput({
  inputKey,
  placeholder,
  error,
  label,
  icon: Icon,
  type,
  register,
}) {
  const [address, setAddress] = useState("Brasil");
  return (
    <Container>
      <Title>
        <Label>{label}</Label>
        {Icon && <Icon style={{ width: "2rem", marginTop: "2px", color: "#570b87" }} />}
      </Title>
      <StyledInput
        id={inputKey}
        inputKey={inputKey}
        type={type}
        autoComplete="off"
        {...(register && { ...register(inputKey) })}
        placeholder={placeholder}
        error={error}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      {error && <ErrorMessage>O campo deve ser preenchido</ErrorMessage>}

      <Map
        id="mapIframe"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBUwXbN66GC9i-ZGfQmEY8n_QXGytWBe6I&q=${
          address ? address : "Brasil"
        }`}
      />
    </Container>
  );
}
AddressInput.defaultProps = {
  width: "70%",
};
AddressInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.any,
  label: PropTypes.string,
  icon: PropTypes.elementType,

  register: PropTypes.func,
  width: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  placeholdercolor: PropTypes.string,
};
