<script lang="ts">
import { defineComponent } from 'vue'
import RatingBar from "@/components/RatingBar.vue"

export default defineComponent({
    components: { RatingBar }
})
</script>

<template>
    <RatingBar />
    <footer class="main-footer" role="contentinfo">
        <div class="container main-footer__grid">
            <ul class="main-footer__links-section list list--nostyle list--horiz d-flex">
                <li class="list__item">
                    <a href="/consumenten/disclaimer" class="list__link">disclaimer
                    </a>
                </li>
                <li class="list__item">
                    <a href="/consumenten/privacy" class="list__link">privacy
                    </a>
                </li>
                <li class="list__item">
                    <a href="/consumenten/veiligheid" class="list__link">veiligheid
                    </a>
                </li>
                <li class="list__item">
                    <a href="/consumenten/cookies" class="list__link">cookies
                    </a>
                </li>
                <li class="list__item">
                    <a href="https://www.wijzeringeldzaken.nl/verzekering/" class="list__link" rel="noopener noreferrer"
                        target="_blank">
                        wijzer in geldzaken
                    </a>
                </li>
            </ul>
            <div class="main-footer__label-description">
                <span>Zilveren Kruis is onderdeel van Achmea</span>
            </div>
        </div>
    </footer>
</template>
