import Error404 from "../components/Error404";
import Layout from "../layout/Layout";

const Page = () => {
  return (
    <>
      <Layout>{<Error404 />}</Layout>
    </>
  );
};

export default Page;
