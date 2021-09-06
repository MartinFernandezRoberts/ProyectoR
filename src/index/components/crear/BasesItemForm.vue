<template>
    <form class="flex flex-col space-y-3">
        <div class="p-6 rounded bg-white space-y-2">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, repellat enim! Numquam nobis fuga exercitationem
                veritatis ratione autem, provident delectus commodi maiores
                officiis, quam officia dignissimos enim labore tenetur
                temporibus natus assumenda consequatur eum voluptatum explicabo
                eaque. Dolorem facilis voluptas omnis officia expedita ea
                voluptatum blanditiis quos inventore quibusdam, eos natus
                consectetur illum sit nobis animi autem perferendis repellendus.
                Ducimus eius consectetur dicta possimus animi nobis ullam quod
                facilis soluta, cum esse, alias voluptate similique accusamus
                odio minima harum recusandae amet sit quae velit! Dolorem nisi,
                obcaecati repudiandae nostrum culpa modi ut facilis ex doloribus
                est. Dolor eveniet nobis quae?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, repellat enim! Numquam nobis fuga exercitationem
                veritatis ratione autem, provident delectus commodi maiores
                officiis, quam officia dignissimos enim labore tenetur
                temporibus natus assumenda consequatur eum voluptatum explicabo
                eaque. Dolorem facilis voluptas omnis officia expedita ea
                voluptatum blanditiis quos inventore quibusdam, eos natus
                consectetur illum sit nobis animi autem perferendis repellendus.
                Ducimus eius consectetur dicta possimus animi nobis ullam quod
                facilis soluta, cum esse, alias voluptate similique accusamus
                odio minima harum recusandae amet sit quae velit! Dolorem nisi,
                obcaecati repudiandae nostrum culpa modi ut facilis ex doloribus
                est. Dolor eveniet nobis quae?
            </p>
        </div>

        <div class="text-right">
            <input
                class="h-4 w-4"
                id="bases"
                type="checkbox"
                :checked="bases.bases"
                @change="
                    $emit('update', 'bases', 'bases', $event.target.checked)
                "
            />

            <label
                class="ml-3 text-gray-700 text-sm font-bold mb-2"
                for="bases"
            >
                Acepto
            </label>

            <small
                v-show="errores.bases"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-rojo
                    text-center text-white
                "
                >{{ errores.bases }}</small
            >
        </div>
    </form>
</template>

<script>
export default {
    name: 'BasesItemForm',
    props: {
        bases: Object,
        errores: Object,
    },
    emits: ['update'],
};
</script>
