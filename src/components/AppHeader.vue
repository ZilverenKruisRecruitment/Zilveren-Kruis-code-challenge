<template>
    <header class="nav-main" id="nav-main" aria-label="navigatie-header">
        <div class="nav-main__skip-links mb-3">
            <a
                href="#navigatie-overslaan"
                class="list__link link--no-underline"
            >
                Navigatie overslaan
            </a>
        </div>
        <div class="nav-main__grid container">
            <!--LOGO-->
            <SiteLogo />
            <div class="nav-main__top-selections">
                <a
                    href="/zakelijk"
                    class="nav-main__desktop link link--no-underline nav-main__desktop"
                >
                    Zakelijk
                </a>
                <a
                    href="/zorgaanbieders"
                    class="nav-main__desktop link link--no-underline nav-main__desktop"
                >
                    Voor zorgaanbieders
                </a>
                <a
                    href="/overons"
                    class="nav-main__desktop link link--no-underline nav-main__mobile"
                >
                    Over ons
                </a>
                <a
                    href="/overons/pers"
                    class="nav-main__desktop link link--no-underline nav-main__mobile"
                >
                    Pers
                </a>
            </div>
            <nav
                class="nav-main__main-menu"
                role="navigation"
                aria-label="hoofdnavigatie"
            >
                <ul
                    class="main-menu__list list list--nostyle"
                    id="main-menu__list"
                >
                    <li class="main-menu__item" data-has-section="false">
                        <a
                            href="/consumenten"
                            class="main-menu__title link--no-underline"
                            title="Naar de homepage van Zilveren Kruis voor consumenten"
                        >
                            Home
                        </a>
                    </li>
                    <li
                        class="main-menu__item"
                        data-has-section="true"
                        data-section-count="3"
                    >
                        <a
                            href="#"
                            class="main-menu__title link--no-underline"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Verzekeringen
                        </a>
                    </li>
                    <li
                        class="main-menu__item"
                        data-has-section="true"
                        data-section-count="2"
                    >
                        <a
                            href="#"
                            class="main-menu__title link--no-underline"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Vergoedingen
                        </a>
                    </li>
                    <li
                        class="main-menu__item"
                        data-has-section="true"
                        data-section-count="2"
                    >
                        <a
                            href="#"
                            class="main-menu__title link--no-underline"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Zorg regelen
                        </a>
                    </li>
                    <li
                        class="main-menu__item"
                        data-has-section="true"
                        data-section-count="1"
                    >
                        <a
                            href="#"
                            class="main-menu__title link--no-underline"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Betalen
                        </a>
                    </li>
                    <li
                        class="main-menu__item"
                        data-has-section="true"
                        data-section-count="2"
                    >
                        <a
                            href="#"
                            class="main-menu__title link--no-underline"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Gezonder leven
                        </a>
                    </li>
                    <li
                        class="main-menu__item"
                        data-has-section="true"
                        data-section-count="1"
                    >
                        <a
                            href="#"
                            class="main-menu__title link--no-underline"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Service &amp; Contact
                        </a>
                    </li>
                    <li
                        class="main-menu__item nav-main__mobile"
                        data-has-section="false"
                    >
                        <a
                            href="/zakelijk"
                            class="main-menu__title link--no-underline nav-main__desktop"
                        >
                            Zakelijk
                        </a>
                    </li>
                    <li
                        class="main-menu__item nav-main__mobile"
                        data-has-section="false"
                    >
                        <a
                            href="/zorgaanbieders"
                            class="main-menu__title link--no-underline nav-main__desktop"
                        >
                            Voor zorgaanbieders
                        </a>
                    </li>
                    <li
                        class="main-menu__item nav-main__mobile"
                        data-has-section="false"
                    >
                        <a
                            href="https://www.zilverenkruis.nl/en/consumenten"
                            class="main-menu__title link--no-underline"
                        >
                            English
                        </a>
                    </li>
                    <li
                        class="main-menu__item nav-main__mobile"
                        data-has-section="false"
                    >
                        <a
                            href="/overons"
                            class="main-menu__title link--no-underline nav-main__mobile"
                        >
                            Over ons
                        </a>
                    </li>
                    <li
                        class="main-menu__item nav-main__mobile"
                        data-has-section="false"
                    >
                        <a
                            href="/overons/pers"
                            class="main-menu__title link--no-underline nav-main__mobile"
                        >
                            Pers
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <a
            id="navigatie-overslaan"
            name="navigatie-overslaan"
            tabindex="-1"
        ></a>
    </header>
</template>

<script>
import SiteLogo from './SiteLogo';

export default {
    name: 'HeaderNav',
    components: {
        SiteLogo
    }
};
</script>
