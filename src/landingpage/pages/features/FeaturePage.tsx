import { useParams } from "react-router";
import centerMgtImg1 from "/assets/landing-images/dashboard3.png"
import centerMgtImg2 from "/assets/landing-images/dashboard4.png"
import centerMgtImg3 from "/assets/landing-images/dashboard6.png"
import Partner from "landingpage/component/Partner";
import OtherFeatures from "landingpage/component/OtherFeatures";
import CurrentFeatures from "landingpage/component/CurrentFeatures";

const kgpFeatures = [
  {
    id: 'center_management',
    title: "Center management",
    subtitle: "Our programs are designed to help you discover your strengths and reach your full potential in a supportive learning environment",
    color: '#36a4a6',
    img: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'family_engagement',
    title: "Family engagement",
    subtitle: "Share messages, photos and special moments as you communicate a daily story to families. From mass messages to the entire class, to private messages to parents",
    color: '#f7c800',
    img: "https://img.freepik.com/free-photo/full-shot-parents-working-remotely_23-2150172030.jpg?t=st=1725892105~exp=1725895705~hmac=c9cfcc4771fb7c9bc11c97949cc1d7d7e73e3fb84002220cd38980c13816c73e&w=1800",
  },
  {
    id: 'engaging_lessons',
    title: "Plan engaging lessons",
    subtitle: "Receive research-based lesson plans and activities monthly, delivered to your door and in the app. State-aligned and powered by FunShine Express",
    color: '#f56363',
    img: "https://img.freepik.com/free-photo/planner-calendar-schedule-date-concept_53876-133895.jpg?t=st=1725897770~exp=1725901370~hmac=4c1c8203ff51bc4e1ff8907ce3106d3cdddd7049e1fb2b0a65d61b769ae802e8&w=826",
  },
]

const featureData = [
  {
    id: 'center_management',
    title: "Center management",
    subtitle: "Our programs are designed to help you discover your strengths and reach your full potential in a supportive learning environment",
    color: '#36a4a6',
    img: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      {
        id: 1,
        header: "Classroom Management",
        title: "Manage classrooms at scale",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg1,
        features: [
          {
            text: "Schedule your staff"
          },
          {
            text: "Track classroom ratios"
          },
          {
            text: "Export customized reports"
          },
        ]
      },
      {
        id: 2,
        header: "Reporting",
        title: "Meet licensing standards",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg2,
        features: [
          {
            text: "Record and report attendance"
          },
          {
            text: "Maintain child, family and staff records"
          },
          {
            text: "Send reports to parents"
          },
        ]
      },
      {
        id: 3,
        header: "Online registration & projections",
        title: "Manage enrollment online",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg3,
        // img: "https://fps.cdnpk.net/templates/media/subhome/bannerdesigner.webp?w=662",
        features: [
          {
            text: "Manage your center’s waitlist"
          },
          {
            text: "Forecast and fill classroom openings"
          },
          {
            text: "Allow families to enroll on their own time"
          },
        ]
      },
    ]
  },
  {
    id: 'family_engagement',
    title: "Family engagement",
    subtitle: "Share messages, photos and special moments as you communicate a daily story to families. From mass messages to the entire class, to private messages to parents",
    color: '#f7c800',
    img: "https://img.freepik.com/free-photo/full-shot-parents-working-remotely_23-2150172030.jpg?t=st=1725892105~exp=1725895705~hmac=c9cfcc4771fb7c9bc11c97949cc1d7d7e73e3fb84002220cd38980c13816c73e&w=1800",
    features: [
      {
        id: 1,
        header: "Messaging",
        title: "Keep families engaged",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg1,
        features: [
          {
            text: "Share memorable moments with photos and videos"
          },
          {
            text: "Connect with families privately and securely"
          },
          {
            text: "Easily keep parents informed with newsletters"
          },
        ]
      },
      {
        id: 13,
        header: "Digital Daily Reports",
        title: "Provide families daily reports",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg2,
        features: [
          {
            text: "Provide daily updates for families"
          },
          {
            text: "Effortlessly create child portfolios"
          },
          {
            text: "Create in-depth developmental reports"
          },
        ]
      },
      {
        id: 14,
        header: "Payments",
        title: "Help parents pay easier",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg3,
        // img: "https://fps.cdnpk.net/templates/media/subhome/bannerdesigner.webp?w=662",
        features: [
          {
            text: "Share and track invoices at the click of a button"
          },
          {
            text: "Tailor tuition plans to each child"
          },
          {
            text: "Allow parents to pay from anywhere"
          },
        ]
      },
      {
        id: 15,
        header: "Family Sharing",
        title: "Manage family visibility",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg3,
        // img: "https://fps.cdnpk.net/templates/media/subhome/bannerdesigner.webp?w=662",
        features: [
          {
            text: "Choose what information parents, guardians and family members see"
          },
          {
            text: "Share special moments with family members"
          }, 
          {
            text: "Organize family contact information"
          },
        ]
      },
    ]
  },
  {
    id: 'engaging_lessons',
    title: "Plan engaging lessons",
    subtitle: "Receive research-based lesson plans and activities monthly, delivered to your door and in the app. State-aligned and powered by FunShine Express",
    color: '#f56363',
    img: "",
    features: [
      {
        id: 1,
        header: "High Quality Curriculum",
        title: "Daily lesson plans",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg1,
        features: [
          {
            text: "Easy-to-follow lesson plans for each day of the week"
          },
          {
            text: "Engaging, theme-based content that’s updated every month"
          },
          {
            text: "Available from within the Lillio app or in print form with monthly materials kits "
          },
        ]
      },
      {
        id: 13,
        header: "Activities",
        title: "Engaging activities",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg2,
        features: [
          {
            text: "Play-based activities that keep children engaged"
          },
          {
            text: "Research-based, standards-aligned, and developmentally appropriate"
          },
          {
            text: "Step-by-step instructions, materials, and learning outcomes included"
          },
        ]
      },
      {
        id: 14,
        header: "Observations and Assessments",
        title: "Seamless observations & assessments",
        desc: "Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi",
        img: centerMgtImg3,
        // img: "https://fps.cdnpk.net/templates/media/subhome/bannerdesigner.webp?w=662",
        features: [
          {
            text: "Easily log observations and tag developmental indicators"
          },
          {
            text: "Share observations and progress with families"
          },
          {
            text: "Paper-based child progress reports and access to Pearson’s research-based assessment platform"
          },
        ]
      },
    ]
  },
]


