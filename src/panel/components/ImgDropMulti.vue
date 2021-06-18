<template>
    <div class="mx-auto">
        <button type="button" @click="$emit('update', [])">reset</button>

        <div
            :class="
                'w-full h-full bg-gray-50 border-4 border-dashed border-gray-300 rounded-lg p-12 transition-colors duration-200 ease-out' +
                    (dragging ? ' border-blue-200' : '')
            "
            @dragover.prevent="dragging = true"
            @dragleave.prevent="dragging = false"
            @drop.prevent="drop($event)"
        >
            <div id="upload" :class="{ notEmpty }">
                <UploadIcon />

                <input
                    class="w-full h-full opacity-0 absolute inset-0 z-20 cursor-pointer"
                    type="file"
                    accept="image/*"
                    @change="(e) => addFiles(e.target.files)"
                    multiple
                />

                <p>Haz click o arrastra tus imágenes aquí</p>
            </div>

            <div
                v-show="notEmpty"
                id="previews"
                class="mt-4 flex space-x-4 h-48 border-2 rounded shadow-inner p-2 flex-nowrap overflow-x-auto"
            >
                <div
                    v-for="(image, i) in images"
                    :key="i"
                    :class="[
                        'relative h-full flex-none',
                        featured == i ? 'ring-4 ring-yellow-300' : '',
                    ]"
                >
                    <div
                        id="controls"
                        class="absolute w-full h-full flex flex-col justify-around items-center opacity-0 hover:opacity-100 bg-black bg-opacity-50"
                    >
                        <StarIcon
                            color="gold"
                            class="cursor-pointer"
                            @click="featured = i"
                        />

                        <ZoomIcon
                            color="white"
                            class="cursor-pointer"
                            @click="openLightbox(i)"
                        />

                        <DeleteIcon
                            color="red"
                            class="cursor-pointer"
                            @click="rmvFile(i)"
                        />
                    </div>

                    <img
                        class="object-cover h-full"
                        :src="preview[i]"
                        :alt="`imagen ${i}`"
                    />
                </div>
            </div>
        </div>

        <div
            id="lightbox"
            v-show="modal"
            class="fixed z-20 inset-0 text-3xl bg-black bg-opacity-75 flex justify-between items-center"
        >
            <span
                class="text-white absolute top-12 right-12 font-bold cursor-pointer hover:text-gray-200"
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
                    v-for="(image, i) in images"
                    :key="i"
                    v-show="i == curSlide"
                    @click="modal = false"
                    class="w-full h-full object-contain"
                    :src="preview[i]"
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
//import Compressor from 'compressorjs';
import UploadIcon from '../components/svg/UploadIcon';
import DeleteIcon from './svg/DeleteIcon';
import ZoomIcon from './svg/ZoomIcon';
import StarIcon from './svg/StarIcon';

export default {
    name: 'MultiImgDrop',
    components: {
        UploadIcon,
        DeleteIcon,
        ZoomIcon,
        StarIcon,
    },
    props: {
        images: Array,
    },
    emits: ['update'],
    data() {
        return {
            preview: [],
            dragging: false,
            modal: false,
            curSlide: 0,
            featured: 0,
        };
    },
    computed: {
        notEmpty() {
            return this.images.length > 0;
        },
    },
    methods: {
        drop(event) {
            this.addFiles(event.dataTransfer.files);
            this.dragging = false;
        },
        addFiles(files) {
            const buff = this.images;
            const data = this;

            files.forEach((file) => {
                /*new Compressor(file, {
                    quality: 0.8,
                    success(res) {
                        data.preview.push(URL.createObjectURL(res));
                        data.images.push(res);
                    },
                    error(err) {
                        console.error(err.message);
                    },
                });*/

                data.preview.push(URL.createObjectURL(file));
                buff.push(file);
            });

            this.$emit('update', buff);
        },
        rmvFile(i) {
            if (i < this.featured) {
                this.featured--;
            } else if (i == this.featured) {
                this.featured = 0;
            }

            const buff = this.images;
            buff.splice(i, 1);
        },
        openLightbox(i) {
            this.curSlide = i;
            this.modal = true;
        },
        slide(n) {
            n += this.curSlide;

            if (n < 0) {
                n = this.images.length - 1;
            } else if (n == this.images.length) {
                n = 0;
            }

            this.curSlide = n;
        },
    },
};
</script>

<style lang="scss" scoped>
.zone {
    width: 100%;
    height: 100%;
    background: #f7fafc;
    border: 3px dashed #a3a8b1;
    border-radius: 10px;
    padding: 30px;
    transition: border-color 0.2s ease-out;

    &-active {
        @extend .zone;
        border-color: #a2c1ff;
    }
}

#upload {
    text-align: center;
    position: relative;

    svg {
        width: 150px;
        margin: auto;
        display: block;
    }

    &.notEmpty {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 50px;
            margin-left: 0;
            margin-right: 1rem;
        }
    }
}
</style>
