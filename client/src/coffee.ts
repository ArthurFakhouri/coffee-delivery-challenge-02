import americanoImg from './assets/coffee/Americano.png';
import cafeComLeiteImg from './assets/coffee/Café com Leite.png.png';
import cafeGeladoImg from './assets/coffee/Café Gelado.png.png';
import capuccinoImg from './assets/coffee/Capuccino.png.png';
import chocolateQuenteImg from './assets/coffee/Chocolate Quente.png.png';
import cubanoImg from './assets/coffee/Cubano.png.png';
import expressoCremosoImg from './assets/coffee/Expresso Cremoso.png.png';
import expressoImg from './assets/coffee/Expresso.png.png';
import havaianoImg from './assets/coffee/Havaiano.png.png';
import irlandesImg from './assets/coffee/Irlandês.png.png';
import latteImg from './assets/coffee/Latte.png';
import macchiatoImg from './assets/coffee/Macchiato.png';
import mochaccinoImg from './assets/coffee/Mochaccino.png';
import arabeImg from './assets/coffee/Árabe.png';

export const coffeeList = [
    {
        id: 1,
        img: expressoImg,
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        category: [
            {
                categoryId: 1,
                name: 'Tradicional'
            }
        ]
    },
    {
        id: 2,
        img: americanoImg,
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        category: [
            {
                categoryId: 1,
                name: 'Tradicional'
            }
        ]
    },
    {
        id: 3,
        img: expressoCremosoImg,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        category: [
            {
                categoryId: 1,
                name: 'Tradicional'
            }
        ]
    },
    {
        id: 4,
        img: cafeGeladoImg,
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        category: [
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
        img: cafeComLeiteImg,
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        category: [
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
        img: latteImg,
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        category: [
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
        img: capuccinoImg,
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        category: [
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
        img: macchiatoImg,
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        category: [
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
        img: mochaccinoImg,
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        category: [
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
        img: chocolateQuenteImg,
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        category: [
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
        img: cubanoImg,
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        category: [
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
        img: havaianoImg,
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        category: [
            {
                categoryId: 2,
                name: 'Especial'
            }
        ]
    },
    {
        id: 13,
        img: arabeImg,
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        category: [
            {
                categoryId: 2,
                name: 'Especial'
            }
        ]
    },
    {
        id: 14,
        img: irlandesImg,
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        category: [
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
