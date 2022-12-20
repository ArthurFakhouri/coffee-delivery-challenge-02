import { Minus, Plus } from "phosphor-react";
import { ChangeEvent } from "react";
import { CounterContainer } from "./styles";

interface CounterProps {
    count: number;
    id?: number;
    updateCountValue: (newCountNumber: number, coffeeItemId?: number) => void;
}

export function Counter({ count, id, updateCountValue }: CounterProps) {

    function handleSetCount(value: number) {
        if (count + value > 0 && count + value < 100) {
            if (id)
                updateCountValue(count + value, id);
            else
                updateCountValue(count + value);
        }
    }

    function handleChangeCount(event: ChangeEvent<HTMLInputElement>) {
        let wishedValueString = event.target.value;
        let wishedValue = 1;

        if (!isNaN(Number(wishedValueString)))
            wishedValue = Number(wishedValueString);
        if (wishedValue < 1)
            wishedValue = 1;
        if (wishedValue > 99)
            wishedValue = 99;

        if (id)
            updateCountValue(wishedValue, id)
        else
            updateCountValue(wishedValue)
    }

    return (
        <CounterContainer>
            <Minus size={14} weight="bold" onClick={() => handleSetCount(-1)} />
            <input type="text" value={count} onChange={handleChangeCount} />
            <Plus size={14} weight="bold" onClick={() => handleSetCount(1)} />
        </CounterContainer>
    )
}