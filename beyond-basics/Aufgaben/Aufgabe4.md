# Aufgabe 4 - Formularhandling

Integriere react-hook-form in die Form-Komponente

## Wie gehe ich vor?

- installiere react-hook-form mit `npm i react-hook-form`
- nutze die useForm-Funktion, um `handleSubmit`und `register`zu erhalten
- integriere `handleSubmit` in onSubmit des Formulars
- integriere `register`in die einzelnen Formularelemente (mit dem jeweiligen Namen)

Bonus 1:

- Füge Validierung ein
  - Vorname und Nachname sind Pflichtfelder. Beide müssen mindestens 2, maximal 20 Zeichen lang sein
- Zeige eine Fehlermeldung an, wenn die Validierung fehlschlägt (`formState: { errors }`aus `useForm`, mit der jeweiligen Eigenschaft)

Bonus 2:

- Nutze die ErrorMessage-Komponente zur Anzeige von Fehlern
- `npm install @hookform/error-message`
- `<ErrorMessage errors={errors} name="firstName" />`
