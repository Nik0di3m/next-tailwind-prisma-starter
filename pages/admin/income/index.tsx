import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../../components/Layout/Layout";

const Income: NextPage = () => {
    return (
        <>
            <Head>
                <title>NextShop | Admin panel</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Layout>Income</Layout>
        </>
    );
};

export default Income;
