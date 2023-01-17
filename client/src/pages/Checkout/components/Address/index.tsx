import { MapPinLine } from "phosphor-react";
import { AddressContainer, Complement, Form } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

const newAddressFormValidationSchema = zod.object({
    cep: zod.string().min(8, 'Informe um cep válido'),
    rua: zod.string().min(1, 'Informe o endereço'),
    numero: zod.string().min(1, 'Informe o número de sua residência'),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().max(2, 'Estado inválido').min(1, 'Informe o estado')
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export function Address() {

    const { setAddressCart } = useContext(CartContext);

    const newAddressForm = useForm<NewAddressFormData>({
        resolver: zodResolver(newAddressFormValidationSchema),
        defaultValues: {
            cep: '',
            rua: '',
            cidade: '',
            uf: '',
            bairro: '',
            complemento: '',
            numero: ''
        }
    })

    const { register, handleSubmit, watch, reset } = newAddressForm;

    const filledInputs = watch(['cep', 'rua', 'bairro', 'numero', 'cidade', 'uf']);
    const totalFilledInputs = filledInputs.reduce((prvValue, curValue) => prvValue + (curValue.length ? 1 : 0), 0);
    const isSubmitDisabled = !(totalFilledInputs === 6);

    function handleCreateAddress(data: NewAddressFormData) {
        setAddressCart(data);
        reset();
    }

    return (
        <AddressContainer>
            <section>
                <h5><MapPinLine size={22} />Endereço de Entrega</h5>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </section>

            <Form onSubmit={handleSubmit(handleCreateAddress)} >
                <input type="text" placeholder="CEP" {...register('cep')} />
                <input type="text" placeholder="Rua" {...register('rua')} />
                <div>
                    <input type="text" placeholder="Número" {...register('numero')} />
                    <div>
                        <Complement type="text" id="complemento" placeholder="Complemento" {...register('complemento')} />
                        <label htmlFor="complemento">Opcional</label>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Bairro" {...register('bairro')} />
                    <input type="text" placeholder="Cidade" {...register('cidade')} />
                    <input type="text" placeholder="UF"
                        maxLength={2} style={{ textTransform: "uppercase" }} {...register('uf')} />
                </div>
                <button type="submit" disabled={isSubmitDisabled}>Salvar endereço</button>
            </Form>
        </AddressContainer>
    )
}