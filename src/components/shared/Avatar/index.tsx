import * as S from "./styles";

export type AvatarProps = {
  size: number;
  name: string;
  image?: string;
};

export function Avatar({ size, name, image }: AvatarProps) {
  const getInitialsFromName = (name: string) => {
    const names = name.split(" ").slice(0, 2);
    const initials = names.map((n) => n[0]);
    return initials.join("").toUpperCase();
  };

  return (
    <S.Wrapper $size={size} $name={name}>
      {image ? <S.Image src={image} alt={name} /> : getInitialsFromName(name)}
    </S.Wrapper>
  );
}
