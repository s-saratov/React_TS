// Шаг 1. Импортируем createContext
import { createContext } from "react";
import Button from "components/Button/Button";
import { CatFactRandomizerContainer } from "./styles";
import CatFactDescription from "../CatFactDescription/CatFactDescription";
import axios from "axios";
import { useState, Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";

interface CatFactDataInterface {
  id: string;
  fact: string;
}

interface CatFactRandomizerContextInterface {
  data: CatFactDataInterface[];
  setCatFactData: Dispatch<SetStateAction<CatFactDataInterface[]>>;
}

// Шаг 2. Создаём context
export const CatFactRandomizerContext =
  createContext<CatFactRandomizerContextInterface>({
    data: [],
    setCatFactData: () => {},
  });

function CatFactRandomizer() {
  const [catFactData, setCatFactData] = useState<CatFactDataInterface[]>([]);
  const CATFACT_URL = "https://catfact.ninja/fact";

  const getCatFact = async () => {
    try {
      const result = await axios.get(CATFACT_URL);
      //   console.log(result);
      const newCatFact: CatFactDataInterface = {
        id: v4(),
        fact: result.data.fact,
      };
      setCatFactData((prevValue: CatFactDataInterface[]) => {
        return [...prevValue, newCatFact];
      });
    } catch (error) {
    } finally {
    }
  };

  console.log(catFactData);

  return (
    // Шаг 3. Оборачиваем всё, что внутри CatFactRandomizer, в Provider для того, чтобы всё, что внутри него,
    // имело доступ к контексту
    <CatFactRandomizerContext.Provider
      value={{
        data: catFactData,
        setCatFactData: setCatFactData,
      }}
    >
      <CatFactRandomizerContainer>
        <Button name="GET CATFACT" onClick={getCatFact} />
        <CatFactDescription />
      </CatFactRandomizerContainer>
    </CatFactRandomizerContext.Provider>
  );
}

export default CatFactRandomizer;