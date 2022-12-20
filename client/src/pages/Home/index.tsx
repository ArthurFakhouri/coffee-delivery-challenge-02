import { Intro } from "./components/Intro";
import { coffeeList } from "../../coffee";
import { CoffeeList, HomeContainer } from "./styles";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
    return (
        <HomeContainer>
            <Intro />
            <strong>Nossos cafés</strong>
            <CoffeeList>
                {coffeeList.map(coffee =>
                    <CoffeeCard key={coffee.id} {...coffee}
                    />)}
            </CoffeeList>
        </HomeContainer>
    )
}