import PropTypes from "prop-types";
import { Container, StyledInput, Label, Title, Map } from "./Styles";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function AddressInput({
  inputKey,
  control,
  setValue,
  placeholder,
  error,
  register,
  defaultValue,
  type,
  label,
  icon: Icon,
  color,
  width,
  placeholdercolor,
  ...props
}) {
  const [address, setAddress] = useState("Brasil");

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
        defaultValue={"Brasil"}
        render={() => (
          <StyledInput
            placeholder={placeholder}
            onChange={(e) => {
              setAddress(e.target.value);
              setValue("endereco", e.target.value);
            }}
            error={error}
          />
        )}
      />
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
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func,
  error: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
  placeholdercolor: PropTypes.string,
  label: PropTypes.string,
};

//   id={inputKey}
// inputKey={inputKey}
// type={type}
// autoComplete="off"
// {...(register && { ...register(inputKey) })}
// placeholder={placeholder}
// defaultValue={defaultValue}
// error={error}
// color={color}
// placeholdercolor={placeholdercolor}
// width={width}
// {...props}
