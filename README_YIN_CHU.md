# Zilveren Kruis Code Challenge - Yin Chu Rijnaard

Beste recruiter,

In deze README leg ik kort uit welke stappen ik heb doorlopen om deze opdracht (hopelijk) zo goed mogelijk uit te voeren.

## Stappen

-   Twee korte videos op YouTube bekeken over hoe form control werkt in Vue.js (omdat ik alleen ervaring heb met form control in React.js).
-   Ervoor gezorgd dat alle data succesvol wordt opgeslagen in state.
-   Gelezen hoe folder structuur precies werkt in Vue.js, inclusief naming convention.
-   Begonnen met het creëren van een component voor de Header en de Footer. (Opmerking: jullie footer was in eerste instatie een `div` + een `footer` tag. In de desbetreffende component heb ik één `footer` tag geplaatst onder de `template` tag en de bestaande `footer` tag veranderd in een `div` tag. (Deed ik dat niet, dan kreeg ik de error "template should contain exactly one root element").
-   Een derde component aangemaakt voor het aanmeldformulier. Nogmaals getest of de ingevulde gegevens worden opgeslagen in state.
-   VeeValidate toegevoegd ((nog) niet gebruikt)).
-   Moment.js gebruikt om de datum correct(er) weer te geven.

## Uitdagingen (niet gelukt)

-   Conditionally render tussenvoegsels én de spatie daarnaast (nu staan er twee spaties). Met React zou ik het zo aanpakken (met benaming zoals in deze Vue app voor extra duidelijkheid):

```js
{tussenvoegsels.length > 0 && <span>{tussenvoegsels&nbsp;}</span>}

// tussenvoegsels derived from state (object)
```

-   Informatie op het einde pas weergeven als alles is ingevuld. Met React zou ik het zo aanpakken:

```js
// E.g., use a package like react-hook-form (much like VeeValidate)

const [filledOut, setIsFilledOut] = React.useState(false);

// Make sure to set filledOut to true if every required field is filled out
// When filledOut is true, conditionally render the overview with information
```

-   Alleen eigen risico kiezen als je een basisverzekering hebt Gekozen (tijdgebrek).
-   BSN validatie (tijdgebrek). Met React zou ik het zo aanpakken:

```js
const [bsn, setBsn] = React.useState(0)

// In the JSX

<>
    {bsn.length > 9 && <span>Error message</span>}
</>

// bsn derived from state
```

## Opmerking

-   Ik heb geen Routes opgezet omdat ik hier (ook) geen tijd voor had. Ik kan met redelijke zekerheid zeggen dat dit mij prima zou zijn gelukt, aangezien routing niet dermate lastig(er) kan zijn zoals in React met bijv. React Router
-   Ik heb mij echt proberen te houden aan de max. van 4 uur, zie: https://imgur.com/a/eb20Ute
-   Ik heb (nog) geen tests geschreven omdat ik dit nog nooit heb gedaan en dit dus ook nog niet kan.
