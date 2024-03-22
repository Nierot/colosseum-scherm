# Rotonde

> Ze denken dat ik aso ben, jonge, ik ben der mee begonnen.

Leuk schermpje dat hangt in het colosseum

Zie leuke fototjes, beheer muziek, streep biertjes (?), en meer!

Ontworpen om te draaien op een iPad mini 2 (iOS 12.5.5), daarom maak ik gebruik van jQuery en backbone enzo ipv Svelte

## Developen

Installeer live-server

```console
npm i -g live-server
```

Draai een development server met:

```console
make dev
```

Of doe iets anders, het is plain js, je vogelt het maar uit

## HTML Strings

Als je VSCode gebruikt kan je syntax highlighting aanzetten voor HTML strings met de [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) plugin.

Gebruik hem door html te commenten voor je string

```js
  template: _.template(/*html*/`
    <div id="view--home">
      <h1>Welkom bij Rotonde</h1>
    </div>
  `),
```

## JavaScript

Kijk, de reden dat we 10 jaar terug de tijd in springen, is omdat dit project bedoelt is voor _Safari_ op een iPad die sinds _2019_ al geen feature updates meer krijgt. Dat is een taaie bende, dus pas goed op wat je schrijft.

Kijk voor de zekerheid altijd op [caniuse.com](https://caniuse.com/)
