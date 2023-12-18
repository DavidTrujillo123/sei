// session.js

// Función para obtener una variable de sesión
export function getSession(key) {
    return  JSON.parse(localStorage.getItem(key));
  }
  
  // Función para establecer una variable de sesión
  export function setSession(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Función para eliminar una variable de sesión
  export function removeSession(key) {
    localStorage.removeItem(key);
  }