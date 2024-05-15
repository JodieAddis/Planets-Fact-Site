import Layout from "../layout/Layout";
import PlanetContainer from "../components/Planet/PlanetContainer";

const Page = () => {
  return (
    <>
      <Layout>
        <PlanetContainer planetName={"jupiter"} />
      </Layout>
    </>
  );
};

export default Page;
