import Layout from "../layout/Layout";
import PlanetContainer from "../components/Planet/PlanetContainer";

const Page = () => {
  return (
    <>
      <Layout>
        <PlanetContainer planetName={"earth"} />
      </Layout>
    </>
  );
};

export default Page;
