// EntrenadorStyles.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const campoSize = width * 0.9;

export const EntrenadorStyles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f0f0f0",
  alignItems: "center",   // mantiene horizontal centrado
  justifyContent: "flex-start", // 👈 esto sube todo arriba
  paddingTop: 120,         // deja un espacio para los botones Home y Modo
},

  campo: {
    width: campoSize,
    aspectRatio: 1,
    backgroundColor: "#F5A62380",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D17F1A",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  lineaSeparadora: {
    height: 2,
    backgroundColor: "#fff",
    width: "100%",
  },
  posicion: {
  width: 110,       // antes 90
  height: 110,      // antes 90
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "#555",
  borderRadius: 12,
  backgroundColor: "#FFF",
},

input: {
  width: "90%",       // antes 80%
  height: 50,         // antes 40
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 6,
  textAlign: "center",
  fontSize: 22,       // antes 20
  padding: 0,
},

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  botonesContainer: {
    position: "absolute",
    bottom: -40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  botonFlotante: {
    backgroundColor: "#2196F3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  botonCentral: {
    backgroundColor: "#F44336",
  },

  // Barra superior para código de equipo y equipo A/B
  barraControl: {
    width: campoSize,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5A62380",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
    padding: 10,
    marginBottom: 5,
  },
  controlItem: {
    alignItems: "center",
    flex: 1,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },
  codigoEquipo: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 6,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  equipoSelector: {
    width: 60,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#fffb00ff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
  },
  equipoText: {
    fontWeight: "bold",
    fontSize: 18,
  },

   filaSets: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: campoSize,          // ancho exacto del campo
  height: 50,                // altura de la barra
  backgroundColor: "#F5A62380", // mismo naranja que el campo
  borderWidth: 2,
  borderColor: "#000",       // borde negro
  borderRadius: 8,
  paddingHorizontal: 5,
},
setButton: {
  width: 40,
  height: 40,
  borderRadius: 6,
  backgroundColor: "#2196F3", // mismo naranja
  justifyContent: "center",
  alignItems: "center",
},
setDisplay: {
  flex: 1,                    // ocupa todo el espacio entre flechas
  height: 40,
  marginHorizontal: 5,
  borderRadius: 6,
  backgroundColor: "#2196F3", // mismo naranja
  justifyContent: "center",
  alignItems: "center",
},
setText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 18,
  textAlign: "center",
},

topBar: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingHorizontal: 10,
  marginBottom: 5,
},

homeButton: {
  position: "absolute",
  top: 50,
  left: 20,
  zIndex: 10,
  padding: 5,
  backgroundColor: "#ff6600",
  borderRadius: 20,
  elevation: 3, // sombra en Android
},

modoButton: {
  position: "absolute",
  top: 50,
  right: 20,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#ff6600",
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderRadius: 8,
  borderWidth: 2,
  borderColor: "#000",
},

modoText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 14,
},

filaUnica: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
},
qrButton: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#ff6600", // naranja
  paddingVertical: 50,
  alignItems: "center",
  justifyContent: "center",
  borderTopWidth: 2,
  borderTopColor: "#000", // borde negro arriba
},

qrButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},




});
