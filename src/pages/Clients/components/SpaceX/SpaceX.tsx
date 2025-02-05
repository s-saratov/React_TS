import { Link } from "react-router-dom";
import { ClientInfo, ClientLogo, ClientPage, ClientTitle } from "./styles";

function SpaceX() {
  return (
    <ClientPage>
      <ClientLogo src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg" />
      <ClientTitle>SpaceX</ClientTitle>
      <ClientInfo>
        SpaceX, is an American space technology company headquartered at the
        Starbase development site near Brownsville, Texas. Since its founding in
        2002, the company has made numerous advancements in rocket propulsion,
        reusable launch vehicles, human spaceflight and satellite constellation
        technology.
      </ClientInfo>
      <Link to="/clients">Back to clients page</Link>
    </ClientPage>
  );
}

export default SpaceX;
