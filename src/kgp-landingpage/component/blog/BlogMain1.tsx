import { useTalimContext } from "../../context/LandContext";

import AllBlogSection from "./AllBlogSection";
import AllBlogPagination from "./AllBlogPagination";

const BlogMain1 = () => {
  const { totalBlogPages } = useTalimContext();
  return (
    <>
      <AllBlogSection />
      <AllBlogPagination totalPage={totalBlogPages} />
    </>
  );
};

export default BlogMain1;
