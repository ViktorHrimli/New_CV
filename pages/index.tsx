import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>H_V</title>
        <meta name="My_CV" content="H_V" />
        <link rel="icon" href="/iconsFavicon.png" />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

// const dispatch = useAppDispatch();
// const value = useAppSelector((state) => state.stateTodo.jobs);
// const { isSuccess, data, isLoading, error } =
//   userApi.useFetchAllUsersQuery(10);
// const [createPost, {}] = userApi.useCreatePostMutation();
