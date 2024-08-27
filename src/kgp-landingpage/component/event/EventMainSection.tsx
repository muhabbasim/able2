import AllEventSection from "./AllEventSection";
import AllEventPagination from "./AllEventPagination";
import { useTalimContext } from "../../context/LandContext";

const EventMainSection = () => {
  const { totalEventPages } = useTalimContext();
  return (
    <>
      <AllEventSection />
      <AllEventPagination totalPage={totalEventPages} />
    </>
  );
};

export default EventMainSection;
