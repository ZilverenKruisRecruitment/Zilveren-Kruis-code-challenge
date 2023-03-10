<script setup lang="ts">
import Navigation from './Navigation.vue';
</script>

<template>
    <header class="nav-main" id="nav-main" aria-label="navigatie-header">
        <div class="nav-main__skip-links mb-3">
            <a href="#navigatie-overslaan" class="list__link link--no-underline">
                Navigatie overslaan
            </a>
        </div>
        <Navigation />
    </header>
</template>
