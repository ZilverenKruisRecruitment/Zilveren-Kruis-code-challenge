<script setup lang="ts"></script>

<template>
    <div
        id="app"
        class="main-placeholder"
    >
        <!-- HEADER -->
        <header
            class="nav-main"
            id="nav-main"
            aria-label="navigatie-header"
        >
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
                <a
                    href="/consumenten"
                    class="nav-main__logo"
                >
                    <img
                        class="nav-main__logo-img"
                        src="https://www.zilverenkruis.nl/assets/zilverenkruis/img/logo/logo_zilverenkruis.svg"
                        alt="Zilveren Kruis raad en daad logo"
                    />
                </a>
                <nav
                    class="nav-main__main-menu"
                    role="navigation"
                    aria-label="hoofdnavigatie"
                >
                    <ul
                        class="main-menu__list list list--nostyle"
                        id="main-menu__list"
                    >
                        <li
                            class="main-menu__item"
                            data-has-section="false"
                        >
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
                <div class="col-12 col-lg-8">
                    <h1>Aanmelden</h1>

                    <h2>Gegevens</h2>
                    <div class="form-group">
                        <h3>Reden van aanmelding</h3>
                        <div class="form-input my-4">
                            <label
                                id="aanmeldreden-label"
                                class="input__title"
                            >
                                Wat is de reden van uw aanvraag?
                            </label>
                            <div class="input__group">
                                <select class="form-control">
                                    <option>
                                        Nieuwe werkgever met collectiviteit bij
                                        Zilveren Kruis
                                    </option>
                                    <option selected>
                                        Overstappen per 1-1-2023 naar Zilveren
                                        Kruis
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <h3>Persoonlijke gegevens</h3>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">Naam</label>
                                <input
                                    class="input__field form-control"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Tussenvoegsels
                                </label>
                                <input
                                    class="input__field form-control"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">Achternaam</label>
                                <input
                                    class="input__field form-control"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">Geslacht</label>
                                <div class="form-row">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            id="man"
                                            class="radio__input custom-control-input"
                                            type="radio"
                                            name="geslacht"
                                        />
                                        <label
                                            class="radio__label custom-control-label"
                                            for="man"
                                        >
                                            Man
                                        </label>
                                    </div>
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            id="vrouw"
                                            class="radio__input custom-control-input"
                                            type="radio"
                                            name="geslacht"
                                        />
                                        <label
                                            class="radio__label custom-control-label"
                                            for="vrouw"
                                        >
                                            Vrouw
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Geboortedatum
                                </label>
                                <input
                                    class="input__field form-control"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Burgerservicenummer
                                </label>
                                <input
                                    class="input__field form-control is-invalid"
                                    type="text"
                                />
                            </div>
                            <div
                                class="input__feedback invalid-feedback mt-1"
                                aria-live="polite"
                            >
                                <span
                                    >Helaas is het ingevoerde
                                    burgerservicenummer niet geldig. Probeer het
                                    opnieuw.</span
                                >
                            </div>
                        </div>
                    </div>

                    <h2 class="mt-5">Verzekering</h2>
                    <div class="form-group">
                        <h3>Basisverzekering</h3>
                        <p>
                            In Nederland is de basisverzekering verplicht.
                            Iedereen wordt voor de basisverzekering
                            geaccepteerd. De overheid bepaalt welke zorg hierin
                            zit en dit is dus bij elke verzekeraar hetzelfde.
                        </p>
                        <div class="input__group">
                            <label class="input__title">
                                Kies uw basisverzekering
                            </label>
                            <div class="form-row">
                                <div class="radio__tile">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Budget"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-budget"
                                            class="radio__input custom-control-input"
                                        />
                                        <label
                                            for="radio-insurance-basis-budget"
                                            class="radio__label custom-control-label"
                                        >
                                            <p class="radio__description">
                                                Basis Budget
                                            </p>
                                            <p class="radio__price">
                                                € 1.393,26 per jaar
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div class="radio__tile radio__tile--choice">
                                    <div class="badge radio__tile-badge">
                                        Meest gekozen
                                    </div>
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Zeker"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-zeker"
                                            class="radio__input custom-control-input"
                                        />
                                        <label
                                            for="radio-insurance-basis-zeker"
                                            class="radio__label custom-control-label"
                                        >
                                            <p class="radio__description">
                                                Basis Zeker
                                            </p>
                                            <p class="radio__price">
                                                € 1.483,54 per jaar
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div class="radio__tile">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Exclusief (Restitutie)"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-exclusief-(restitutie)"
                                            class="radio__input custom-control-input"
                                        />
                                        <label
                                            for="radio-insurance-basis-exclusief-(restitutie)"
                                            class="radio__label custom-control-label"
                                        >
                                            <p class="radio__description">
                                                Basis Exclusief (Restitutie)
                                            </p>
                                            <p class="radio__price">
                                                € 1.624,62 per jaar
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Kies je betaaltermijn
                                </label>
                                <select class="form-control">
                                    <option>per maand</option>
                                    <option>per kwartaal</option>
                                    <option selected>per jaar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <h3>Eigen risico</h3>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Kies de hoogste van het eigen risico
                                </label>
                                <select class="form-control">
                                    <option>
                                        € 385 - verplicht eigen risico
                                    </option>
                                    <option>
                                        € 885 - korting van € 22 per jaar
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <h3>Aanvullende verzekering</h3>
                        <p>
                            Onze aanvullende verzekeringen kennen ruim 100
                            verschillende vergoedingen. De hoogte van de
                            vergoeding verschilt per pakket.hoogte van de
                            vergoeding verschilt per pakket
                        </p>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Kies uw aanvullende verzekering
                                </label>
                                <select class="form-control">
                                    <option selected>
                                        Geen aanvullende verzekering
                                        geselecteerd
                                    </option>
                                    <option>
                                        Aanvullend 1 - € 21,38 per jaar
                                    </option>
                                    <option>
                                        Aanvullend 2 - € 85,06 per jaar
                                    </option>
                                    <option>
                                        Aanvullend 3 - € 198,63 per jaar
                                    </option>
                                    <option>
                                        Aanvullend 4 - € 359,73 per jaar
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Kies uw tandartsverzekering
                                </label>
                                <select class="form-control">
                                    <option selected>
                                        Geen tandartsverzekering geselecteerd
                                    </option>
                                    <option>Tand 1 - € 80,28 per jaar</option>
                                    <option>Tand 2 - € 221,65 per jaar</option>
                                    <option>Tand 3 - € 449,36 per jaar</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <h2 class="mt-5">Controleren</h2>
                    <div class="form-group">
                        <h3>Gekozen pakket</h3>
                    </div>
                    <div class="form-group">
                        <h3>Totaalpremie</h3>
                    </div>
                    <div class="form-group">
                        <h3>Adres en contactgegevens</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <div class="footer-placeholder">
            <footer
                class="footer"
                role="contentinfo"
            >
                <!-- BEGIN NOINDEX -->
                <section class="footer-section footer-section--horizontal">
                    <div class="container">
                        <div
                            class="d-flex justify-content-between align-items-center my-auto"
                        >
                            <ul
                                class="list list--nostyle list--horiz d-flex mb-5 mb-xl-0"
                            >
                                <li class="list__item mb-0">
                                    <a
                                        href="/consumenten/disclaimer"
                                        class="list__link"
                                        >disclaimer</a
                                    >
                                </li>
                                <li class="list__item mb-0">
                                    <a
                                        href="/consumenten/privacy"
                                        class="list__link"
                                        >privacy</a
                                    >
                                </li>
                                <li class="list__item mb-0">
                                    <a
                                        href="/consumenten/veiligheid"
                                        class="list__link"
                                        >veiligheid</a
                                    >
                                </li>
                                <li class="list__item mb-0">
                                    <a
                                        href="/consumenten/cookies"
                                        class="list__link"
                                        >cookies</a
                                    >
                                </li>
                                <li class="list__item mb-0">
                                    <a
                                        href="http://www.wijzeringeldzaken.nl/verzekering/"
                                        class="list__link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >wijzer in geldzaken</a
                                    >
                                </li>
                                <li class="list__item mb-0">
                                    <a
                                        href="https://nieuws.zilverenkruis.nl/"
                                        class="list__link"
                                        >pers</a
                                    >
                                </li>
                                <li class="list__item">
                                    <span class="surfly-button"></span>
                                </li>
                            </ul>

                            <div
                                class="buttons-social buttons-social--embed buttons-social--no-bg-color"
                            >
                                <ul class="buttons-social__list">
                                    <li class="buttons-social__listitem">
                                        <a
                                            href="https://www.facebook.com/zilverenkruis"
                                            class="buttons-social__link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span
                                                class="screenreader-only"
                                            ></span>
                                            <svg
                                                class="icon buttons-social__icon"
                                                aria-hidden="true"
                                            >
                                                <use
                                                    xlink:href="#sprite-facebook"
                                                ></use>
                                            </svg>
                                        </a>
                                    </li>

                                    <li class="buttons-social__listitem">
                                        <a
                                            href="https://twitter.com/zilverenkruis"
                                            class="buttons-social__link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span
                                                class="screenreader-only"
                                            ></span>
                                            <svg
                                                class="icon buttons-social__icon"
                                                aria-hidden="true"
                                            >
                                                <use
                                                    xlink:href="#sprite-twitter"
                                                ></use>
                                            </svg>
                                        </a>
                                    </li>

                                    <li class="buttons-social__listitem">
                                        <a
                                            href="https://samen.zilverenkruis.nl/"
                                            class="buttons-social__link"
                                        >
                                            <span
                                                class="screenreader-only"
                                            ></span>
                                            <svg
                                                class="icon buttons-social__icon"
                                                aria-hidden="true"
                                            >
                                                <use
                                                    xlink:href="#sprite-community"
                                                ></use>
                                            </svg>
                                        </a>
                                    </li>

                                    <li class="buttons-social__listitem">
                                        <a
                                            href="https://www.youtube.com/user/zilverenkruisachmea"
                                            class="buttons-social__link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span
                                                class="screenreader-only"
                                            ></span>
                                            <svg
                                                class="icon buttons-social__icon"
                                                aria-hidden="true"
                                            >
                                                <use
                                                    xlink:href="#sprite-youtube"
                                                ></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div
                                class="text__branding text-center text-md-right pb-4 pb-md-0"
                            >
                                <span>Zilveren Kruis is onderdeel van</span>
                                <svg
                                    class="icon footer__label-icon"
                                    alt="Logo Achmea"
                                >
                                    <use xlink:href="#sprite-achmea"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- END NOINDEX -->
            </footer>
        </div>
    </div>
</template>
