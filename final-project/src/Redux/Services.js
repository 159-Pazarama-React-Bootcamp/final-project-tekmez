  import { createAsyncThunk } from "@reduxjs/toolkit"
  import axios from "axios";

  export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const response = await axios.get(process.env.REACT_APP_API_KEY);
        return response.data;
    }
);

export const postUser = createAsyncThunk(
  'user/postUser',
  async (info) => {
    const response = await axios.post(process.env.REACT_APP_API_KEY, {
      firstName: info.firstName,
      lastName: info.lastName,
      age: info.age,
      tc: info.tc,
      reason: info.reason,
      address: info.address,
      isApproved:false
    })
    return response.data;
  }
);