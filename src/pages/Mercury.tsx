import React from "react";
import Layout from "../layout/Layout";
import PlanetMercury from "../components/Planet/PlanetMercury";

const Page = () => {
  return (
    <>
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <PlanetMercury />
        </div>
      </Layout>
    </>
  );
};

export default Page;
