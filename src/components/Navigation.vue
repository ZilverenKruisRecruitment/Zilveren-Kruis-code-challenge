<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="nav-main__grid container">
        <!--LOGO-->
        <RouterLink to="/consumenten" class="nav-main__logo">
            <img class="nav-main__logo-img"
                src="https://www.zilverenkruis.nl/assets/zilverenkruis/img/logo/logo_zilverenkruis.svg"
                alt="Zilveren Kruis raad en daad logo" />
        </RouterLink>
        <div class="nav-main__top-selections">
            <RouterLink to="/zakelijk" class="nav-main__desktop link link--no-underline nav-main__desktop">
                Zakelijk
            </RouterLink>
            <RouterLink to="/zorgaanbieders" class="nav-main__desktop link link--no-underline nav-main__desktop">
                Voor zorgaanbieders
            </RouterLink>
            <RouterLink to="/overons" class="nav-main__desktop link link--no-underline nav-main__mobile">
                Over ons
            </RouterLink>
            <RouterLink to="/overons/pers" class="nav-main__desktop link link--no-underline nav-main__mobile">
                Pers
            </RouterLink>
        </div>
        <nav class="nav-main__main-menu" role="navigation" aria-label="hoofdnavigatie">
            <ul class="main-menu__list list list--nostyle" id="main-menu__list">
                <li class="main-menu__item" data-has-section="false">
                    <RouterLink to="/consumenten" class="main-menu__title link--no-underline"
                        title="Naar de homepage van Zilveren Kruis voor consumenten">
                        Home
                    </RouterLink>
                </li>
                <li class="main-menu__item" data-has-section="true" data-section-count="3">
                    <RouterLink to="#" class="main-menu__title link--no-underline" aria-haspopup="true" aria-expanded="false">
                        Verzekeringen
                    </RouterLink>
                </li>
                <li class="main-menu__item" data-has-section="true" data-section-count="2">
                    <RouterLink to="#" class="main-menu__title link--no-underline" aria-haspopup="true" aria-expanded="false">
                        Vergoedingen
                    </RouterLink>
                </li>
                <li class="main-menu__item" data-has-section="true" data-section-count="2">
                    <RouterLink to="#" class="main-menu__title link--no-underline" aria-haspopup="true" aria-expanded="false">
                        Zorg regelen
                    </RouterLink>
                </li>
                <li class="main-menu__item" data-has-section="true" data-section-count="1">
                    <RouterLink to="#" class="main-menu__title link--no-underline" aria-haspopup="true" aria-expanded="false">
                        Betalen
                    </RouterLink>
                </li>
                <li class="main-menu__item" data-has-section="true" data-section-count="2">
                    <RouterLink to="#" class="main-menu__title link--no-underline" aria-haspopup="true" aria-expanded="false">
                        Gezonder leven
                    </RouterLink>
                </li>
                <li class="main-menu__item" data-has-section="true" data-section-count="1">
                    <RouterLink to="#" class="main-menu__title link--no-underline" aria-haspopup="true" aria-expanded="false">
                        Service &amp; Contact
                    </RouterLink>
                </li>
                <li class="main-menu__item nav-main__mobile" data-has-section="false">
                    <RouterLink to="/zakelijk" class="main-menu__title link--no-underline nav-main__desktop">
                        Zakelijk
                    </RouterLink>
                </li>
                <li class="main-menu__item nav-main__mobile" data-has-section="false">
                    <RouterLink to="/zorgaanbieders" class="main-menu__title link--no-underline nav-main__desktop">
                        Voor zorgaanbieders
                    </RouterLink>
                </li>
                <li class="main-menu__item nav-main__mobile" data-has-section="false">
                    <a href="https://www.zilverenkruis.nl/en/consumenten" class="main-menu__title link--no-underline">
                        English
                    </a>
                </li>
                <li class="main-menu__item nav-main__mobile" data-has-section="false">
                    <RouterLink to="/overons" class="main-menu__title link--no-underline nav-main__mobile">
                        Over ons
                    </RouterLink>
                </li>
                <li class="main-menu__item nav-main__mobile" data-has-section="false">
                    <RouterLink to="/overons/pers" class="main-menu__title link--no-underline nav-main__mobile">
                        Pers
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </div>
    <a id="navigatie-overslaan" name="navigatie-overslaan" tabindex="-1"></a>
</template>
