import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from './MenuItem'

function Menu() {
  const menu =useLoaderData()
if(menu.length===0) return <h1>Loading.....</h1>
  return <ul>
    {menu.map(pizza=> <MenuItem pizza={pizza} key={pizza.id} />)}
  </ul>
}

export async function loader(){
  const menu = await getMenu()
  return menu
}

export default Menu;
