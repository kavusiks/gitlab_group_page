# IT2810 Prosjekt 2 - Gitlab group page

Dette er et prosjekt i IT2810 der det er laget en SPA for å vise fram diverse informasjon hentet fra [Gitlab API v4](https://docs.gitlab.com/ee/api/)

## Om applikasjonen

Applikasjon er webapplikasjon implementert med React-komponenter i TypeScript. Brukeren logger inn ved å oppgi Group ID av et prosjekt brukeren vil ha innsyn i. Brukeren må også oppgi en "Auth"-token generert enten med tilknytning til gitlab-brukeren eller prosjektet. I webapplikasjonen kan man se blant annet alle labels på issues og alle commits gjort. Denne informasjonen blir hentet med API-kall og lagret i &&&&&&&&&&&

### Hvordan kjøre applikasjonen

For å kjøre applikasjonen, må en klone repoet med git eller kopiere filene lokalt. Fra rotfila, kjør:

- `cd /gitlab-group-page/`

og installer med

- `npm install` eller `yarn install`

Start applikasjonen på din lokale maskin med

- `npm start` eller `yarn start`

Da vil applikasjonen kjøre på

- `localhost:3000`

Kompiler og bygg react-applikasjonen for eksportering med

- `npm run build` eller `yarn run build`

## Arkitektur og kodevalg

Vi har valgt å implementere applikasjonen i React med TypeScript i henhold til kravene i oppgavebeskrivelsen. Koden er skrevet i TypeScript, men med jsx-syntax som er tilrettelagt react. Vi har valgt pakkehåndtereren yarn med Node.js for å kompilere applikasjonen til javascript med babel. Yarn er på lik linje med npm en effektiv og stabil pakkehåndterer og bruker lik teknologi. Vi har også valgt å bruke pipeline som tester og builder applikasjonen til å støtte oss på en mer streamlined utvikling der en slipper å forholde seg til teknologiforskjeller hos utviklerene.

## Prosjektstruktur

React-applikasjonen har rot i `/gitlab-group-page/gitlab-group-page` og her blir applikasjonen bygget. I rotmappen til repoet `/gitlab-group-page/` ligger konfigurasjonsfiler for gitlab.

## Valg av løsninger

### Komponentvalg

Vi har valgt å skrive brorparten av komponentene fra bunnen av for å vise forståelse av både klassekomponenter og funksjonelle komponenter i React. Vi har hovedsaklig brukt funksjonelle komponenter ettersom de er både lettere å skrive og teste, ofte med mindre kode. Det er også enklere å utføre "best practice". Det er blant annet lettere å skille mellom container-komponenter og komponenter brukt til presentasjon. En tredje grunn er fordi en i likhet med klassekomponenter Det er likevel også brukt klassekomponenter

### ContextAPI

ContextAPI har blitt brukt for ta vare på global dataer. Vi bruker det for å ta vare på prosjektnavn, id og prosjektbeskrivelse. Dette er fordi denne infoen skal vises i hver view. Vi slipper dermed å måtte sende videre states gjennom props mellom komponentene som deler samme innhold. De globale statsene og deres set-metodet er lagret øverst i hierarkiet i App.tsx. Deretter legges child-elementene, altå de komponentene under i hierarkiet som vil trenge denne dataen ligger i en felles Provider-komponent.

### Bruk av props og state

State brukes for å lagre data i komponentene. Dette er data som kan endrs, og vi har i de fleste tilfeller hooken useState som setter verdiene på state-variablene. Props brukes for å sende data nedover i hierarkiet av komponenter. I IssueView.tsx har det blitt definert prop som skal brukes av en komponenten IssueView. I ProjectContext.tsx ser man et eksempel på en prop med litt mer innhold.

### API-requests til gitlab

API-kall blir gjort med predefinerte funksjoner i filen `APIfunctions.ts`. Her har vi brukt AJAX-implementering til javascript i TypeScript, med async- og await-syntaksen. Denne syntaksen er overraskende enkelt å implementere og gjør håntering av API-kall overraskende enkelt med Promise-typer. Med dette unngår vi å eksplisitt både å håndtere og skrive kjeder av Promiser. Dermed kan vi ta i bruk fetch()-funksjonen som utfører API-kallet uten bruk av eksterne pakker eller tredjepartsbiblioteker. Da unngår vi unødvendig installasjon av flere pakker.

### Bruk av HTML Web Storage

HTML Web Storage har blitt brukt for å lagre nåde JSON-objeketer og mer konkrete verdier som er nyttig for appen. Dette er med på å redusere API-calls.

Vi har benyttet oss av både localStorage og sessionStorage. Førstnevnte har innholdet lagret så i ubegrenset tid, mens den andre glemmer innholdet når fanen lukkes. Vi har valgt å lagre innhold som vises(labels, issuet) gjennom sessionStorage. Dette er for å redusere api-kall hver gang man blar gjennom sidene. Mens når man lukker fanen og åpner på nytt kan det være greit å kjøre et nytt api-kall som henter ny data. Detter er fordi ny data kommwe oftest mellom ulike økter, og ikke nødvendigvis mens en sitter og sjekker sida. I localstorage har vi lagret litt authentiseringsinfo som gruppeid, accesstoken. Dette er data som ikke endres ofte på lang tid. Men dersom tokenen går ut, vil brukeren måtte authentisere seg på nytt med ny token.

### Stylingvalg (CSS)

### Responsive design

### Testing

Vi har snapshot-tester av noen av komponentene. I tillegg testes noen av elementene og funksjonaliteten i LogIn-komponenten. Testene er konfigurert med jest og utført med jest-rammeverket. Vi har også brukt Enzyme-adapter for å enkelt rendre komponentene som skal testes med jest. Enzyme er en utrolig lettvint måte å hente ut enkelt rendrede komponenter uten å adaptere lifecycle-funksjonaliteten og state forøvrig. Dette er noe vi ikke tester ettersom det ikke er i kravene. Jest kommer allerede konfigurert med standard React-oppsett, og det gjør Jest til et naturlig valg innen testing.

### Deploying

Webapplikasjonen er deployet på IDI sine servere og på gitlab pages (foreløpig):

- https://it2810-29.idi.ntnu.no
- https://it2810-h21.pages.stud.idi.ntnu.no/team-29/gitlab-group-page/

Applikasjonen blir deployet til Pages ved hver commit.

### Utvikling

Utviklingen er gjort på gitlab med git. Vi har aktivt brukt hensiktsmessige issues, utfyllende commitmeldinger og passende gitlab-konvensjon for å holde orden på utviklingsoppgaver og arbeidsfordeling.
