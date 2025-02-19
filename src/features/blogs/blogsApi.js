import { apiSlice } from "../api/apiSlice";

export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
  }),
});

export const { useGetBlogsQuery } = blogsApi;
