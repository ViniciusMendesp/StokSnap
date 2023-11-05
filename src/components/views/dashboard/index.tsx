import { Footer } from "@Aplication/components/shared/Footer";
import { Header } from "@Aplication/components/shared/Header";
import { Table } from "@Aplication/components/shared/Table";
import * as S from "./styles";

export function DashboardView() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Table />
      </S.Content>
      <Footer />
    </S.Container>
  );
}
