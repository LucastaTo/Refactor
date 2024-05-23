import React from "react";

const OverView: React.FC = () => {
  const concepts = [
    {
      name: "robotics",
      link: "https://academic.online/explore/concept/f685086f2f6e15cae19cba244e7b8f4a71368eb26101921dc8a39ebd",
    },
    {
      name: "robotics 1",
      link: "https://academic.online/explore/concept/f685086f2f6e15cae19cba244e7b8f4a71368eb26101921dc8a39ebd",
    },
    {
      name: "robotics 2",
      link: "https://academic.online/explore/concept/f685086f2f6e15cae19cba244e7b8f4a71368eb26101921dc8a39ebd",
    },
    {
      name: "robotics 3",
      link: "https://academic.online/explore/concept/f685086f2f6e15cae19cba244e7b8f4a71368eb26101921dc8a39ebd",
    },
    {
      name: "robotics 4",
      link: "https://academic.online/explore/concept/f685086f2f6e15cae19cba244e7b8f4a71368eb26101921dc8a39ebd",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="search-dashboard">
        <div className="concept-discovery">
          <div className="concept-home">
            <span className="icon">
              <img
                src="https://academic.online/static/media/logo-pure.d7e8a1cdefe6fad4726a.png"
                alt="explore more"
              />
            </span>
            <p> Explore keywords</p>
          </div>
          {concepts.flatMap((concepts) => (
            <div className="concept-home">
              <p>{concepts.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;