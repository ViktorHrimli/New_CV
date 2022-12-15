import { createAsyncThunk } from "@reduxjs/toolkit";

// {
// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
// "street": "Kulas Light",
// "suite": "Apt. 556",
// "city": "Gwenborough",
// "zipcode": "92998-3874",
// "geo": {
// "lat": "-37.3159",
// "lng": "81.1496"
// }
// },
// "phone": "1-770-736-8031 x56442",
// "website": "hildegard.org",
// "company": {
// "name": "Romaguera-Crona",
// "catchPhrase": "Multi-layered client-server neural-net",
// "bs": "harness real-time e-markets"
// }

export type typeUser = {
  id: number;
  name: string;
  username: string;
};

export type fetchUsers = {
  data: typeUser[];
};

const fetchData = createAsyncThunk(
  "fetch/todo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: fetchUsers = await response.json();
      return data as fetchUsers;
    } catch (error: any) {
      throw rejectWithValue(error.message);
    }
  }
);

export { fetchData };
