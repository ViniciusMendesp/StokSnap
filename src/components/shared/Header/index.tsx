import { useUser } from "@Aplication/contexts/UserContext";
import { Avatar } from "../Avatar";
import { Dropdown } from "../Dropdown";
import * as S from "./styles";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { name } = useUser;
  return (
    <S.Container>
      <S.Content>
        <S.Title>StokSnap</S.Title>
        <S.ContainerDropDown>
          <Avatar name={name} size={40} />
          <Dropdown />
        </S.ContainerDropDown>
      </S.Content>
    </S.Container>
  );
}
