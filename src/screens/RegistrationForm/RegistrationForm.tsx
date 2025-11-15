import { useState } from 'react';
import styles from './RegistrationForm.module.css';

interface FormData {
  nom: string;
  email: string;
  motDePasse: string;
}

interface FormErrors {
  nom?: string;
  email?: string;
  motDePasse?: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    motDePasse: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Mettre à jour les champs
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Valider le champ pendant la saisie
    validateField(name as keyof FormData, value);
  };

  // Validation d'un champ
  const validateField = (name: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    if (name === 'nom') {
      if (!value) {
        newErrors.nom = 'Le nom est obligatoire';
      } else if (value.length < 3) {
        newErrors.nom = 'Le nom doit contenir au moins 3 caractères';
      } else {
        delete newErrors.nom;
      }
    }

    if (name === 'email') {
      if (!value) {
        newErrors.email = 'L\'email est obligatoire';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'L\'email n\'est pas valide';
      } else {
        delete newErrors.email;
      }
    }

    if (name === 'motDePasse') {
      if (!value) {
        newErrors.motDePasse = 'Le mot de passe est obligatoire';
      } else if (value.length < 6) {
        newErrors.motDePasse = 'Le mot de passe doit contenir au moins 6 caractères';
      } else {
        delete newErrors.motDePasse;
      }
    }

    setErrors(newErrors);
  };

  // Vérifier si le formulaire est valide
  const isFormValid = (): boolean => {
    return (
      Object.keys(errors).length === 0
    );
  };

  // Soumettre le formulaire
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (isFormValid()) {
      setIsSubmitted(true);
      console.log('Données du formulaire:', formData);
      
      // Réinitialiser après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nom: '', email: '', motDePasse: '' });
      }, 3000);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Formulaire d'inscription</h2>

      {/* Message de succès avec inline styles */}
      {isSubmitted && (
        <div style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          ✓ Inscription réussie !
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Champ Nom */}
        <div className={styles.formGroup}>
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className={
              formData.nom
                ? errors.nom
                  ? styles.invalid
                  : styles.valid
                : ''
            }
          />
          {errors.nom && (
            <span style={{ color: 'red', fontSize: '14px' }}>
              {errors.nom}
            </span>
          )}
        </div>

        {/* Champ Email */}
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={
              formData.email
                ? errors.email
                  ? styles.invalid
                  : styles.valid
                : ''
            }
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '14px' }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Champ Mot de passe */}
        <div className={styles.formGroup}>
          <label>Mot de passe</label>
          <input
            type="password"
            name="motDePasse"
            value={formData.motDePasse}
            onChange={handleChange}
            className={
              formData.motDePasse
                ? errors.motDePasse
                  ? styles.invalid
                  : styles.valid
                : ''
            }
          />
          {errors.motDePasse && (
            <span style={{ color: 'red', fontSize: '14px' }}>
              {errors.motDePasse}
            </span>
          )}
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isFormValid()}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
