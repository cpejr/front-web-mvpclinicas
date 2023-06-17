import React, { useState, useEffect } from 'react';
import Botao from '../../Styles/Botao/Botao';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Spin, Upload } from 'antd';
import AddToast from '../AddToast/AddToast';
import * as managerService from '../../services/ManagerService/managerService';
import { Cores } from '../../variaveis';
import {
  ContainerModalExcluir,
  ContainerFooterModalExcluir,
  CaixaLoader,
  CaixaBotaoUpload,
  Titulo
} from './Styles';
import { toast } from 'react-toastify';

function ModalAlterarFotoDePerfil(props) {
  const [carregandoDeletar, setCarregandoDeletar] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const antIconModal = (
    <LoadingOutlined style={{ fontSize: 15, color: Cores.azul }} spin />
  );

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

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

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      toast.error('You can only upload JPG/PNG file!');
      setCarregando(true);
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      toast.error('Image must smaller than 2MB!');
      setCarregando(true);
    }

    return isJpgOrPng && isLt2M;
  };

  async function handleChange(info) {
    // Get this url from response in real world.
    setCarregando(true);
    getBase64(info.file.originFileObj, (url) => {
      setCarregando(false);
      setImageUrl(url);
    });
  }

  async function updateFoto() {
    if (imageUrl) {
      setCarregandoDeletar(true);
      await managerService.UpdateFotoDePerfil(props.idUsuario, imageUrl);
      setImageUrl(null);
      props.fecharModal();
      document.location.reload(true);
      setCarregandoDeletar(false);
    } else {
      toast.error('Selecione uma foto para enviar!');
    }
  }

  return (
    <div>
      <ContainerModalExcluir>
        <Titulo>
          Selecione uma imagem para personalizar seu perfil:
        </Titulo>
        <CaixaBotaoUpload>
          <Upload
            name='avatar'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt='avatar'
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </CaixaBotaoUpload>

        <ContainerFooterModalExcluir>
          <Botao
            color={Cores.azulEscuro}
            fontWeight='normal'
            borderColor={Cores.cinza[3]}
            height='28px'
            width='35%'
            widthMedia670='50%'
            fontSize='13px'
            onClick={props.fecharModal}
          >
            Cancelar
          </Botao>

          <Botao
            backgroundColor={Cores.lilas[2]}
            color={Cores.azulEscuro}
            borderColor={Cores.azulEscuro}
            fontWeight='normal'
            height='28px'
            width='35%'
            widthMedia670='50%'
            fontSize='13px'
            onClick={() => {
              updateFoto();
            }}
          >
            {carregandoDeletar ? (
              <CaixaLoader>
                <Spin indicator={antIconModal} />
              </CaixaLoader>
            ) : (
              'Confirmar'
            )}
          </Botao>
        </ContainerFooterModalExcluir>
      </ContainerModalExcluir>
    </div>
  );
}

export default ModalAlterarFotoDePerfil;
