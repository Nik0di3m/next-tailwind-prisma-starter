import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../../components/Layout/Layout";

const Products: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <Layout>Product</Layout>
        </>
    );
};

export default Products;
