import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

// Búsqueda por categoría (para páginas específicas)
const searchByCategory = async (term) => {
    const q = query(
        collection(db, "products"),
        where("category", ">=", term.toLowerCase()),
        where("category", "<=", term.toLowerCase() + "\uf8ff")
    );
    const querySnapshot = await getDocs(q);
    const results = [];

    querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
    });

    return results;
};

// Función que elimina acentos y diacríticos
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Búsqueda por descripción, sin importar acentos
const searchByDescription = async (term) => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const results = [];

    const normalizedTerm = removeAccents(term.toLowerCase());

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.descripcion) {
            const normalizedDescription = removeAccents(data.descripcion.toLowerCase()); // Normaliza la descripción
            if (normalizedDescription.includes(normalizedTerm)) {
                results.push({ id: doc.id, ...data });
            }
        }
    });

    return results;
};

// Función para obtener productos en stock
const getStockProducts = async () => {
    const q = query(collection(db, "products"), where("stock", ">", 0));
    const querySnapshot = await getDocs(q);
    const results = [];

    querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
    });

    return results;
};

// Función para obtener un producto por su ID
const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Producto no encontrado");
    }
};

export { searchByCategory, searchByDescription, getStockProducts, getProductById };