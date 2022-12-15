import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { typeUser } from "../redux/Api";

export type PostsType = {
  id: number;
  title: string;
  body: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["POST"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<PostsType[], number>({
      query: (limit: number = 5) => ({
        url: "posts",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["POST"],
    }),

    createPost: build.mutation<PostsType, PostsType>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: (results) => ["POST"],
    }),
  }),
});
