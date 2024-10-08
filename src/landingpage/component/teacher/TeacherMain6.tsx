import AllTeacherSection6 from "./AllTeacherSection6";
import AllTeacherPagination from "./AllTeacherPagination";
import { useTalimContext } from "../../context/HomeContext";

const TeacherMain6 = () => {
  const { totalBlogPages3 } = useTalimContext();
  return (
    <>
      <AllTeacherSection6 />
      <AllTeacherPagination totalPage={totalBlogPages3} />
    </>
  );
};

export default TeacherMain6;
