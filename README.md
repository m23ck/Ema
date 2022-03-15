# Employee Management Alembo

## Benodigdheden:
- NodeJS
- MySQL
- Web Browser

## De stack die ik heb gebruikt om dit systeem te realiseren:
- NodeJs
- NextJs(voor het API)
- Prisma(als ORM)
- Angular
- Tailwind(voor styling)
- Figma(voor het design)


## Installatie Stappen
1. Zorg ervoor dat MySQL aanstaat
2. [Clone de EMA github repository]('https://github.com/m23ck/Ema')
3. Maak een terminal / command line open in de map waarin jij het project wilt opslaan en run:
4. <code> git clone https://github.com/m23ck/Ema.git </code>
5. [Clone de EMA Backend github repository]('https://github.com/m23ck/ema-backend')
- Maak een terminal / command line open in de map waarin jij het project wilt opslaan en run:
- <code>git clone https://github.com/m23ck/ema-backend.git</code>
---
#### Stap 4
- Maak een terminal / command line open in de map met het "ema" project en run:
- <code>npm install</code>

#### Stap 5
- Pas de gegevens in de .env file aan aan de hand van jouw database

#### Stap 6
- Maak een terminal / command line open in de map met het "ema_backend" project en run:
- <code>npm install</code>
- Je zou eventueel manueel een database kunnen creeeren en de SQL file in ema_backend/prisma/ema_db.sql kunnen importeren met bestaande records


#### Stap 7: Backend Opstarten
- In de terminal / command line waarin ema_backend open staat
  - run <code>npm run start:dev</code>

#### Stap 7: Frontend Opstarten
- In de terminal / command line waarin ema open staat
  - run <code>npm run start:dev</code>

### Stap 8:
- Ga naar [localhost:4200 en start met het gebruiken van het systeem]('http://127.0.0.1:4200')

Bekijk mijn mockup design voor het systeem die ik in figma heb gemaakt [hier]('https://www.figma.com/file/7Ev9XaKSCu5fdPkUmQg1Ex/ema?node-id=6%3A7')

Het API documentatie is te vinden op [localhost:4423/documentatie]('http://127.0.0.1:4423/documentatie')


## Wat kan het systeem?
1. Medewerkers creeeren
2. Medewerkers' Gegevens Bewerken
3. Medewerkers Activeren / Deactiveren
4. Alle Medewerkers Bekijken in een tabel
5. Het tabel sorteren op elk Kolom
6. In Het tabel zoeken naar een voornaam, achternaam of email


---
# Thank You!