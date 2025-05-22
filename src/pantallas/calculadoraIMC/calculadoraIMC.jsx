import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import { styles } from "./calculadoraIMC.styles"

export const CalculadoraIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularIMC = (peso, altura) => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        
        if (!pesoNum || !alturaNum || pesoNum <= 0 || alturaNum <= 0) {
            return null;
        }
        
        const imc = pesoNum / (alturaNum * alturaNum);
        return imc.toFixed(1);
    };

    const obtenerCategoria = (imc) => {
        const imcNum = parseFloat(imc);
        if (imcNum < 18.5) {
            return { 
                categoria: 'Bajo peso', 
                color: '#2563eb',
                backgroundColor: '#eff6ff',
                borderColor: '#bfdbfe'
            };
        } else if (imcNum >= 18.5 && imcNum <= 24.9) {
            return { 
                categoria: 'Peso normal', 
                color: '#16a34a',
                backgroundColor: '#f0fdf4',
                borderColor: '#bbf7d0'
            };
        } else if (imcNum >= 25 && imcNum <= 29.9) {
            return { 
                categoria: 'Sobrepeso', 
                color: '#ca8a04',
                backgroundColor: '#fefce8',
                borderColor: '#fde047'
            };
        } else {
            return { 
                categoria: 'Obesidad', 
                color: '#dc2626',
                backgroundColor: '#fef2f2',
                borderColor: '#fecaca'
            };
        }
    };

    const handleCalcular = () => {
        if (!peso || !altura) {
            Alert.alert('Error', 'Por favor, ingrese tanto el peso como la altura');
            return;
        }
        
        const imc = calcularIMC(peso, altura);
        if (!imc) {
            Alert.alert('Error', 'Por favor, ingrese valores válidos');
            return;
        }
        
        const categoria = obtenerCategoria(imc);
        setResultado({ imc, ...categoria });
    };

    const limpiar = () => {
        setPeso('');
        setAltura('');
        setResultado(null);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>📊</Text>
                    </View>
                    <Text style={styles.title}>Calculadora IMC</Text>
                    <Text style={styles.subtitle}>Calcula tu Índice de Masa Corporal</Text>
                </View>

                {/* Inputs */}
                <View style={styles.inputContainer}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>⚖️ Peso (kg)</Text>
                        <TextInput
                            style={styles.input}
                            value={peso}
                            onChangeText={setPeso}
                            keyboardType="numeric"
                            placeholder="Ej: 70"
                            placeholderTextColor="#9ca3af"
                        />
                    </View>
                    
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>📏 Altura (m)</Text>
                        <TextInput
                            style={styles.input}
                            value={altura}
                            onChangeText={setAltura}
                            keyboardType="numeric"
                            placeholder="Ej: 1.75"
                            placeholderTextColor="#9ca3af"
                        />
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.calculateButton} 
                        onPress={handleCalcular}
                    >
                        <Text style={styles.calculateButtonText}>📈 Calcular</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.clearButton} 
                        onPress={limpiar}
                    >
                        <Text style={styles.clearButtonText}>Limpiar</Text>
                    </TouchableOpacity>
                </View>

                {/* Resultado */}
                {resultado && (
                    <View style={[
                        styles.resultContainer,
                        { 
                            backgroundColor: resultado.backgroundColor,
                            borderColor: resultado.borderColor
                        }
                    ]}>
                        <View style={styles.resultHeader}>
                            <Text style={styles.imcValue}>{resultado.imc}</Text>
                            <Text style={styles.imcLabel}>Tu IMC</Text>
                        </View>
                        <Text style={[
                            styles.categoryText,
                            { color: resultado.color }
                        ]}>
                            {resultado.categoria}
                        </Text>
                    </View>
                )}

                {/* Tabla de referencia */}
                <View style={styles.referenceTable}>
                    <Text style={styles.referenceTitle}>Tabla de referencia IMC:</Text>
                    
                    <View style={styles.referenceRow}>
                        <Text style={[styles.referenceCategory, { color: '#2563eb' }]}>
                            Bajo peso:
                        </Text>
                        <Text style={styles.referenceValue}>&lt; 18.5</Text>
                    </View>
                    
                    <View style={styles.referenceRow}>
                        <Text style={[styles.referenceCategory, { color: '#16a34a' }]}>
                            Normal:
                        </Text>
                        <Text style={styles.referenceValue}>18.5 - 24.9</Text>
                    </View>
                    
                    <View style={styles.referenceRow}>
                        <Text style={[styles.referenceCategory, { color: '#ca8a04' }]}>
                            Sobrepeso:
                        </Text>
                        <Text style={styles.referenceValue}>25.0 - 29.9</Text>
                    </View>
                    
                    <View style={styles.referenceRow}>
                        <Text style={[styles.referenceCategory, { color: '#dc2626' }]}>
                            Obesidad:
                        </Text>
                        <Text style={styles.referenceValue}>≥ 30.0</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};