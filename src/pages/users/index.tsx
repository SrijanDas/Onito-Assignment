import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import Backdrop from "@/components/shared/Backdrop";
import { UserCollection } from "@/firebase/db";
import { IUser } from "@/types";
import { getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

const columns: TableColumn<IUser>[] = [
  {
    name: "Name",
    selector: (row) => row.name.toUpperCase(),
    sortable: true,
  },
  {
    name: "Age/Sex",
    selector: (row) => `${row.age}Y/${row.sex}`,
    sortable: true,
  },
  {
    name: "Mobile",
    selector: (row) => row.mobile ?? "",
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address ?? "",
    sortable: true,
  },
  {
    name: "Govt Id",
    selector: (row) => `${row.govtIdType?.toUpperCase()}-${row.govtId}`,
    sortable: true,
  },
  {
    name: "Guardian Details",
    selector: (row) =>
      `${row.guardianName} ${
        row.guardianRelation && `(${row.guardianRelation})`
      }`,
    sortable: true,
  },
  {
    name: "Nationality",
    selector: (row) => `${row.nationality}`,
    sortable: true,
  },
];

function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const querySnapshot = await getDocs(UserCollection);
        const fetchedData: Array<IUser> = [];

        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          fetchedData.push({ id: doc.id, ...doc.data() } as IUser);
        });

        setUsers(fetchedData);
        setFilteredUsers(fetchedData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  function handleSearch(text: string) {
    // console.log(text);
    const reults = users.filter((user) => {
      return (
        user.name.toLowerCase().match(text.toLowerCase()) ||
        user.mobile?.match(text) ||
        user.address?.toLowerCase().match(text.toLowerCase())
      );
    });
    setFilteredUsers(reults);
  }

  // console.log(users);
  return (
    <>
      {loading && <Backdrop loading={loading} />}

      <div className="min-h-screen bg-gray-100 p-10 lg:p-14 mx-auto">
        <div className="shadow-lg rounded-lg max-w-screen-2xl bg-white">
          <DataTable
            pagination
            columns={columns}
            data={filteredUsers}
            subHeader
            subHeaderComponent={
              <CustomSubHeader
                data={filteredUsers}
                handleSearch={handleSearch}
              />
            }
          />
        </div>
      </div>
    </>
  );
}

export default Users;

function CustomSubHeader({ data, handleSearch }: any) {
  return (
    <div className="py-4 flex items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-4">
        <Button text="Export" color="light" onClick={() => downloadCSV(data)} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <Input
          className=""
          noError
          placeholder="Search..."
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <Link href="/users/add">
          <Button className="w-36" text="Add User" color="primary" />
        </Link>
      </div>
    </div>
  );
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function convertArrayOfObjectsToCSV(array: any) {
  let result: any;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item: any) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      // eslint-disable-next-line no-plusplus
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV(array: any) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}
