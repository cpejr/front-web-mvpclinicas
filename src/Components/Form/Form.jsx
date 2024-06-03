import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import Button from "../../common/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form as FormContainer,
  ErrorMessage,
  InputKeep,
  Select,
} from "./Styles";
import { LoadingOutlined } from "@ant-design/icons";
import FormInput from "../FormInput";
import Botao from "../../Styles/Botao/Botao";
import { Label } from "../FormInput/Styles";

export default function FormSubmit({
  inputs,
  onSubmit,
  schema,
  color,
  loading,
  requestError,
  // selectedOptionsInitial,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
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
        // if (input.type === "select") {
        //   return (
        //     <>
        //       <Select
        //         key={input.key}
        //         options={input.options}
        //         selectColor={color}
        //         placeholder={input.placeholder}
        //         value={selectedOptions[input.key] || ""}
        //         onChange={(e) => {
        //           handleSelectChange(input.key, e.target.value);
        //         }}
        //       ></Select>

        //       {selectError && (
        //         <ErrorMessage>
        //           pelo menos uma categoria é necessaria
        //         </ErrorMessage>
        //       )}
        //     </>
        //   );
        // } else
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
              <Label>{input.label}</Label>
              <Select
                inputKey={input.key}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                icon={input.icon}
                error={errors[input.key] ? true : false || requestError}
                defaultValue={input.value}
                {...register(input.key)}
                color={color}
              >
                <option value="" disabled selected>
                  Selecione sua formação
                </option>
                {input?.options?.map((option) => (
                  <option key={option.key}>{option.name}</option>
                ))}
              </Select>
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
