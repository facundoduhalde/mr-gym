// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, getDoc, doc, query, where, updateDoc, Timestamp, addDoc} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIruJ0Hj24kv-avC-q9Kz6JG_aE6G5p7Y",
  authDomain: "mr-gym.firebaseapp.com",
  projectId: "mr-gym",
  storageBucket: "mr-gym.appspot.com",
  messagingSenderId: "184328195403",
  appId: "1:184328195403:web:f8cfa273e2d678bccfacce",
  measurementId: "G-1V1X2EXRW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export class FirebaseConfig {
	async getItems() {
		try {
			const ref = collection(db, 'items');
			const docSnapshot = await getDocs(ref);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getItems', error);
		}
	}

	async getItemById(id) {
		try {
			const ref = doc(db, 'items', id);
			const docSnapshot = await getDoc(ref);
			if (docSnapshot.exists()) {
				return {
					id: docSnapshot.id,
					...docSnapshot.data(),
				};
			}
		} catch (error) {
			console.error('getItemById', error);
		}
	}

	async getItemsByCategory(category) {
		try {
			const q = query(collection(db, 'items'), where('category', '==', category));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getItemsByCategory', error);
		}
	}


	async addOrder(items, user, price, total) {
		try {
			const newOrder = {
				user,
				items,
				date: Timestamp.now().toDate(),
				price,
				total,
			};
			const docRef = await addDoc(collection(db, 'orders'), newOrder);
			return docRef.id;
		} catch (error) {
			console.error('addOrder', error);
		}
	}
}