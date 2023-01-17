import { Intro } from "./components/Intro";
import { coffeeList } from "../../coffee";
import { CoffeeList, HomeContainer } from "./styles";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {

    return (
        <HomeContainer>
            <Intro />
            <h2>Nossos cafés</h2>
            <CoffeeList>
                {coffeeList.map(coffee =>
                    <CoffeeCard key={coffee.id} {...coffee}
                    />)}
            </CoffeeList>
        </HomeContainer>
    )
}