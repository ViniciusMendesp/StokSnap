import { Pencil, Trash } from "lucide-react";
import { Button } from "../button";
import * as S from "./styles";

interface TableProps {}

export function Table({}: TableProps) {
  return (
    <S.Container>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>Nome</S.Th>
            <S.Th>Tamanho</S.Th>
            <S.Th>Cor</S.Th>
            <S.Th>Preço</S.Th>
            <S.Th>Ações</S.Th>
          </S.Tr>
        </S.THead>
        <S.TBody>
          <S.Tr>
            <S.Td>Nome</S.Td>
            <S.Td>M</S.Td>
            <S.Td>Azul</S.Td>
            <S.Td>R$ 90,00</S.Td>
            <S.Td>
              <S.ButtonsContainer>
                <Button onlyIcon className="Green">
                  <Pencil size={16} />
                </Button>
                <Button onlyIcon className="Red">
                  <Trash size={16} />
                </Button>
              </S.ButtonsContainer>
            </S.Td>
          </S.Tr>
        </S.TBody>
      </S.Table>
    </S.Container>
  );
}
