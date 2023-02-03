<template>
    <div class="card card--filled-secondary h-auto">
        <div class="card-body">
            <table class="table table-borderless">
                <thead>
                    <h3 class="mb-2">winkelmandje</h3>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Basis Zeker verzekering</strong>
                        </td>
                        <td>130,00</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>€ 385 eigen risico</strong>
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Aanvullende verzekering **</strong>
                        </td>
                        <td>20,00</td>
                    </tr>
                </tbody>
            </table>
            <p>
                <a href="#" class="btn-link">
                    Geen tandartsverzekering geselecteerd
                </a>
            </p>
            <hr />
            <p>Totaal per maand, in 2022</p>
            <h2>€ 150,00</h2>
            <button class="nextBtn">Ja ik wil dit pakket!</button>
        </div>
    </div>
</template>
<style>
small::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin-right: 0.5em;
    background-color: #6ca341;
}
hr {
    border: none;
    border-top: 1px solid #fff;
    width: 100%;
    height: 1px;
    margin: 20px 0;
}
</style>
