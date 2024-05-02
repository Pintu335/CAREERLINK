// import React from "react";
// import {
//   MdOutlineDesignServices,
//   MdOutlineWebhook,
//   MdAccountBalance,
//   MdOutlineAnimation,
// } from "react-icons/md";
// import { FaReact } from "react-icons/fa";
// import { GiArtificialIntelligence } from "react-icons/gi";
// import { IoGameController } from "react-icons/io5";

// const PopularCategories = () => {
//   const categories = [
//     {
//       id: 1,
//       title: "Graphics & Design",
//       subTitle: "305 Open Positions",
//       icon: <MdOutlineDesignServices />,
//     },
//     {
//       id: 2,
//       title: "Mobile App Development",
//       subTitle: "500 Open Positions",
//       icon: <MdOutlineWebhook />, // Changed from TbAppsFilled to MdOutlineWebhook
//       link:"https://in.linkedin.com/jobs/mobile-application-developer-jobs?position=1&pageNum=0",
//     },
//     {
//       id: 3,
//       title: "Frontend Web Development",
//       subTitle: "200 Open Positions",
//       icon: <MdOutlineWebhook />,
//     },
//     {
//       id: 4,
//       title: "MERN STACK Development",
//       subTitle: "1000+ Open Postions",
//       icon: <FaReact />,
//     },
//     {
//       id: 5,
//       title: "Account & Finance",
//       subTitle: "150 Open Positions",
//       icon: <MdAccountBalance />,

//     },
//     {
//       id: 6,
//       title: "Artificial Intelligence",
//       subTitle: "867 Open Positions",
//       icon: <GiArtificialIntelligence />,
//     },
//     {
//       id: 7,
//       title: "Video Animation",
//       subTitle: "50 Open Positions",
//       icon: <MdOutlineAnimation />,
//     },
//     {
//       id: 8,
//       title: "Game Development",
//       subTitle: "80 Open Positions",
//       icon: <IoGameController />,
//     },
//   ];
//   return (
//     <div className="categories">
//       <h3>POPULAR CATEGORIES</h3>
//       <div className="banner">
//         {categories.map((element) => {
//           return (
//             <div className="card" key={element.id}>
//               <div className="icon">{element.icon}</div>
//               <div className="text">
//                 <p>{element.title}</p>
//                 <p>{element.subTitle}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PopularCategories;
import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const scrollToCard = (id) => {
    const element = document.getElementById(`card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
      link: "https://in.linkedin.com/jobs/graphic-designer-jobs",
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <MdOutlineWebhook />,
      link: "https://in.linkedin.com/jobs/mobile-application-developer-jobs?currentJobId=3872602971&position=2&pageNum=0",
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
      link: "https://in.linkedin.com/jobs/frontend-developer-jobs",
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
      link: "https://in.linkedin.com/jobs/mern-stack-developer-jobs",
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
      link: "https://in.linkedin.com/jobs/accountant-jobs",
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
      link: "https://in.linkedin.com/jobs/artificial-intelligence-jobs",
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
      link: "https://in.linkedin.com/jobs/video-animation-jobs",
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
      link: "https://in.linkedin.com/jobs/game-developer-jobs",
    },
  ];

  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => (
          <a
            href={element.link}
            key={element.id}
            className="card"
            onClick={() => scrollToCard(element.id)}
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Security measure for target="_blank" links
          >
            <div className="icon">{element.icon}</div>
            <div className="text">
              <p>{element.title}</p>
              <p>{element.subTitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;

