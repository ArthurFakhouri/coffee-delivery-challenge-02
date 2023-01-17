import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { Actions, Cart, HeaderContainer, HeaderFit, Location } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface HeaderProps {
    width: number;
}

export function Header({ width }: HeaderProps) {

    const { cart, address } = useContext(CartContext);
    const totalItems = cart.reduce(
        (prvValue, curValue) => prvValue + curValue.amount,
        0
    )

    return (
        <HeaderFit offsetWidth={width}>
            <HeaderContainer>
                <NavLink to="/" title='Home'>
                    <img src={logo} width={85} height={40}
                    alt="Coffee cup with rocket lifting off to the cover with text 'Coffee delivery' beside" />
                </NavLink>
                <Actions>
                    <Location>
                        <MapPin size={22} weight="fill" />
                        <span>
                        {
                            address.cep ? `${address.cidade}, ${address.uf}` : "Localização"
                        }
                        </span>
                    </Location>
                    <Cart>
                        <NavLink to='/checkout' aria-label='Cart'>
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