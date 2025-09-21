import React, { useState, useRef, useEffect } from "react";
import { ScrollView, View, Dimensions, Modal, Alert, Text, TouchableOpacity } from "react-native";
import ArbitroView from "./ArbitroView";
import MedioCampoView from "./MedioCampoView";
import { BarCodeScanner } from "expo-barcode-scanner";

const { width } = Dimensions.get("window");

export default function ArbitroPager() {
  const [modo, setModo] = useState<"6x6" | "4x4">("6x6");
  const [setActual, setSetActual] = useState<number>(1);
  const [valoresEquipos, setValoresEquipos] = useState<{
    [set: number]: { A?: { [pos: string]: string }; B?: { [pos: string]: string } };
  }>({});

  const scrollRef = useRef<ScrollView>(null);

  // Scanner
  const [scannerVisible, setScannerVisible] = useState(false);
  const [equipoEscanear, setEquipoEscanear] = useState<"A" | "B">("A");
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      if (status !== "granted") {
        Alert.alert("Permiso requerido", "Se necesita acceso a la cámara para escanear QR");
      }
    })();
  }, []);

  const openScanner = (eq: "A" | "B") => {
    setEquipoEscanear(eq);
    setScannerVisible(true);
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScannerVisible(false);

    // Convertimos data a objeto (asumiendo JSON)
    let datosQR: { [pos: string]: string } = {};
    try {
      datosQR = JSON.parse(data);
    } catch {
      Alert.alert("QR inválido", "No se pudo leer el QR correctamente");
      return;
    }

    setValoresEquipos(prev => ({
      ...prev,
      [setActual]: {
        ...(prev[setActual] || {}),
        [equipoEscanear]: datosQR,
      },
    }));

    // Scroll a la vista lateral del equipo
    const xPos = equipoEscanear === "A" ? 0 : width * 2;
    scrollRef.current?.scrollTo({ x: xPos, animated: true });
  };

  if (hasPermission === null) return null;
  if (hasPermission === false)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No hay permisos de cámara</Text>
      </View>
    );

  return (
    <>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={{ width }}>
          <MedioCampoView
            modo={modo}
            lado="izq"
            setActual={setActual}
            onEscanear={openScanner}
            valoresQR={valoresEquipos[setActual]?.A}
          />
        </View>

        <View style={{ width }}>
          <ArbitroView
            modoProp={modo}
            setModoProp={setModo}
            setActualProp={setActual}
            setSetActualProp={setSetActual}
            valoresEquipos={valoresEquipos}
            onEscanear={openScanner}
          />
        </View>

        <View style={{ width }}>
          <MedioCampoView
            modo={modo}
            lado="der"
            setActual={setActual}
            onEscanear={openScanner}
            valoresQR={valoresEquipos[setActual]?.B}
          />
        </View>
      </ScrollView>

      <Modal visible={scannerVisible} animationType="slide">
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={{ flex: 1 }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 50,
            alignSelf: "center",
            padding: 10,
            backgroundColor: "orange",
            borderRadius: 8,
          }}
          onPress={() => setScannerVisible(false)}
        >
          <Text style={{ color: "#fff" }}>Cancelar</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
}
