import { MenuBar, ButtonStyled } from "./styles";
import { useHistory } from "react-router-dom";
import { BiHeart, BiImages, BiPieChartAlt2 } from "react-icons/bi";

const Header = () => {
  const history = useHistory();

  const sendTo = (path) => () => history.push(path);

  return (
    <MenuBar>
      <ButtonStyled onClick={sendTo("/")}>
        <BiImages />
      </ButtonStyled>
      <ButtonStyled onClick={sendTo("/collection")}>
        <BiHeart />
      </ButtonStyled>
      <ButtonStyled onClick={sendTo("/chartPie")}>
        <BiPieChartAlt2 />
      </ButtonStyled>
    </MenuBar>
  );
};

export default Header;
