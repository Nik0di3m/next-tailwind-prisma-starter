import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../../components/Layout/Layout";
import ProductTable from "../../../components/Table/ProductTable";

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
            <Layout>
                <ProductTable />
            </Layout>
        </>
    );
};

export default Products;
