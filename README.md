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

### Bruk av props og state

### API-requests til gitlab
API-kall blir gjort med predefinerte funksjoner i filen `APIfunctions.ts`. Her har vi brukt AJAX-implementering til javascript i TypeScript, med async- og await-syntaksen. Denne syntaksen er overraskende enkelt å implementere og gjør håntering av API-kall overraskende enkelt med Promise-typer. Med dette unngår vi å eksplisitt både å håndtere og skrive kjeder av Promiser. Dermed kan vi ta i bruk fetch()-funksjonen som utfører API-kallet uten bruk av eksterne pakker eller tredjepartsbiblioteker. Da unngår vi unødvendig installasjon av flere pakker. 
### Bruk av HTML Web Storage

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