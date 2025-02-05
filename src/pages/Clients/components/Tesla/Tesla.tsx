import { Link } from "react-router-dom";
import { ClientInfo, ClientLogo, ClientPage, ClientTitle } from "./styles";

function Tesla() {
  return (
    <ClientPage>
      <ClientLogo src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" />
      <ClientTitle>Tesla</ClientTitle>
      <ClientInfo>
        Tesla, Inc. is an American multinational automotive and clean energy
        company. Headquartered in Austin, Texas, it designs, manufactures and
        sells battery electric vehicles (BEVs), stationary battery energy
        storage devices from home to grid-scale, solar panels and solar
        shingles, and related products and services.
      </ClientInfo>
      <Link to="/clients">Back to clients page</Link>
    </ClientPage>
  );
}

export default Tesla;
