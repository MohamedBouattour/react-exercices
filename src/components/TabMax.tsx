import { useState } from "react"

export const TabMax =()=> {
    // Le tableau d'entiers
    const [numbers, setNumbers] = useState([3, 7, 2, 9, 5]);
  
    // La valeur de l'input
    const [inputValue, setInputValue] = useState("");
  
    // Calcul du max
    const max = numbers.length > 0 ? Math.max(...numbers) : null;
  
    // Ajouter le nombre de l'input
    const addNumber = () => {
      const n = Number(inputValue);
      if (!isNaN(n)) {
        setNumbers([...numbers, n]); // ajoute au tableau
        setInputValue(""); // réinitialise l'input
      } else {
        alert("Veuillez entrer un nombre valide.");
      }
    };
  
    return (
      <>
        <h2>Tableau d’entiers</h2>
  
        {/* Input + Bouton */}
        <div style={{ marginBottom: "10px" }}>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Entrez un nombre"
          />
          <button onClick={addNumber} style={{ marginLeft: "8px" }}>
            Ajouter
          </button>
        </div>
  
        {/* Affichage du tableau */}
        <ul>
          {numbers.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
  
        {/* Plus grand nombre */}
        <p>
          <strong>Plus grand nombre :</strong> {max !== null ? max : "—"}
        </p>
      </>
    )
}
        