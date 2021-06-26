<template>
    <div
        id="upload"
        :class="[
            'relative w-full h-full mx-auto p-6 bg-gray-50 border-4 border-dashed border-gray-300 rounded-lg transition-colors duration-200 ease-out',
            { ' border-blue-200': dragging },
        ]"
        @dragover.prevent="dragging = hovering = true"
        @dragleave.prevent="dragging = hovering = false"
        @drop.prevent="drop($event)"
    >
        <input
            class="w-full h-full opacity-0 absolute inset-0 z-20 cursor-pointer"
            type="file"
            accept="image/*"
            @change="(e) => addFile(e.target.files[0])"
            @mouseenter="hovering = true"
            @mouseleave="hovering = false"
        />

        <div class="relative">
            <img
                class="w-full object-contain rounded-lg shadow-inner"
                :src="preview"
                alt=""
            />

            <div
                :class="[
                    'flex flex-col justify-center items-center text-center rounded-lg transition-all duration-300 ease-out',
                    preview
                        ? ' absolute inset-0 z-10 bg-black text-gray-200' +
                          (hovering
                              ? ' opacity-100 bg-opacity-50'
                              : ' opacity-0')
                        : ' text-gray-500',
                ]"
            >
                <UploadIcon class="w-36" />

                <p>Haz click o arrastra tu imagen aquí</p>
            </div>
        </div>
    </div>
</template>

<script>
import UploadIcon from '../components/svg/UploadIcon.vue';

export default {
    name: 'ImgDropSingle',
    components: { UploadIcon },
    props: ['image'],
    emits: ['update'],
    data() {
        return {
            preview: '',
            dragging: false,
            hovering: false,
        };
    },
    methods: {
        drop(event) {
            this.addFile(event.dataTransfer.files[0]);
            this.dragging = false;
        },
        addFile(file) {
            this.preview = URL.createObjectURL(file);
            this.$emit('update', file);
        },
    },
};
</script>
