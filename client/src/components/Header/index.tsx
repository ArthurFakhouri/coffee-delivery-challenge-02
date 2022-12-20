import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { Actions, Cart, HeaderContainer, HeaderFit, Location } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {

    const { cart, address } = useContext(CartContext);
    const totalItems = cart.reduce(
        (prvValue, curValue) => prvValue + curValue.amount,
        0
    )

    return (
        <HeaderFit>
            <HeaderContainer>
                <NavLink to="/" title='Home'>
                    <img src={logo} alt="Coffee cup with rocket lifting off to the cover with text 'Coffee delivery' beside" />
                </NavLink>
                <Actions>
                    <Location>
                        <MapPin size={22} weight="fill" />
                        {
                            address.cep ? `${address.cidade}, ${address.uf}` : "Localização"
                        }
                    </Location>
                    <Cart>
                        <NavLink to='/checkout'>
                            <ShoppingCart size={22} weight="fill" />
                            {
                                totalItems > 0 &&
                                <span>
                                    {totalItems > 9 ? "+9" : totalItems}
                                </span>}
                        </NavLink>
                    </Cart>
                </Actions>
            </HeaderContainer>
        </HeaderFit>
    )
}