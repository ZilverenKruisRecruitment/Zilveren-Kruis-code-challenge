<template>
    <div class="card card--filled-secondary h-auto">
        <div class="card-body">
            <div class="sf-contactblok-content">
                <h3 class="mb-2">We staan voor je klaar</h3>
                <p class="mb-5">Twijfel je? Heb je een vraag?</p>
                <div class="phonenumber mb-2">
                    <a href="tel:0900 040 03 09" class="btn-link">
                        <span class="sr-only"> Telefoonnummer </span>
                        0900 040 03 09
                    </a>
                </div>
                <small> Open op maandag t/m vrijdag van 08:00 tot 17:00 </small>
                <p>
                    <a href="#" class="btn-link">Stel je vraag via Chat</a>
                </p>
            </div>
        </div>
    </div>
</template>
<style>
.btn-link {
    text-decoration: none;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    color: #0068bd;
}
small::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin-right: 0.5em;
    background-color: #6ca341;
}
</style>
