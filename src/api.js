import { collection, addDoc, doc, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "./firebase";

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

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const searchByDescription = async (term) => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const results = [];

    const normalizedTerm = removeAccents(term.toLowerCase());

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.descripcion) {
            const normalizedDescription = removeAccents(data.descripcion.toLowerCase());
            if (normalizedDescription.includes(normalizedTerm)) {
                results.push({ id: doc.id, ...data });
            }
        }
    });

    return results;
};

const getStockProducts = async () => {
    const q = query(collection(db, "products"), where("stock", ">", 0));
    const querySnapshot = await getDocs(q);
    const results = [];

    querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
    });

    return results;
};

const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Producto no encontrado");
    }
};

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        return docRef.id;
    } catch (e) {
        console.error("Error al crear la orden: ", e);
    }
};

export const updateStock = async (items) => {
    const batch = writeBatch(db);

    try {
            for (let item of items) {
            const productRef = doc(db, "products", item.id);

            const productSnapshot = await getDoc(productRef);
            
            if (productSnapshot.exists()) {
                const productData = productSnapshot.data();
                const newStock = productData.stock - item.quantity;
                if (newStock >= 0) {
                    
                    batch.update(productRef, { stock: newStock });
                } else {
                    throw new Error(`Stock insuficiente para el producto: ${item.title}`);
                }
            } else {
                throw new Error(`Producto no encontrado: ${item.title}`);
            }
        }

        await batch.commit();
    } catch (error) {
        console.error("Error al actualizar el stock: ", error);
    }
};

export { searchByCategory, searchByDescription, getStockProducts, getProductById};