import { Button } from "../button";
import * as S from "./styles";

interface DropdownProps {}

export function Dropdown({}: DropdownProps) {
  return (
    <S.Container>
      <S.Text>Perfil</S.Text>
      <Button>Sair</Button>
    </S.Container>
  );
}
