import { MenuBar, ButtonStyled } from "./styles";
import { useHistory } from "react-router-dom";
import { BiHeart, BiImages } from "react-icons/bi";

const Header = () => {
  const history = useHistory();

  const sendTo = (path) => () => history.push(path);

  return (
    <MenuBar>
      <ButtonStyled onClick={sendTo("/galery")}>
        <BiImages />
      </ButtonStyled>
      <ButtonStyled onClick={sendTo("/collection")}>
        <BiHeart />
      </ButtonStyled>
    </MenuBar>
  );
};

export default Header;
