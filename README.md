# randomAttentionSeekers.js

#### Rozszerzenie jQuery, które co losowy czas, wykonuje losową animację CSS.

### Jak to działa?
Skrypt losuje czas ze zbioru `intervals`, po którym do elementu zostaje dodana jedna, wylosowana klasa ze zbioru `animations` oraz klasy określone w parametrze `classes`. Po `animationLength` milisekundach, klasy są usuwane. Kolejne wykonanie następuje po losowym czasie ze zbioru `intervals`.

### Wywołanie
```javascript
jQuery(selector).randomAttentionSeekers(options)
```

### Przykład użycia
```javascript
jQuery('.ikona').randomAttentionSeekers({
  animations: ["wobble", "pulse"],
  animateOnInit: true,
  intervals: [6000, 8000, 10000],
  
  onAnimationEnd: function () {
    console.log("Animacja została wykonana");
  }
})
```

### Ustawienia

Opcja | Typ | Domyślnie | Opis
------ | ---- | ------- | -----------
animations | array | ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"] | Zbiór klas, spośród których losujemy animację.
animationLength | int | 1000 | Czas trwania animacji w milisekundach.
intervals | array | [2000, 4000, 6000, 8000, 10000] | Zbiór odstępów czasowych w milisekundach, spośród których losujemy odstęp czasowy pomiędzy kolejnymi animacjami. Odstęp czasowy losowany jest po każdym zakończeniu animacji.
classes | string | "animated" | Klasa albo klasy, które dodawane są razem z klasą animacji w momencie jej wykonywania.
animateOnInit | boolean | false | Jeśli `true`, animacja wykona się w momencie inicjacji skryptu.
onAnimationStart | function() | { } | Funkcja wywoływana w momencie rozpoczęcia animacji
onAminationEnd | function() | { } | Funkcja wywoływana w momencie zakończenia animacji
