<template>
    <div class="mx-auto">
        <div
            :class="[
                'relative p-6 bg-gray-50 border-4 border-dashed border-gray-300 rounded-lg transition-colors duration-200 ease-out',
                { ' border-blue-200': dragging },
            ]"
            @dragover.prevent="dragging = true"
            @dragleave.prevent="dragging = false"
            @drop.prevent="drop($event)"
        >
            <button
                v-show="notEmpty"
                class="
                    relative
                    px-2
                    z-20
                    border border-gray-300
                    rounded
                    text-gray-300
                    font-bold
                    hover:border-0 hover:bg-gray-300 hover:text-white
                "
                type="button"
                @click="clear"
            >
                limpiar
            </button>

            <input
                class="
                    w-full
                    h-full
                    opacity-0
                    absolute
                    inset-0
                    z-10
                    cursor-pointer
                "
                type="file"
                accept="image/*"
                @change="(e) => addFiles(e.target.files)"
                multiple
            />

            <div
                class="
                    flex flex-col
                    justify-center
                    items-center
                    text-center text-gray-500
                    rounded-lg
                "
            >
                <UploadIcon
                    :class="['stroke-current', notEmpty ? 'w-14' : 'w-36']"
                />

                <p>Haz click o arrastra tus imágenes aquí</p>
            </div>

            <div v-show="notEmpty" class="mt-4 border-2 rounded shadow-inner">
                <div
                    id="previews"
                    class="relative px-3 py-4 z-20 flex h-52 flex-nowrap"
                >
                    <div
                        v-for="(preview, i) in previews"
                        :key="i"
                        :class="[
                            'relative h-full flex-none',
                            {
                                'rounded ring-4 ring-yellow-300': featured == i,
                                'ml-4': i > 0,
                            },
                        ]"
                    >
                        <div
                            id="controls"
                            class="
                                absolute
                                w-full
                                h-full
                                flex flex-col
                                justify-around
                                items-center
                                opacity-0
                                rounded
                                bg-black bg-opacity-50
                                hover:opacity-100
                                transition-opacity
                                duration-300
                                ease-out
                            "
                        >
                            <StarIcon
                                :class="[
                                    'text-yellow-300 cursor-pointer',
                                    { 'fill-current': featured === i },
                                ]"
                                @click="featured = i"
                            />

                            <ZoomIcon
                                class="text-white cursor-pointer"
                                @click="openLightbox(i)"
                            />

                            <DeleteIcon
                                class="text-red-500 cursor-pointer"
                                @click="rmFile(i)"
                            />
                        </div>

                        <img
                            class="object-cover h-full rounded"
                            :src="preview"
                            :alt="`imagen ${i}`"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div
            id="lightbox"
            v-show="modal"
            class="
                fixed
                z-20
                inset-0
                text-3xl
                bg-black bg-opacity-75
                flex
                justify-between
                items-center
            "
        >
            <span
                class="
                    text-white
                    absolute
                    top-12
                    right-12
                    font-bold
                    cursor-pointer
                    hover:text-gray-200
                "
                @click="modal = false"
                >&times;</span
            >

            <a
                class="cursor-pointer p-8 text-white font-bold"
                @click="slide(-1)"
                >&#10094;</a
            >

            <div class="w-4/5 h-full">
                <img
                    v-for="(preview, i) in previews"
                    :key="i"
                    v-show="i == curSlide"
                    @click="modal = false"
                    class="w-full h-full object-contain cursor-pointer"
                    :src="preview"
                    :alt="`imagen ${i}`"
                />
            </div>

            <a class="cursor-pointer p-8 text-white font-bold" @click="slide(1)"
                >&#10095;</a
            >
        </div>
    </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
//import Compressor from 'compressorjs';
import UploadIcon from '../components/svg/UploadIcon.vue';
import DeleteIcon from './svg/DeleteIcon.vue';
import ZoomIcon from './svg/ZoomIcon.vue';
import StarIcon from './svg/StarIcon.vue';

export default {
    name: 'MultiImgDrop',
    components: {
        UploadIcon,
        DeleteIcon,
        ZoomIcon,
        StarIcon,
    },
    props: {
        images: {
            type: Array,
            default: function () {
                return [];
            },
        },
        paBorrar: {
            type: Array,
            default: function () {
                return [];
            },
        },
    },
    emits: ['update:images', 'update:paBorrar'],
    data() {
        return {
            storedImages: this.images,
            previews: this.images.map((path) => this.urlDev(path)),
            dragging: false,
            modal: false,
            curSlide: 0,
            featured: 0,
            scrollbar: null,
        };
    },
    computed: {
        notEmpty() {
            return this.previews.length > 0;
        },
    },
    mounted() {
        this.scrollbar = new PerfectScrollbar('#previews');
        this.$emit('update:images', []);
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
        drop(event) {
            this.addFiles(event.dataTransfer.files);
            this.dragging = false;
        },
        addFiles(files) {
            const buff = this.images;
            const data = this;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                data.previews.push(URL.createObjectURL(file));
                buff.push(file);
            }

            this.$emit('update:images', buff);

            setTimeout(() => {
                this.scrollbar.update();
            }, 100);
        },
        rmFile(i) {
            if (i < this.featured) {
                this.featured--;
            } else if (i == this.featured) {
                this.featured = 0;
            }

            if (i >= this.storedImages.length) {
                const buff = this.images;
                buff.splice(i, 1);
                this.$emit('update:images', buff);
            } else {
                const buff = this.paBorrar.concat(
                    this.storedImages.splice(i, 1)
                );
                this.$emit('update:paBorrar', buff);
            }

            this.previews.splice(i, 1);

            this.$nextTick(function () {
                this.scrollbar.update();
            });
        },
        clear() {
            this.previews.length = 0;
            this.$emit('update:images', []);
        },
        openLightbox(i) {
            this.curSlide = i;
            this.modal = true;
        },
        slide(n) {
            n += this.curSlide;

            if (n < 0) {
                n = this.previews.length - 1;
            } else if (n == this.previews.length) {
                n = 0;
            }

            this.curSlide = n;
        },
    },
};
</script>

<style scoped>
.ps__rail-x {
    margin-left: 0;
    margin-right: 0;
}
</style>
