import { AnimalCardStyled, CardImage, SpeciesBlock, Title } from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({
  animalName,
  animalSpecies,
  animalImg,
  children,
}: AnimalCardProps) {
  return (
    <AnimalCardStyled>
      <Title>{animalName}</Title>
      <SpeciesBlock>{animalSpecies}</SpeciesBlock>
      <CardImage src={animalImg} />
      {/* prop children позволяет добавлять дополнительную структуру (JSX, компоненты) в компонент */}
      {children}
    </AnimalCardStyled>
  );
}

export default AnimalCard;
