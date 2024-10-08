import { Link } from "react-router-dom";
import { useTalimContext } from "../../context/HomeContext";

const AllTeacherSection = () => {
  const { displayedTeams } = useTalimContext();
  return (
    <section className="tl-1-teachers pt-120 pb-50">
      <div className="container">
        <div className="row g-4">
          {displayedTeams.map((item) => (
            <div className="col-lg-4 col-sm-6 col-6 col-xxs-12" key={item.id}>
              <div className="tl-1-teacher">
                <img
                  src={item.imgSrc}
                  alt="Teacher Image"
                  className="tl-1-teacher-img"
                />
                <ul className="tl-1-teacher-socials">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <div className="tl-1-teacher-info">
                  <h5 className="tl-1-teacher-title">
                    <Link to={`/staff/${item.slug}`}>{item.name}</Link>
                  </h5>
                  <h6 className="tl-1-teacher-sub-title">{item.position}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTeacherSection;
