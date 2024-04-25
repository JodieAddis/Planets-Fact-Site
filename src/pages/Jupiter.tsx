import Layout from "../layout/Layout";
import PlanetContainer from "../components/Planet/PlanetContainer";

const Page = () => {
  return (
    <>
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <PlanetContainer planetName={"jupiter"} />
        </div>
      </Layout>
    </>
  );
};

export default Page;
