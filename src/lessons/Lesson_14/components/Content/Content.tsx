import { useContext } from "react";
import { ContentComponent, DataItem } from "./styles";
// import { ContentProps } from "./types"
import { MainCardContext } from "../MainCard/MainCard";
import Button from "components/Button/Button";

function Content() {
  // Шаг 3. Вызываем hook useContext, в который мы передаём контекст, который был создан на первом шаге
  // При вызове hook-а useContext он возвращает данные, переданные в value провайдера на втором шаге
  // Сохраняем значение в отдельную переменную

  // const userContentData = useContext(MainCardContext);
  const {data, onDataChange} = useContext(MainCardContext)
  // console.log(contextData);
  
  const onDeleteData = () => {
    onDataChange(undefined);
  }

  return (
    <ContentComponent>
      <DataItem>First Name: {data ? data?.firstName : '-'}</DataItem>
      <DataItem>Last Name: {data ? data?.lastName : '-'}</DataItem>
      <DataItem>Age: {data ? data?.age : '-'}</DataItem>
      <Button name="CLEAR DATA" onClick={onDeleteData} />
    </ContentComponent>
  );
}
export default Content;

// Пример с props drilling
// function Content({contentData}: ContentProps) {
//   return (
//     <ContentComponent>
//       <DataItem>First Name: {contentData.firstName}</DataItem>
//       <DataItem>Last Name: {contentData.lastName}</DataItem>
//       <DataItem>Age: {contentData.age}</DataItem>
//     </ContentComponent>
//   )
// }
// export default Content
