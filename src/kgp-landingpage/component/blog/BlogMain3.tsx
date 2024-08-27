import AllBlogSection3 from "./AllBlogSection3";
import AllBlogPagination from "./AllBlogPagination";
import { useTalimContext } from "../../context/LandContext";

const BlogMain3 = () => {
  const { totalBlogPages3 } = useTalimContext();
  return (
    <>
      <AllBlogSection3 />
      <AllBlogPagination totalPage={totalBlogPages3} />
    </>
  );
};

export default BlogMain3;
