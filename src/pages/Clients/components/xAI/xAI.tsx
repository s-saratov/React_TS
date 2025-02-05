import { Link } from "react-router-dom";
import { ClientInfo, ClientLogo, ClientPage, ClientTitle } from "./styles";

function XAI() {
  return (
    <ClientPage>
      <ClientLogo src="https://1000logos.net/wp-content/uploads/2023/10/xAI-Logo.png" />
      <ClientTitle>xAI</ClientTitle>
      <ClientInfo>
        xAI, is an American startup company working in the area of artificial
        intelligence (AI). Founded by Elon Musk in March 2023, its stated goal
        is "to understand the true nature of the universe".
      </ClientInfo>
      <Link to="/clients">Back to clients page</Link>
    </ClientPage>
  );
}

export default XAI;
