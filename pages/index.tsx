import { HomePage } from "../src/components/pages";
import { foldersApi } from "../src/utils";

export default HomePage;

export async function getStaticProps() {
  return {
    props: {
      data: foldersApi,
    },
  };
}
