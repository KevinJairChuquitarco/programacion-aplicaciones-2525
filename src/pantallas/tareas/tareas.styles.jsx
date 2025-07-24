import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 20,
        paddingTop: 20,
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
        textTransform: 'capitalize',
    },
    
    inputContainer: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    
    textInput: {
        padding: 15,
        fontSize: 16,
        borderRadius: 10,
        color: '#333',
        minHeight: 50,
    },
    
    scrollView: {
        flex: 1,
    },
    
    sectionContainer: {
        marginBottom: 25,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        marginBottom: 10,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#e0e0e0',
    },
    
    // Estilos específicos para cada sección
    todoSection: {
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    
    completedSection: {
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
    },
    
    todoSectionTitle: {
        color: '#4CAF50',
        borderBottomColor: '#4CAF50',
    },
    
    completedSectionTitle: {
        color: '#2196F3',
        borderBottomColor: '#2196F3',
    },
    
    // Estilos para items de tareas (para cuando los agregues)
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginVertical: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderLeftWidth: 3,
    },
    
    taskItemTodo: {
        borderLeftColor: '#4CAF50',
    },
    
    taskItemCompleted: {
        borderLeftColor: '#2196F3',
        backgroundColor: '#f0f8ff',
    },
    
    taskText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    
    taskTextCompleted: {
        textDecorationLine: 'line-through',
        color: '#666',
    },
    
    // Estilos para botones (para cuando los agregues)
    button: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    
    deleteButton: {
        backgroundColor: '#f44336',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    
    deleteButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    
    // Mensaje cuando no hay tareas
    emptyMessage: {
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 10,
    },
});