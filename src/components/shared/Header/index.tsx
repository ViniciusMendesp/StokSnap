import { Avatar } from "../Avatar";
import * as S from "./styles";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>StokSnap</S.Title>
        <Avatar name="Vinicius Mendes" size={40} />
      </S.Content>
    </S.Container>
  );
}
