// session.js

// Función para obtener una variable de sesión
export function getSession(key) {
    return  JSON.parse(sessionStorage.getItem(key));
  }
  
  // Función para establecer una variable de sesión
  export function setSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  
  // Función para eliminar una variable de sesión
  export function removeSession(key) {
    sessionStorage.removeItem(key);
  }