import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContentContainer, Icon, Item } from "./styles";
import { useContext } from 'react';
import { CartContext } from "../../../../contexts/CartContext";

export function Content() {

    const { paymentMethod, address } = useContext(CartContext);

    return (
        <ContentContainer>
            <Item>
                <Icon colorIcon="purple">
                    <MapPin weight="fill" />
                </Icon>
                <div>
                    <span>Entrega em <strong>{address.rua}, {address.numero}</strong></span>
                    <span>{address.bairro} - {address.cidade}, {address.uf}</span>
                </div>
            </Item>
            <Item>
                <Icon colorIcon="yellow">
                    <Timer weight="fill" />
                </Icon>
                <div>
                    <span>Previsão de entrega</span>
                    <strong>20 min - 30 min</strong>
                </div>
            </Item>
            <Item>
                <Icon colorIcon="yellow-dark">
                    <CurrencyDollar weight="fill" />
                </Icon>
                <div>
                    <span>Pagamento na entrega</span>
                    <strong>{paymentMethod}</strong>
                </div>
            </Item>
        </ContentContainer>
    )
}