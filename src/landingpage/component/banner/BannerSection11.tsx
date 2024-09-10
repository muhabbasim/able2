import { motion } from 'framer-motion';


const BannerSection11 = () => {

  return (
    <section className="tl-12-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="tl-12-banner-txt">
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <h1 className="tl-12-banner-title">
                  Find you preferred Live Courses &
                  <span className="last-word">improve skills</span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <p className="tl-12-banner-descr pt-10">
                  Through a combination of lectures, readings, and discussions,
                  students will gain a solid foundation in educational psychology.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <div className="tl-12-banner-btns">
                  <a href="#" className="tl-def-btn">
                    Start Learning{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                  <a href="#" className="tl-def-btn tl-12-banner-btn-2">
                    Skill Test <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </motion.div>

              <ul className="tl-12-banner-features">
                <li className="tl-12-banner-feature">
                  <img src="/assets/landing-images/tl-12/feat-1.png" alt="Icon" />
                  <span className="tl-12-feature-name">4k Video Class</span>
                </li>
                <li className="tl-12-banner-feature">
                  <img src="/assets/landing-images/tl-12/feat-2.png" alt="Icon" />
                  <span className="tl-12-feature-name">18k Total Student</span>
                </li>
                <li className="tl-12-banner-feature">
                  <img src="/assets/landing-images/tl-12/feat-3.png" alt="Icon" />
                  <span className="tl-12-feature-name">
                    Complete Graduation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="tl-12-banner-img">
              <motion.div
                initial={{ opacity: 0, translateX: 550 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <img
                  src="/assets/landing-images/hero-img2.png"
                  alt="Banner image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BannerSection11;


