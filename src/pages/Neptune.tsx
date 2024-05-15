import Layout from "../layout/Layout";
import PlanetContainer from "../components/Planet/PlanetContainer";

const Page = () => {
  return (
    <>
      <Layout>
        <PlanetContainer planetName={"neptune"} />
      </Layout>
    </>
  );
};

export default Page;
