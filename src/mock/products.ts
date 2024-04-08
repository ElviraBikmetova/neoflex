import { IProducts } from "../interfaces/IProducts";

export const products: IProducts = {
    headphones: {
        title: 'Наушники',
        items: [
            {
                id: '001',
                img: 'images/Apple-BYZ-S8521.png',
                title: 'Apple BYZ S852I',
                price: 2927,
                oldPrice: 3527,
                rate: 4.7,
            },
            {
                id: '002',
                img: 'images/Apple-EarPods.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                id: '003',
                img: 'images/Apple-EarPods-1.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                id: '004',
                img: 'images/Apple-BYZ-S8521.png',
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
            },
            {
                id: '005',
                img: 'images/Apple-EarPods.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                id: '006',
                img: 'images/Apple-EarPods-1.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            }
        ]
    },
    wirelessHeadphones: {
        title: 'Беспроводные наушники',
        items: [
            {
                id: '007',
                img: 'images/Apple-AirPods.png',
                title: 'Apple AirPods',
                price: 9527,
                rate: 4.7,
            },
            {
                id: '008',
                img: 'images/GERLAX-GH-04.png',
                title: 'GERLAX GH-04',
                price: 6527,
                rate: 4.7,
            },
            {
                id: '009',
                img: 'images/BOROFONE-BO4.png',
                title: 'BOROFONE BO4',
                price: 7527,
                rate: 4.7,
            }
        ]
    }
}
