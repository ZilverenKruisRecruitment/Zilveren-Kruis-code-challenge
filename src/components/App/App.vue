<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSection from "@/components/Header.vue"
import FooterSection from "@/components/Footer.vue"
</script>

<template>
    <HeaderSection />
    <RouterView />
    <FooterSection />
</template>
<style>
</style>
