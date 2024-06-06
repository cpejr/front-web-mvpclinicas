import {
  CaixaBotoes,
  CaixaInputs,
  ConteudoModal,
  SubTitulo,
  Titulo,
} from "./Styles";

import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Spin } from "antd";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
import { toast } from "react-toastify";
import useAuthStore from "../../stores/auth";
import { useDeleteUsers } from "../../hooks/user";
import Botao from "../../Styles/Botao";
import AddToast from "../../components/AddToast/AddToast";

function ModalAlterarDados(props) {
  const logout = useAuthStore((state) => state.logout);
  const { mutate: deletePerfil, isPending } = useDeleteUsers({
    onSuccess: () => {
      toast.success("Usuario excluido!");
      logout();
    },
    onError: (err) => {
      toast.error("Erro ao excluir usuario .", err);
    },
  });
  const handleDelete = () => {
    deletePerfil(props.usuario._id);
  };
  function cancelar() {
    props.onClose();
  }

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
        <AddToast />
        <CaixaInputs>
          <Titulo>Você tem certeza que deseja excluir sua conta?</Titulo>
          <SubTitulo>
            Todos os comentários feitos por você serão excluídos juntos, o que
            ocasionará uma perda de conhecimento para diversos outros
            profissionais como você.
          </SubTitulo>
        </CaixaInputs>
        <CaixaBotoes>
          <Botao
            color="#ffffff"
            backgroundColor="#ff0000c5"
            borderColor="#ff0000"
            width="30%"
            onClick={cancelar}
          >
            Cancelar
          </Botao>
          <Botao onClick={handleDelete} disabled={isPending}>
            {isPending ? <Spin indicator={antIcon} /> : "Confirmar"}
          </Botao>
        </CaixaBotoes>
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
