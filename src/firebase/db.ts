import app from "./app";
import { getFirestore, collection } from "firebase/firestore";

const db = getFirestore(app);

export const UserCollection = collection(db, "users");
