# Employee Management Alembo
#### Een Fictieve Employee Management Systeem voor Alembo
---
## Benodigdheden:
- MySQL
- NodeJS
- Web Browser

## De stack die ik heb gebruikt om dit systeem te realiseren:
- NodeJs
- NestJs(voor de API)
- Prisma(als ORM)
- Helmet(voor Security)
- Angular
- Tailwind(voor styling)
- Figma(voor het design)


## Installatie Stappen
#### Stap 1 : Clone de Ema en Ema Backend repositories
-  [Clone de EMA github repository]('https://github.com/m23ck/Ema')
- Maak een terminal / command line open in de map waarin jij het project wilt opslaan en run:
- <code> git clone https://github.com/m23ck/Ema.git </code>
- [Clone de EMA Backend github repository]('https://github.com/m23ck/ema-backend')
- Maak een terminal / command line open in de map waarin jij het project wilt opslaan en run:
- <code>git clone https://github.com/m23ck/ema-backend.git</code>
#### Stap 2: Benodigdheden installeren
1. - Maak een terminal / command line open in de map met het "ema" project en run:
   - <code>npm install</code>
2. - Zorg ervoor dat MySQL aanstaat
   - Pas de gegevens in de .env file aan aan de hand van jouw database
   - Maak een terminal / command line open in de map met het "ema_backend" project en run:
   - <code>npm install</code>
   - Je zou eventueel manueel een database kunnen creeeren en de SQL file in ema_backend/prisma/ema_db.sql kunnen importeren met bestaande records


#### Stap 3: Backend Opstarten
- In de terminal / command line waarin ema_backend open staat
  - run <code>npm run start:dev</code>

#### Stap 4: Frontend Opstarten
- In de terminal / command line waarin ema open staat
  - run <code>npm run start</code>

### Stap 5: Het Systeem Gebruiken
- Ga naar [localhost:4200 en start met het gebruiken van het systeem]('http://127.0.0.1:4200')


## Extra Resources:
Bekijk De Mockups In Figma: https://www.figma.com/file/7Ev9XaKSCu5fdPkUmQg1Ex/ema?node-id=6%3A7

Het API documentatie voor alle interactie met de backend is te vinden op http://127.0.0.1:4423/documentatie


### Wat kan ik met het systeem doen?
1. Medewerkers creeeren
2. Medewerkers' Gegevens Bewerken
3. Medewerkers Activeren / Deactiveren
4. Alle Medewerkers Bekijken in een tabel
5. de tabel sorteren op elk Kolom
6. In de tabel zoeken naar een voornaam, achternaam of email


---

## Thank You For The Opportunity! 🔥🔥🎉