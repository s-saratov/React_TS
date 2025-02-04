import { Link } from "react-router-dom"

import { Title, ClientsPage } from "./styles"

function Clients() {


  return (
    <ClientsPage>
      <Title>Our clients</Title>
      <Link to="tesla">Tesla</Link>
      <Link to="spacex">SpaceX</Link>
      <Link to="xai">xAI</Link>
    </ClientsPage>
  )
}

export default Clients