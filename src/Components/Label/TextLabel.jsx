import { TituloIcon, Titulo } from "./styles";
import PropTypes from "prop-types";

function TextLabel({ content, icon: Icon }) {
  return (
    <TituloIcon>
      <Titulo>{content}</Titulo>
      {Icon && <Icon style={{ fontSize: "22px", color: "#570B87" }} />}
    </TituloIcon>
  );
}

TextLabel.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
export default TextLabel;
