import Layout from "../layout/Layout";
import PlanetContainer from "../components/Planet/PlanetContainer";

const Page = () => {
  return (
    <>
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <PlanetContainer planetName={"saturn"} />
        </div>
      </Layout>
    </>
  );
};

export default Page;
