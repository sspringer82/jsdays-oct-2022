# Aufgabe 3 - React Router

Integriere den React Router, um die Liste und das Formular anzuzeigen.

# Wie gehe ich vor?

- Installiere das Paket react-router-dom
- Füge die BrowserRouter Komponente in den Baum ein
- Integriere die Routes Kmponente und definiere folgende Routen:
  - / => rendert die List-Komponente
  - /create => rendert die Form-Komponente
  - /edit/:id => rendert die Form-Komponente
  - - => zeigt eine Fehlermeldung an
- Entferne das gesamte Formularhandling aus der List-Komponente
- nutze useNavigate, um mit den new- und edit-Buttons die Form-Route zu aktivieren
- nutze die useParams-Funktion, um die id eines Datensatzes in der Form-Komponente zu laden
- nutze die usePerson-Funktion, um auf die handleSave-Funktion zuzugreifen und zu speichern
- navigiere nach dem Speichern zurück zur Liste (mit useNavigate)
