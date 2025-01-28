import { AnimalCardStyled } from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
    return(
        <AnimalCardStyled>
            <h3>{animalName}</h3>
            <div>{animalSpecies}</div>
            <img src={animalImg} className="card-image"/>
            {/* prop children позволяет добавлять дополнительную структуру (JSX, компоненты) в компонент */}
            {children}
        </AnimalCardStyled>
    );
}

export default AnimalCard;