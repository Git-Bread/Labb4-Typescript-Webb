# Labb4Webb
## Funktionalitet
Läser in alla object som finns lagrade på api webbsidan varefter dessa skrivs ut i en tabell som sedan kan sökas emellean och sorteras, thats about it.

## Utväcklingsprocessen
Återanvände en tidigare uppgift som var liknande för grund html och css samt sök funktionen (dessa behövde modifieras en bit för nya format men overall så behövdes inte mycket ändras). Skapade ett nytt angular projekt med en ny komponent för upppgiften.
Varefter jag skapade den första servicen vilket var en service som använder httpClient för att kontakta och hämta information ifrån den angivna apin, fixade orginellt med en normal fetch men detta var mycket smidigare och ett uppgiftskrav dessutom.

Efter denna service skapades så kallas den ifrån komponenten och skriver ut inehållet med hjälp utav en ngfor loop i html filen. Detta saknade däremot en viss del strikthet så jag byggde en interface för objekten för enklare manipulation och mindre "data slös". När detta var finaliserat så började jag med att skapa de enkla filtreringsprocesserna vilket dög bra med sort funktioner ifrån javascript. Varefter dessa flyttades till en ny service då detta verkade passande och slogs ihop med en funktion för att söka igenom listan som bygger på en compare som upprepas för alla möjiga fält.

Detta skapade däremot ett problem då jag skickade och skar ner på object arrayen varje gång jag kallade den så jag fick skapa en "arkiv" variabel som inehåller det originella arrayen för att skicka varje gång. Sökning sker via sökfältet och alla kategorier kan sorteras med hjälp utav att klikca på headern för kategorien, finns inte reverse men det kan enkelt implementeras med en boolean omvänd formel.

## Utvärdering
Uppgiften gick bra, var mycket nytt och kan inte säga att jag förstår allt till fullo, till exempel "Observable" classen, vad gör den? Aja finns nog med utav en bra anledning. Byggde på utväcklingen ifrån en liknande uppgift tidigare, bra med arkiverade uppgifter, vilket sparade lite tid, men inte så mycket som jag hade velat då jag fastnade ett tag på "2D array tänk" istället för object array vilket passar bättre för angular.

Men i sin helhet så var det inga gigantiska problem och koden fungerar bra, och det är allt som räknas, sorta, typ... Förstår vad jag menar i alla fall.
## -Mvh Max Gagner


# Angular Stuff
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
