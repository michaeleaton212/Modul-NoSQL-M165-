# Konzeptionelles Datenmodell - Fitnessstudio

## Entitaeten

### Mitglied (Member)
Die Entitaet Mitglied repraesentiert eine Person, die im Fitnessstudio angemeldet ist. Zu einem Mitglied gehoeren Stammdaten wie Name, Kontaktinformationen und Mitgliedschaftstyp. Mitglieder koennen mehrere Kurse besuchen.

### Kurs (Course)
Die Entitaet Kurs beschreibt ein konkretes Trainingsangebot wie Yoga, HIIT oder Spinning. Ein Kurs hat definierte Eigenschaften wie Kapazitaet, Dauer und Preis pro Einheit. Kurse werden von einem Trainer geleitet und koennen von vielen Mitgliedern gebucht werden.

### Trainer (Trainer)
Die Entitaet Trainer repraesentiert die im Studio beschaeftigten Trainerpersonen. Trainer haben Spezialisierungen und unterschiedliche Berufserfahrung. Ein Trainer kann mehrere Kurse betreuen.

### Geraet (Equipment)
Die Entitaet Geraet steht fuer Trainingsgeraete und Hilfsmittel im Fitnessstudio. Dazu gehoeren beispielsweise Laufband, Hantelset oder Indoor-Bike. Ein Geraet kann in mehreren Kursen eingesetzt werden.

### Buchung (Booking)
Die Entitaet Buchung ist eine Verbindungsentitaet zwischen Mitglied und Kurs. Sie speichert den konkreten Teilnahmevorgang eines Mitglieds an einem Kurs. Zusaetzlich kann sie eigene Informationen wie Buchungsdatum, Status oder Zahlungsbetrag enthalten.

## Beziehungen und Kardinalitaeten

- Mitglied NIMMT TEIL AN Kurs: N:N, umgesetzt ueber die Verbindungsentitaet Buchung.
- Trainer LEITET Kurs: 1:N, ein Trainer leitet mehrere Kurse, jeder Kurs hat genau einen verantwortlichen Trainer.
- Kurs VERWENDET Geraet: N:N, ein Kurs kann mehrere Geraete verwenden und ein Geraet kann in mehreren Kursen verwendet werden.

## Begruendung fuer die N:N-Beziehung

Die Beziehung zwischen Mitglied und Kurs ist natuerlich N:N, weil ein Mitglied typischerweise viele verschiedene Kurse besuchen kann und ein Kurs gleichzeitig von vielen Mitgliedern besucht wird. Diese Beziehung wird ueber die Entitaet Buchung aufgeloest, damit zusaetzliche Attribute der Teilnahme (z. B. Buchungsdatum, Status, Zahlungsinformation) sauber gespeichert werden koennen.
