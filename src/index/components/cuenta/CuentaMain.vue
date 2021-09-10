<script>
import { h, markRaw } from 'vue';
import axios from 'axios';

import SandwichIcon from '../svg/SandwichIcon.vue';
import CuentaDatos from './CuentaDatos.vue';
import CuentaItems from './CuentaItems.vue';
import CuentaBoletos from './CuentaBoletos.vue';

export default {
    name: 'CuentaMain',
    components: {
        SandwichIcon,
        CuentaDatos: markRaw(CuentaDatos),
        CuentaItems: markRaw(CuentaItems),
        CuentaBoletos: markRaw(CuentaBoletos),
    },
    data() {
        return {
            view: 'datos',
            views: {
                datos: CuentaDatos,
                publicaciones: CuentaItems,
                boletos: CuentaBoletos,
            },
            banner: {},
        };
    },
    created() {
        axios(this.urlDev('api/banners/ladito'))
            .then((res) => (this.banner = res.data))
            .catch((err) => console.error(err));
    },
    methods: {
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
    },
    render() {
        return h('div', { class: 'flex-1 md:flex py-12' }, [
            h(
                'div',
                {
                    id: 'sidebar',
                    class: 'md:w-1/4 w-1/2 flex-col flex hidden md:block ml-4',
                },
                [
                    h(
                        'div',
                        {
                            class: 'mb-6 2xl:mb-7 flex justify-center items-center',
                        },
                        [
                            h(SandwichIcon, {
                                class: 'mr-3 h-8 2xl:h-9 text-anaranjado',
                            }),
                            h(
                                'h1',
                                {
                                    class: 'mr-10 text-lg 2xl:text-xl font-bold text-center',
                                },
                                'Mi cuenta'
                            ),
                        ]
                    ),
                    h(
                        'nav',
                        { class: 'mx-auto w-max' },
                        h(
                            'ul',
                            {
                                class: 'space-y-2 2xl:space-y-3 text-lg 2xl:text-xl font-bold',
                            },
                            [
                                ...Object.keys(this.views).map((nombre) =>
                                    h(
                                        'li',
                                        {
                                            class: [
                                                'hover:text-anaranjado transition-colors duration-200 ease-out cursor-pointer',
                                                {
                                                    'text-anaranjado':
                                                        this.view === nombre,
                                                },
                                            ],
                                            onClick: () => (this.view = nombre),
                                        },
                                        `Mis ${nombre}`
                                    )
                                ),
                                h(
                                    'li',
                                    h(
                                        'a',
                                        {
                                            class: 'hover:text-anaranjado transition-colors duration-200 ease-out cursor-pointer',
                                            href: '/crear',
                                        },
                                        'Crear publicación'
                                    )
                                ),
                            ]
                        )
                    ),
                ]
            ),
            h('div', { class: 'flex flex-row md:hidden ml-2' }, [
                h(
                    'div',
                    {
                        id: 'sidebar',
                        class: 'md:w-1/4 w-1/2 flex-col flex md:hidden',
                    },
                    [
                        h(
                            'div',
                            {
                                class: 'mb-6 2xl:mb-7 flex justify-center items-center',
                            },
                            [
                                h(SandwichIcon, {
                                    class: 'mr-3 h-8 2xl:h-9 text-anaranjado',
                                }),
                                h(
                                    'h1',
                                    {
                                        class: 'mr-10 text-lg 2xl:text-xl font-bold text-center',
                                    },
                                    'Mi cuenta'
                                ),
                            ]
                        ),
                        h(
                            'nav',
                            { class: 'mx-auto w-max' },
                            h(
                                'ul',
                                {
                                    class: 'space-y-2 2xl:space-y-3 text-lg 2xl:text-xl font-bold',
                                },
                                Object.keys(this.views).map((nombre) =>
                                    h(
                                        'li',
                                        {
                                            class: [
                                                'hover:text-anaranjado transition-colors duration-200 ease-out cursor-pointer',
                                                {
                                                    'text-anaranjado':
                                                        this.view === nombre,
                                                },
                                            ],
                                            onClick: () => (this.view = nombre),
                                        },
                                        `Mis ${nombre}`
                                    )
                                )
                            )
                        ),
                    ]
                ),
                h(
                    'aside',
                    {
                        class: ' justify-center items-center w-1/2 flex flex-col mt-4 md:hidden',
                    },
                    h(
                        'a',
                        { href: this.banner.urlBanner },
                        h('img', {
                            src: this.urlDev(this.banner.imagenBanner),
                            class: 'rounded-lg object-cover',
                            style: {
                                width: 128 + 'px',
                                height: 384 + 'px',
                            },
                        })
                    )
                ),
            ]),
            h(this.views[this.view], { class: 'w-full md:w-1/2' }),
            h(
                'aside',
                {
                    class: 'flex-1 flex justify-center items-center hidden mt-4 md:block',
                },
                h(
                    'a',
                    { href: this.banner.urlBanner },
                    h('img', {
                        src: this.urlDev(this.banner.imagenBanner),
                        class: 'rounded-lg object-cover',
                        style: {
                            width: 128 + 'px',
                            height: 384 + 'px',
                        },
                    })
                )
            ),
        ]);
    },
};
</script>
