import { useTalimContext } from "../../context/LandContext";
import AllBlogSection7 from "./AllBlogSection7";
import AllBlogPagination from "./AllBlogPagination";

const BlogMain7 = () => {
  const { totalBlogPages4 } = useTalimContext();
  return (
    <>
      <AllBlogSection7 />
      <AllBlogPagination totalPage={totalBlogPages4} />
    </>
  );
};

export default BlogMain7;
