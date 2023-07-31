import { useState } from "react";
import Botao from "../../Styles/Botao/Botao";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Spin, Upload } from "antd";
import * as managerService from "../../services/ManagerService/managerService";
import { Cores } from "../../utils/variaveis";
import {
  ContainerModalExcluir,
  ContainerFooterModalExcluir,
  CaixaLoader,
  CaixaBotaoUpload,
  Titulo,
} from "./Styles";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
function ModalAlterarFotoDePerfil(props) {
  const [carregandoDeletar, setCarregandoDeletar] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [imagemUrl, setImagemUrl] = useState();
  const antIconModal = (
    <LoadingOutlined style={{ fontSize: 15, color: Cores.azul }} spin />
  );

  function pegarBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const uploadButton = (
    <div>
      {carregando ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  function antesDoUpload(file) {
    const eJpgOuPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!eJpgOuPng) {
      toast.error("Você só pode fazer o upload de JPGS ou PNGS!");
      setCarregando(true);
    }

    const eMenorQue2M = file.size / 1024 / 1024 < 2;

    if (!eMenorQue2M) {
      toast.error("A imagem precisa ser menor que 2MB!");
      setCarregando(true);
    }

    return eJpgOuPng && eMenorQue2M;
  }

  async function aposMudanca(info) {
    setCarregando(true);
    pegarBase64(info.file.originFileObj, (url) => {
      setCarregando(false);
      setImagemUrl(url);
    });
  }
  async function updateFoto() {
    if (imagemUrl) {
      setCarregandoDeletar(true);
      await managerService.UpdateFotoDePerfil(props.idUsuario, imagemUrl);
      toast.success("Imagem atualizada com sucesso");
      props.fecharModal();
      setImagemUrl(null);
      setCarregandoDeletar(false);

    } else {
      toast.error("Selecione uma imagem para enviar!");
    }
  }

  return (
    <div>
      <ContainerModalExcluir>
        <Titulo>Selecione uma imagem para personalizar seu perfil:</Titulo>
        <CaixaBotaoUpload>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            antesDoUpload={antesDoUpload}
            onChange={aposMudanca}
          >
            {imagemUrl ? (
              <img
                src={imagemUrl}
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </CaixaBotaoUpload>

        <ContainerFooterModalExcluir>
          <Botao
            color="white"
            fontWeight="bold"
            borderColor={Cores.vermelhoIntermediario}
            backgroundColor={Cores.vermelhoIntermediario}
            height="28px"
            width="6rem"
            widthMedia670="50%"
            fontSize="13px"
            onClick={props.fecharModal}
          >
            Cancelar
          </Botao>

          <Botao
            backgroundColor={Cores.lilas[5]}
            color="white"
            borderColor={Cores.lilas[5]}
            fontWeight="bold"
            height="28px"
            width="6rem"
            widthMedia670="50%"
            fontSize="13px"
            onClick={() => {
              updateFoto();
            }}
          >
            {carregandoDeletar ? (
              <CaixaLoader>
                <Spin indicator={antIconModal} />
              </CaixaLoader>
            ) : (
              "Confirmar"
            )}
          </Botao>
        </ContainerFooterModalExcluir>
      </ContainerModalExcluir>
    </div>
  );
}

ModalAlterarFotoDePerfil.propTypes = {
  fecharModal: PropTypes.func,
  idUsuario: PropTypes.string,
};
export default ModalAlterarFotoDePerfil;
