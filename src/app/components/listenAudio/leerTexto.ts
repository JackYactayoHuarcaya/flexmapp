// Función para leer un texto
function leerTexto(texto: string) {
  // Verifica si el navegador soporta la API
  if ("speechSynthesis" in window) {
    // Crea un nuevo objeto de síntesis de voz
    const speech = new SpeechSynthesisUtterance();

    // Configura el texto a leer
    speech.text = texto;

    // Configura el idioma (opcional)
    speech.lang = "es-ES"; // Español

    // Configura la velocidad (opcional)
    speech.rate = 1; // Velocidad normal

    // Configura el tono (opcional)
    speech.pitch = 1; // Tono normal

    // Inicia la síntesis de voz
    window.speechSynthesis.speak(speech);
  } else {
    console.error("Tu navegador no soporta la API SpeechSynthesis");
  }
}

export default leerTexto;
