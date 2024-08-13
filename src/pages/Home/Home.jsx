import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Body,
  CaixaInputs,
  CaixaLocais,
  Conteudo,
  Local,
  NomeLocal,
  EnderecoLocal,
  EstrelasLocal,
  CaixaBotoes,
  TextoPlaceholder,
  CaixaPlaceholder,
  CaixaFoto,
  CaixaDados,
  CaixaSelect,
  CaixaConteudo,
} from "./Styles";
import { Cores } from "../../utils/variaveis";
import { SearchOutlined, PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import Input from "../../Styles/Input/Input";
import Select from "../../Styles/Select/Select";
import Botao from "../../Styles/Botao/Botao";
import * as managerService from "../../services/ManagerService/managerService";
import AddToast from "../../components/AddToast/AddToast";
import useAuthStore from "../../stores/auth";
function Home() {
  const navigate = useNavigate();
  const [locais, setLocais] = useState([]);
  const [buscaTipo, setBuscaTipo] = useState("nome");
  const [pesquisa, setPesquisa] = useState("");
  const [carregando, setCarregando] = useState(false);
  const isAdmin = useAuthStore((state) => state?.usuario?.admin);
  const pesquisaAjustada = pesquisa
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const locaisFiltrados = locais.filter((locais) => {
    if (buscaTipo === "nome") {
      return locais?.nome
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(pesquisaAjustada);
    }
    if (buscaTipo === "endereco") {
      return locais?.endereco
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(pesquisaAjustada);
    }
    return locais;
  });

  async function pegandoDadosDeLocais() {
    try {
      const resposta = await managerService.GetDadosLocais();

      setLocais(resposta.dadosLocais);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
    setCarregando(false);
  }

  useEffect(() => {
    setCarregando(true);
    pegandoDadosDeLocais();
  }, []);

  function MudarBuscaTipo(tipo) {
    setBuscaTipo(tipo);
  }

  const GOOGLE_API_KEY = "AIzaSyBUwXbN66GC9i-ZGfQmEY8n_QXGytWBe6I";

  async function getPlaceImage(placeName) {
    const url = `https://corsclinicas.onrender.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      placeName
    )}&key=${GOOGLE_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
        const place = data.results[0];
        const photoReference = place.photos ? place.photos[0].photo_reference : null;

        if (photoReference) {
          const photoUrl = `https://corsclinicas.onrender.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${GOOGLE_API_KEY}`;
          return photoUrl;
        } else {
          console.log("No photos available for this place.");
          return null;
        }
      } else {
        console.log("No places found.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching place image:", error);
      return null;
    }
  }

  return (
    <Body>
      <Conteudo>
        <CaixaInputs>
          <Input
            placeholder="Pesquisar Local"
            height={"22px"}
            backgroundColor="white"
            width="67%"
            borderColor="#570B87"
            borderWidth="2px"
            borderRadius="18px"
            fontSize="1.4em"
            paddingTop="10px"
            paddingRight="10px"
            paddingBottom="10px"
            paddingLeft="2%"
            color="#424242"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          ></Input>
          <SearchOutlined
            style={{
              fontSize: "28px",
              color: "#570B87",
              position: "absolute",
              right: "20%",
              paddingBottom: "1.8%",
            }}
          />
        </CaixaInputs>
        <CaixaSelect>
          <Select
            backgroundColor={Cores.branco}
            borderColor="#570B87"
            borderWidth="2px"
            fontSize="16px"
            marginTop="0px"
            paddingLeft="20px"
            borderRadius="18px"
            placeholder="Pesquisar por nome"
            height="35px"
            nome="id_usuario"
            color="#424242"
            fontSize750="13px"
            defaultValue={"nome"}
            value={buscaTipo}
            onChange={(e) => MudarBuscaTipo(e.target.value)}
          >
            <option value="nome">Pesquisar por nome</option>
            <option value="endereco">Pesquisar por endereço</option>
          </Select>
        </CaixaSelect>
        {carregando ? (
          <CaixaConteudo>
            <CaixaPlaceholder>
              <TextoPlaceholder>
                Carregando Locais
                <LoadingOutlined style={{ fontSize: 24, color: "#570b87" }} spin />
              </TextoPlaceholder>
            </CaixaPlaceholder>
          </CaixaConteudo>
        ) : (
          <CaixaConteudo>
            {locais.length === 0 ? (
              <CaixaPlaceholder>
                <TextoPlaceholder>Ainda não existem Locais Cadastrados</TextoPlaceholder>
              </CaixaPlaceholder>
            ) : (
              <CaixaLocais>
                {locaisFiltrados?.map((value, index) => (
                  <Local key={index} onClick={() => navigate(`/local/${value?._id}`)}>
                    <CaixaFoto>
                      <img src={`https://corsclinicas.onrender.com/${value.image}`}></img>
                    </CaixaFoto>
                    <CaixaDados>
                      <NomeLocal>{value?.nome}</NomeLocal>
                      <EnderecoLocal>{value?.endereco}</EnderecoLocal>
                      <EstrelasLocal>
                        {value?.estrelas}
                        <Rate
                          value={value?.estrelas}
                          style={{
                            color: "#570B87",
                            fontSize: "0.75em",
                            marginBottom: "5%",
                          }}
                          disabled
                        />
                      </EstrelasLocal>
                    </CaixaDados>
                  </Local>
                ))}
              </CaixaLocais>
            )}
          </CaixaConteudo>
        )}
        {isAdmin && (
          <div
            style={{
              width: "65%",
              height: "40%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          ></div>
        )}
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default Home;
