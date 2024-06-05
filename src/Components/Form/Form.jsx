import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form as FormContainer, ErrorMessage, InputKeep } from "./Styles";
import { LoadingOutlined } from "@ant-design/icons";
import FormInput from "../FormInput";
import Botao from "../../Styles/Botao/Botao";
import FormSelect from "../Select/FormSelect";
import FormDatePicker from "../FormDatePicker";

export default function FormSubmit({
  inputs,
  onSubmit,
  schema,
  color,
  loading,
  requestError,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // const [selectedOptions, setSelectedOptions] = useState(
  //   selectedOptionsInitial
  // );

  // const handleSelectChange = (key, value) => {
  //   setSelectedOptions((prevSelectedOptions) => ({
  //     ...prevSelectedOptions,
  //     [key]: value,
  //   }));
  // };
  // const [selectError, setSelectError] = useState(false);

  function submitHandler(data) {
    // if (
    //   Object.keys(selectedOptions).length === 0 ||
    //   selectedOptions.id_categoryType.length === 0
    // ) {
    //   setSelectError(true);
    //   return;
    // }

    onSubmit(data); //, selectedOptions);
    // setSelectedOptions({});

    reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitHandler)}>
      {inputs.map((input) => {
        if (input.type === "text" || input.type === "password") {
          return (
            <InputKeep key={input.key}>
              <FormInput
                inputKey={input.key}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                icon={input.icon}
                error={errors[input.key] ? true : false || requestError}
                defaultValue={input.value}
                register={register}
                color={color}
              />
              {errors[input.key]?.message && (
                <ErrorMessage>{errors[input.key]?.message}</ErrorMessage>
              )}
              {requestError && <ErrorMessage>Campos inválidos</ErrorMessage>}
            </InputKeep>
          );
        } else if (input.type === "select") {
          return (
            <InputKeep key={input.key}>
              <FormSelect
                inputKey={input.key}
                type={input.type}
                label={input.label}
                error={errors[input.key] ? true : false || requestError}
                register={register}
                options={input.options}
              />
              {errors[input.key]?.message && (
                <ErrorMessage>{errors[input.key]?.message}</ErrorMessage>
              )}
              {requestError && <ErrorMessage>Campos inválidos</ErrorMessage>}
            </InputKeep>
          );
        } else if (input.type === "date") {
          return (
            <InputKeep key={input.key}>
              <FormDatePicker
                inputKey={input.key}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                icon={input.icon}
                error={errors[input.key] ? true : false || requestError}
                defaultValue={input.value}
                register={register}
                color={color}
                control={control}
                setValue={setValue}
              />
            </InputKeep>
          );
        }
        return null;
      })}
      <Botao type="submit" fontSize="1.2em" width="150px !important">
        {loading ? <LoadingOutlined /> : "Enviar"}
      </Botao>
    </FormContainer>
  );
}

FormSubmit.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  color: PropTypes.string,
  loading: PropTypes.bool,
  selectedOptionsInitial: PropTypes.object,
  requestError: PropTypes.bool,
};
