import * as S from "./styles";

export function Checkbox({ checked, onClick }) {
  return <S.Container checked={checked} onClick={onClick} />;
}
