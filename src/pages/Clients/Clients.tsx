import { Link } from "react-router-dom"

import { Title, ClientsPage } from "./styles"

function Clients() {


  return (
    <ClientsPage>
      <Title>Our clients</Title>
      <Link to="Tesla">Tesla</Link>
      <Link to="SpaceX">SpaceX</Link>
      <Link to="XAI">xAI</Link>
    </ClientsPage>
  )
}

export default Clients