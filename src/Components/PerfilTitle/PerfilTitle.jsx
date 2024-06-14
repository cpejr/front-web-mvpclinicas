import { TituloIcon, Titulo } from "./styles";
import PropTypes from "prop-types";
function PerfilTitle({ placeholder, icon: Icon }) {
  return (
    <TituloIcon>
      <Titulo>{placeholder}</Titulo>
      {Icon && <Icon style={{ fontSize: "22px", color: "#570B87" }} />}
    </TituloIcon>
  );
}
PerfilTitle.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
export default PerfilTitle;
