<template>
    <div id="app" class="main-placeholder">
        <!-- HEADER -->
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
                <a href="/consumenten" class="nav-main__logo">
                    <img
                        class="nav-main__logo-img"
                        src="https://www.zilverenkruis.nl/assets/zilverenkruis/img/logo/logo_zilverenkruis.svg"
                        alt="Zilveren Kruis raad en daad logo"
                    />
                </a>
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

        <!-- CONTENT HERE -->
        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <InsuranceSignUp />
                </div>
                <div class="col-4">
                    <div class="card card--filled-secondary h-auto">
                        <div class="card-body">
                            <div class="sf-contactblok-content">
                                <h3 class="mb-2">We staan voor je klaar</h3>
                                <p class="mb-5">
                                    Twijfel je? Heb je een vraag?
                                </p>
                                <div class="phonenumber mb-2">
                                    <a href="tel:0900 040 03 09">
                                        <span class="sr-only">
                                            Telefoonnummer
                                        </span>
                                        0900 040 03 09
                                    </a>
                                    <div class="popover__container ml-1">
                                        <button
                                            id="info-phone"
                                            type="button"
                                            class="btn popover__btn btn--popover btn-none"
                                        >
                                            <span class="sr-only">
                                                Informatie weergeven
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <small>
                                    Open op maandag t/m vrijdag van 08:00 tot
                                    17:00
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <div class="ratingbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4 ratingbar__rating">
                        <a
                            href="https://www.independer.nl/zorgverzekering/fi/zilveren-kruis-ac.aspx"
                            class=""
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="https://www.zilverenkruis.nl/-/media/zilverenkruis/images/shared/independer.png?rev=bb0602912ded4b16adc221025f3fc010&amp;h=80&amp;w=80&amp;la=nl-NL&amp;hash=39DBF59680B0FEECA97C6C786FC7DE67"
                                class="ratingbar__icon"
                                alt="Independer"
                                title="Independer"
                            />
                        </a>
                        <span>
                            <span class="ratingbar__ratings-number"> 7,8 </span>
                            <span class="ratingbar__ratings-text">
                                op Independer
                            </span>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 ratingbar__rating">
                        <span>
                            <span class="ratingbar__ratings-number">
                                3,8 miljoen
                            </span>
                            <span class="ratingbar__ratings-text">
                                klanten gingen u voor
                            </span>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 ratingbar__rating">
                        <a
                            href="/consumenten/service/declareren/zilveren-kruis-app"
                            class=""
                        >
                            <img
                                src="https://www.zilverenkruis.nl/-/media/zilverenkruis/images/app-logo/app_icon.png?rev=8665a8133399403b92b34eaada19bd46&amp;h=80&amp;w=80&amp;la=nl-NL&amp;hash=70AB973D0AB046A6EFA670CB38F2BF2E"
                                class="ratingbar__icon"
                                alt="Logo Zilveren Kruis-app"
                            />
                        </a>
                        <span>
                            <span class="ratingbar__ratings-number"> 4,5 </span>
                            <span class="ratingbar__ratings-text">
                                beoordeling in App Store
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <footer class="main-footer" role="contentinfo">
            <div class="container main-footer__grid">
                <ul
                    class="main-footer__links-section list list--nostyle list--horiz d-flex"
                >
                    <li class="list__item">
                        <a href="/consumenten/disclaimer" class="list__link"
                            >disclaimer
                        </a>
                    </li>
                    <li class="list__item">
                        <a href="/consumenten/privacy" class="list__link"
                            >privacy
                        </a>
                    </li>
                    <li class="list__item">
                        <a href="/consumenten/veiligheid" class="list__link"
                            >veiligheid
                        </a>
                    </li>
                    <li class="list__item">
                        <a href="/consumenten/cookies" class="list__link"
                            >cookies
                        </a>
                    </li>
                    <li class="list__item">
                        <a
                            href="https://www.wijzeringeldzaken.nl/verzekering/"
                            class="list__link"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            wijzer in geldzaken
                        </a>
                    </li>
                </ul>
                <div class="main-footer__label-description">
                    <span>Zilveren Kruis is onderdeel van Achmea</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import InsuranceSignUp from '@/forms/insurance_signup_form/SignUp'

export default {
    name: 'App',
    components: {
        InsuranceSignUp
    }
};
</script>

<style lang="scss"></style>
