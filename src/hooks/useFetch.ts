import { CollectionReference, DocumentData, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function useFetch<T>(
  collection: CollectionReference<DocumentData>
) {
  const [data, setData] = useState<T[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection);
        const fetchedData: Array<T> = [];

        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          fetchedData.push({ id: doc.id, ...doc.data() } as T);
        });

        setData(fetchedData);
        // setFilteredUsers(fetchedData);
      } catch (error) {
        console.log(error);
      } finally {
        setDataLoading(false);
      }
    }
    fetchUsers();
  }, [collection]);

  return [data, setData, dataLoading] as const;
}
