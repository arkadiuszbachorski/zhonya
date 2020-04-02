# Zhonya

Zhonya to aplikacja, która zapewnia użytkownikowi możliwość łatwego mierzenia czasu, który poświęca na wybraną czynność. Dzięki dostępnej statystyce i opisie konkretnych przypadków, użytkownik może skrupulatniej zarządzać swoim czasem.

## Uruchomienie

Zhonya jest dostępna pod poniższym linkiem:

[zhonya.hekko24.pl](https://www.zhonya.hekko24.pl/)

### Lokalnie


Sklonuj lub pobierz repozytorium:

```
git clone https://bitbucket.org/arkadiuszbachorski/zhonya.git
```

Zainstaluj node_modules: 

```
npm install
```

Stwórz plik .env na podstawie .env.example: 

```dotenv
# adres twojej aplikacji
REACT_APP_URL=http://localhost:3000
REACT_APP_API_URL=https://api.zhonya.hekko24.pl/api
# token wymagany przez API do testów E2E 
REACT_APP_E2E_TOKEN=sDx49FsldgpSDA0013x
# sposób uruchomienia przeglądarki w testach E2E
REACT_APP_TEST_HEADLESS=true
```

Uruchom serwer deweloperski:

```
npm run start
```

Jeśli chcesz uruchomić testy jednostkowe i integracyjne:

```
npm run test
```

Jeśli chcesz uruchomić testy E2E:

```
npm run e2e
```

## O projekcie i użytych technologiach


Pomysł ten dojrzewał w mojej głowie jako narzędzie, które samemu chciałbym wykorzystywać. Błędy z zarządzaniem czasem często wynikają z braku jasnej informacji ile dana czynność może zajmować. Zhonya rozwiązuje ten problem, stając się źródłem i narzędziem do zbierania takich informacji.

Projekt stworzyłem samodzielnie w całości. Od pomysłu, przez specyfikację i projekt graficzny, na backendzie i frontendzie kończąc. Brak jakichkolwiek restrykcji technologicznych oraz czasowych spowodował, że Zhonya stała się dla mnie także piaskownicą do testowania różnych rozwiązań w warunkach bojowych.  


### Specyfikacja

Do stworzenia pierwszego konceptu wykorzystałem mapę myśli. Początkowo Zhonya miała celować konkretnie w mierzenie czasu potrzebnego na wykonywanie projektów i konfrontować wynik z estymacją czasową. Dzięki mindmapie szybko zorientowałem się, że byłoby to zbyt duże przedsięwzięcie, więc postanowiłem uprościć założenia. Od teraz Zhonya miała być narzędziem uniwersalnym.

Do drugiego konceptu użyłem już Trello. Rozpisałem tam skrótowo funkcjonalność, relacje i pola w bazie danych. Zapisałem kilka inspiracji graficznych, stworzyłem ogólny plan działania. Wraz z postępami uznałem jednak, że nie warto aktualizować Trello o nowe koncepcje czy zmiany, ponieważ jest to projekt jednoosobowy.

### Projekt graficzny

Do wykonania projektu graficznego wykorzystałem Figmę. W trakcie projektowania szlifowałem koncept, analizowałem funkcjonalność i user experience. Jeśli chodzi o design to postawiłem na prostotę. Na większości widoków można zauważyć wyłącznie cztery kolory: fioletowy kolor główny, szary akcent, kolor czcionki oraz tła. Zaprojektowałem wyłącznie motyw jasny i wersję desktop.

Największy problem stanowił dla mnie landing page, ponieważ to tutaj wymagane było wykazanie się kunsztem graficznym i umiejętnościami designu. Postawiłem na spore call-to-action, animacje, krótkie opisy oraz formularz kontaktowy. Poza stroną główną czułem się dość pewnie, ponieważ większość designu stawiała na obcowanie użytkownika z narzędziem.

Korzystałem z Figmy po raz pierwszy, lecz na pewno nie ostatni. Zapewne nie wykorzystałem nawet ułamka jej potencjału, lecz projekt stanowił dla mnie bardziej prototyp, niż bezkompromisowe źródło pixel-perfect. Ciekawym wyzwaniem było stanąć po designerskiej stronie barykady w procesie tworzenia aplikacji.

### Backend

Przez chwilę zastanawiałem się czy nie wykorzystać Express.js. Nie potrafię jednak pisać w Expressie (choć nauka jest w planach), więc postanowiłem wyprowadzić REST API na znanym i lubianym przezemnie Laravelu.

Część backendu napisałem od razu po skończeniu projektu graficznego, a potem rozbudowywałem równolegle z frontendem. Takie podejście pozwoliło mi testować na bieżąco i zaoszczędzić pisania endpointów, które będą słabo współpracować z frontem.

### Frontend

Oczywiście jest to aplikacja oparta na React. Wykorzystałem wyłącznie Hooki, nie ma ani jednego komponentu klasowego. 

Zrezygnowałem z Redux, ponieważ globalnego stanu jest niewiele. Postawiłem na customowe hooki oparte na Context API. 

W przypadku stylowania zastanawiałem się pomiędzy styled-components, a CSS modules. Wybór padł na CSS modules z preprocesorem SCSS, jednak dzisiaj wybrałbym styled-components. W SCSS modules i tak musiałem importować globalną paczkę, by móc korzystać z mixinów, zmiennych. Jednocześnie musiałem korzystać także ze zmiennych CSS, by zachować możliwość zmiany theme'u bez zbędnego kodu. Mało eleganckie rozwiązanie.

Wszystkie widoki są responsywne. Zrezygnowałem z podejścia mobile-first, ponieważ projektowałem desktop i pisanie od desktopu do mobile było dla mnie naturalniejsze.

Do testów jednostkowych i integracyjnych wykorzystałem Jest oraz różne elementy @testing-library. Do testów E2E posłużyłem się Puppeteerem. Postanowiłem nie mockować odpowiedzi z API. Jakości kodu strzegł niezastąpiony ESLint oraz Prettier.

Jako clienta HTTP wykorzystałem axiosa zwrapowanego w kilka własnych hooków usprawniających podstawowe operacje, takie jak powiadomienia oparte o statusy, stan wysyłania czy też błędy walidacji. Nie zaimplementowałem cache, więc dane są pobierane z API za każdą zmianą route'u.  

Wśród innych bibliotek, które wykorzystałem:

- react-router
- react-inlt
- react-toastify
- recharts
- react-fontawesome