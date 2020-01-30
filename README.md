# ReactJs Užduotis

Paskirtos uždoties implementacija, naudojant React technologiją, su ja pasirinktinai atliekant užduotį pagal savo gebėjimus.


## Uždoties aprašymas

Naudojant React Native arba ReactJs sukurti 3 puslapius:

- Pirmas puslapis: lentelė, kurioje atvaizduojami duomenys (List page)
- Į antrą puslapį patenkama paspaudus ant lentelės eilutės. Šiame puslapyje rodomos įrašo detalės (details page)
- Trečias puslapis (patenkama paspaudus mygtuką pridėti, kuris yra pirmajame puslapyje) skirtas sukurti naują įrašą (New record form).

Užduočiai atlikti galima pasinaudoti nemokama API iš kurios bus gaunami duomenys.

### Reikalingi endpoint’ai:
- Gauti duomenis (GET): https://jsonplaceholder.typicode.com/posts
- Gauti vieną įrašą, detales (GET): https://jsonplaceholder.typicode.com/posts/{ID}
- Pridėti naują įrašą (POST, šis endpoint nepridės įrašo serveryje, o grąžins jums tą, kurį siuntėte): https://jsonplaceholder.typicode.com/posts

## Uždoties atlikimas

Naudojant ReactJs, yra pasitelkiama Routing funkcionalumu 'index.js' faile, kuriame yra nurodoma kaip yra pasiekiami App, Create ir Details komponentai su tam tikrais URL parametrais. Pasitelkus Bootstrap biblioteka yra vaizduojamas post'ų sąrašas 'App.js' faile, kur galima ant jų paspausti, kad pamatyti daugiau informacijos apie juos kitame lange. Taip pat yra implementuotas post'ų sukūrimo langas, kur įvesti duomenys siunčiami į Rest API kaip POST užklausa, kur gautas išsaugojimo atsakas yra pavaizduojamas saraše.

### Kontaktiniai duomenys

Gabrielius Važnevičius
vaznevicius@gmail.com
+37060954632

