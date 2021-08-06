<script>
import { h } from 'vue';

export default {
    name: 'MarqueeText',
    props: {
        duration: {
            type: Number,
            default: 15,
        },
        repeat: {
            type: Number,
            default: 2,
            validator: function (val) {
                return val > 0;
            },
        },
        paused: {
            type: Boolean,
            default: false,
        },
        reverse: {
            type: Boolean,
            default: false,
        },
    },
    render() {
        const text = h(
            'div',
            {
                class: 'text',
                style: {
                    animationDuration: `${this.duration}s`,
                    animationDirection: this.reverse ? 'reverse' : undefined,
                },
            },
            this.$slots.default()
        );

        return h(
            'div',
            {
                class: ['wrap'],
            },
            [
                h(
                    'div',
                    {
                        class: [this.paused ? 'paused' : undefined, 'content'],
                    },
                    Array(this.repeat).fill(text)
                ),
            ]
        );
    },
};
</script>

<style scoped>
.wrap {
    overflow: hidden;
}

.content {
    display: flex;
    /* width: 100000px; */
}

.text {
    animation-name: animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
}

.paused .text {
    animation-play-state: paused;
}

@keyframes animation {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
