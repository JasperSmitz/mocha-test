# Automatisch JavaScript Unit Tests Uitvoeren

In deze GitHub repo vind je een voorbeeld van hoe je automatisch unit tests uit kan voeren in JavaScript m.b.v. GitHub Actions, de test framework [Mocha](https://mochajs.org/) en TDD framework [Chai](https://www.chaijs.com/).

## Voorvereisten
Het is belangrijk dat je de frameworks installeert en een package.json genereert, run hiervoor:
```
npm init
npm install mocha
npm install chai
```

## Unit Testing
### Test files
Test files bevinden zich of in een bestand genaamd `tests.js` of in een `tests` directory. Voor ons project is het waarschijnlijk makkelijker om gebruik te maken van de `tests` directory, zodat we per 'microservice' unit tests kunnen opsplitsen.
BELANGRIJK: Voeg in je package.json het volgende toe:
```
{
  "scripts": {
    "test": "mocha tests"
  }
}
```
Dit definieerd een script dat je toestaat om met mocha de tests te runnen. Nu kun je gebruik maken van `npm test` om de tests te runnen.
### Het opzetten van een test
Het opzetten van een test volgt het volgende stappenplan:
1. Maak een JavaScript file aan in de `tests` directory of gebruik een bestaande.
2. Importeer de te testen modules/functies. Gebruik hiervoor `require` or `import` statements.
3. Schrijf a.d.h.v. Mocha syntax tests en gebruik de Chai framework om assertions te maken die geverifieerd kunnen worden.
4. Sla de test file op.

Het is belangrijk dat je de modules/functies ook exporteert uit de JavaScript file waar ze in zitten, zoals:

```
// farenheit to celsius
// [23, 140, 212, 41] -> [-5, 60, 100, 5]
// (F − 32) × 5/9 = C

function getCelsius(farenheit) {
  return farenheit.map(value => (value -32) * 5/9)
}

module.exports = {
  getCelsius
}
```
En een voorbeeld van hoe de test file hiervoor uit zou zien:
```
const chai = require('chai');
const expect = chai.expect;

const functions = require('pad naar de file met de functies'); 

describe('getCelsius', () => {
  it('Converts farenheit to celsius in an array', () => {
    expect(functions.getCelsius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    expect(functions.getCelsius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
  })
})
```

## Github Actions Automation
De gebruikte GitHub Actions workflow is te vinden in `.github/workflows`. Maar voor de luie onder ons:
```
name: Mocha Tests
on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run Mocha tests
        run: npm test
```
