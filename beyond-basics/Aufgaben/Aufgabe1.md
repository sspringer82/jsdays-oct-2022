# Custom Hook

Lagere die Data-Handling-Funktionalität aus der List-Komponente in eine eigene custom Hook-Funktion aus.

Der Name der Funktion lautet `usePerson`

Die Funktion liegt in der Datei `src/usePerson.ts`

## Wie gehe ich vor?

- Die Elemente identifizieren, die ich auslagern möchte (State, useEffect, handleDelete, handleSave)
- Elemente ausschneiden
- Neue Datei anlegen (usePerson.ts)
- Neue Funktion usePerson erzeugen
- Inhalte aus der Komponente in die Funktion kopieren
- import-Statements fixen
- Identifizieren welche Schnittstellen benötigt werden (person, handleDelete, handleSave)
- Rückgabewert definieren `return {person, handleDelete, handleSave}`
- usePerson in der Komponente aufrufen und Rückgabewert mit der Komponente verbinden `const {person, handleDelete, handleSave} = usePerson()`
