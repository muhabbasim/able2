import AllTeacherSection5 from "./AllTeacherSection5";
import AllTeacherPagination from "./AllTeacherPagination";
import { useTalimContext } from "../../context/LandContext";

const TeacherMain5 = () => {
  const { totalTeamPages2 } = useTalimContext();
  return (
    <>
      <AllTeacherSection5 />
      <AllTeacherPagination totalPage={totalTeamPages2} />
    </>
  );
};

export default TeacherMain5;
