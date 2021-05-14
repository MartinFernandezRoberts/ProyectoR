<template>
    <div class="container mx-auto">
        <button @click="images.length = featured = 0">reset</button>

        <div
            :class="'zone' + (hovering ? '-active' : '')"
            @dragover.prevent="hovering = true"
            @dragleave.prevent="hovering = false"
            @drop.prevent="drop($event)"
        >
            <div id="upload" :class="{ notEmpty: notEmpty }">
                <UploadIcon />

                <input
                    type="file"
                    style="z-index: 1"
                    accept="image/*"
                    ref="uploadInput"
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
                        :src="image.preview"
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
                    :src="image.preview"
                    :alt="`imagen ${i}`"
                />
            </div>

            <a class="cursor-pointer p-8 text-white font-bold" @click="slide(1)"
                >&#10095;</a
            >
        </div>

        <button @click="upload">enviar</button>
    </div>
</template>

<script>
import Compressor from 'compressorjs';
import axios from 'axios';
import UploadIcon from '../components/svg/UploadIcon';
import DeleteIcon from './svg/DeleteIcon';
import ZoomIcon from './svg/ZoomIcon';
import StarIcon from './svg/StarIcon';

export default {
    name: 'ImgDrop',
    components: {
        UploadIcon,
        DeleteIcon,
        ZoomIcon,
        StarIcon,
    },
    data() {
        return {
            images: [],
            hovering: false,
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
            this.hovering = false;
        },
        addFiles(files) {
            const data = this;

            files.forEach((file) => {
                new Compressor(file, {
                    quality: 0.8,
                    success(res) {
                        res.preview = URL.createObjectURL(res);
                        data.images.push(res);
                    },
                    error(err) {
                        console.error(err.message);
                    },
                });
            });
        },
        rmvFile(i) {
            if (i < this.featured) {
                this.featured--;
            } else if (i == this.featured) {
                this.featured = 0;
            }

            this.images.splice(i, 1);
        },
        upload() {
            let formData = new FormData();
            formData.append('files', this.images);

            if (this.images.length > 0) {
                axios
                    .post(
                        'http://localhost:3000/api/imagen/file-upload',
                        formData,
                        {
                            headers: { 'content-type': 'multipart/form-data' },
                        }
                    )
                    .then((res) => console.log(res))
                    .catch((err) => console.error(err));
            }
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

    input {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        background: red;

        &:hover {
            cursor: pointer;
        }
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

.box__dragndrop,
.box__uploading,
.box__success,
.box__error {
    display: none;
}
</style>