export default function FeaturePage() {

  const { featureId } = useParams();
  const currentFeature = featureData?.find((feature) => feature?.id === featureId );
  const otherFeatures = kgpFeatures.filter((feature) => feature.id !== currentFeature?.id) 

  let color;
  if (currentFeature?.id === 'center_management') {
    color = "#36a4a6";
  } else if (currentFeature?.id === 'family_engagement') {
    color = "#f4b825";
  } else if (currentFeature?.id === 'engaging_lessons') {
    color = "#f56363";
  }

  return (
    <>
      <section className="container tl-2-banner">
        <div className="tl-2-banner-slide-container">
          <div style={{ backgroundImage: `url(${currentFeature?.img})`, backgroundPosition: 'bottom' }}
            className={`tl-2-banner-slide slider-1 banar-1 bg-defaults `}
          >
            <div className="container">
              <div
                style={{ borderLeft: `10px solid ${color}`, borderTop: `10px solid ${color}`}}
                className="tl-2-banner-slide-txt"
              >
                <h1 className="tl-2-banner-title">{currentFeature?.title}</h1>
                <p className="tl-2-banner-descr">{currentFeature?.subtitle}</p>
                <a href="#" style={{ color: color}} className="tl-2-blog-btn">
                  <span style={{ backgroundColor: color}} className="tl-2-blog-btn-icon">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </span>{" "}
                  Get your plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="tl-2-banner-slide-txt-2">
          <h1 className="tl-2-banner-title">{currentFeature?.title}</h1>
          <p className="tl-2-banner-descr">{currentFeature?.subtitle}</p>
          <a href="#" style={{ color: color}} className="tl-2-blog-btn">
            <span style={{ backgroundColor: color}} className="tl-2-blog-btn-icon">
              <i className="fa-regular fa-arrow-up-right"></i>
            </span>{" "}
            Get your plan
          </a>
        </div>
      </div>

      <CurrentFeatures data={currentFeature} color={color} />
      <OtherFeatures data={otherFeatures}/>
      <Partner/>
    </>
  )
}
