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
            return 'http://localhost:3000/' + path;
        },
    },
    render() {
        return h('div', { class: 'flex-1 flex' }, [
            h('div', { id: 'sidebar', class: 'w-1/4 pt-12' }, [
                h(
                    'div',
                    { class: 'mb-6 2xl:mb-7 flex justify-center items-center' },
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
            ]),
            h(this.views[this.view], { class: 'w-1/2' }),
            h(
                'aside',
                { class: 'flex-1 flex justify-center items-center' },
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
