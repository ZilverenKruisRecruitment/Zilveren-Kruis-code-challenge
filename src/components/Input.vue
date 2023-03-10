<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // type inference enabled
    props: {
        name: String,
        id: [Number, String],
        msg: { type: String, required: true },
        metadata: null
    },
    mounted() {
        this.name // type: string | undefined
        this.id // type: number | string | undefined
        this.msg // type: string
        this.metadata // type: any
    }
})
</script>

<template>
</template>
