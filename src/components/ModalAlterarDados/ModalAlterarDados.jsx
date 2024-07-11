import PropTypes from "prop-types";
import { Modal } from "antd";

import { ConteudoModal } from "./Styles";
import { toast } from "react-toastify";
import { useUpdateDadosPerfil } from "../../hooks/user";
import AddToast from "../../components/AddToast/AddToast";

import { useQueryClient } from "@tanstack/react-query";
import Form from "../../Components/Form";
function ModalAlterarDados(props) {
  const queryClient = useQueryClient();
  const inputs = [
    {
      type: "text",
      key: "nome",
      value: props?.usuario?.nome,
      label: "Nome Completo",
    },
    {
      type: "text",
      key: "telefone",
      value: props?.usuario?.telefone,
      label: "Telefone",
    },
    {
      type: "date",
      key: "data_nascimento",
      defaultValue: props?.usuario?.data_nascimento,
      label: "Data de nascimento",
    },
    {
      type: "text",
      key: "email",
      value: props?.usuario?.email,
      label: "E-mail",
    },
    {
      type: "text",
      key: "registro",
      value: props?.usuario?.registro,
      label: "Registro (CRM para médicos ou matrícula para estudantes)",
    },
    {
      type: "select",
      key: "formacao",
      value: props?.usuario?.formacao,
      label: "Formacao",
      options: [
        {
          value: "medico",
          name: "Médico",
        },
        { value: "estudante", name: "Estudante" },
      ],
    },
    {
      type: "text",
      key: "uni_federativa",
      value: props?.usuario?.uni_federativa,
      label: "Unidade federativa",
    },
  ];

  const {
    mutate: updatePerfil,
    isPending,
    error,
  } = useUpdateDadosPerfil({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memorial"],
      });
      toast.success("post atualizado com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao atualizar o post.", err);
    },
  });
  function handlePerfilUpdate(data) {
    updatePerfil({ _id: props.usuario._id, respostas: data });
    cancelar();
  }
  const cancelar = () => {
    props.onClose();
  };

  return (
    <Modal
      open={props.open}
      onCancel={cancelar}
      footer={null}
      confirmLoading={isPending}
      centered
      destroyOnClose
    >
      <ConteudoModal>
        {/* <Form
          inputs={inputs}
          onSubmit={handlePerfilUpdate}
          schema={updateSchema}
          loading={isPending}
          requestError={error}
          selectedOptionsInitial={{}}
        /> */}
        <AddToast />
      </ConteudoModal>
    </Modal>
  );
}

ModalAlterarDados.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  usuario: PropTypes.func.isRequired,
};

export default ModalAlterarDados;
