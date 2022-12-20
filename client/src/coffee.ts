import americanoImg from './assets/coffee/Americano.png';
import cafeComLeiteImg from './assets/coffee/Café-com-Leite.png';
import cafeGeladoImg from './assets/coffee/Café-Gelado.png';
import capuccinoImg from './assets/coffee/Capuccino.png';
import chocolateQuenteImg from './assets/coffee/Chocolate-Quente.png';
import cubanoImg from './assets/coffee/Cubano.png';
import expressoCremosoImg from './assets/coffee/Expresso-Cremoso.png';
import expressoImg from './assets/coffee/Expresso.png';
import havaianoImg from './assets/coffee/Havaiano.png';
import irlandesImg from './assets/coffee/Irlandês.png';
import latteImg from './assets/coffee/Latte.png';
import macchiatoImg from './assets/coffee/Macchiato.png';
import mochaccinoImg from './assets/coffee/Mochaccino.png';
import arabeImg from './assets/coffee/Árabe.png';

export const coffeeList = [
    {
        id: 1,
        image: expressoImg,
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            }
        ]
    },
    {
        id: 2,
        image: americanoImg,
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            }
        ]
    },
    {
        id: 3,
        image: expressoCremosoImg,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            }
        ]
    },
    {
        id: 4,
        image: cafeGeladoImg,
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            },
            {
                categoryId: 4,
                name: 'Gelado'
            }
        ]
    },
    {
        id: 5,
        image: cafeComLeiteImg,
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            },
            {
                categoryId: 5,
                name: 'Com leite'
            }
        ]
    },
    {
        id: 6,
        image: latteImg,
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            },
            {
                categoryId: 5,
                name: 'Com leite'
            }
        ]
    },
    {
        id: 7,
        image: capuccinoImg,
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            },
            {
                categoryId: 5,
                name: 'Com leite'
            }
        ]
    },
    {
        id: 8,
        image: macchiatoImg,
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            },
            {
                categoryId: 5,
                name: 'Com leite'
            }
        ]
    },
    {
        id: 9,
        image: mochaccinoImg,
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
        categories: [
            {
                categoryId: 1,
                name: 'Tradicional'
            }, 
            {
                categoryId: 5,
                name: 'Com leite'
            }
        ]
    },
    {
        id: 10,
        image: chocolateQuenteImg,
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '9,90',
        categories: [
            {
                categoryId: 2,
                name: 'Especial'
            },
            {
                categoryId: 5,
                name: 'Com Leite'
            }
        ]
    },
    {
        id: 11,
        image: cubanoImg,
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '9,90',
        categories: [
            {
                categoryId: 2,
                name: 'Especial'
            },
            {
                categoryId: 3,
                name: 'Alcoólico'
            },
            {
                categoryId: 4,
                name: 'Gelado'
            }
        ]
    },
    {
        id: 12,
        image: havaianoImg,
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '9,90',
        categories: [
            {
                categoryId: 2,
                name: 'Especial'
            }
        ]
    },
    {
        id: 13,
        image: arabeImg,
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '9,90',
        categories: [
            {
                categoryId: 2,
                name: 'Especial'
            }
        ]
    },
    {
        id: 14,
        image: irlandesImg,
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '9,90',
        categories: [
            {
                categoryId: 2,
                name: 'Especial'
            },
            {
                categoryId: 3,
                name: 'Alcoólico'
            }
        ]
    },
]
