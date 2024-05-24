import React from "react";
import SearchInput from "../../../reusable/search-input";
import { Col, Row, Select, Typography } from "antd";
import FacultyCard, { FacultiesIProps } from "./components/faculty-card";
import { AiOutlineArrowRight } from "react-icons/ai";

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

  const faculties: FacultiesIProps[] = [
    {
      id: "1",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "2",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "3",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "4",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "5",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "6",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "7",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "8",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "9",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "10",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
    },
    {
      id: "11",
      name: "Nicholas Boros",
      description:
        "Annual Review of Fluid Mechanics is a peer-reviewed scientific journal covering research on fluid mechanics. It is published once a year by Annual Reviews and the editors are Parviz Moin and Howard Stone. As of 2023, Annual Review of Fluid Mechanics is being published as open access, under the Subscribe to Open model. As of 2023, Journal Citation Reports gives the journal a 2022 impact factor of 27.7, ranking it first out of 34 journals in 'Physics, Fluids and Plasmas' and first out of 137 journals in the category 'Mechanics'.",
      skills: [
        "financial statement fraud",
        "empirical test",
        "computational neuroscience",
        "machine learning",
      ],
      major: "Mathematics and Computer Science",
      university: "Olivet Nazarene University",
      avatar:
        "https://www.olivet.edu/wp-content/uploads/2023/05/Boros_Nicholas-2019-400x400.jpg",
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
        <p className="title">Discover more</p>
        <div className="search">
          <SearchInput
            placeholder="input search text"
            className="custom-search-input"
          />
          <Select
            defaultValue="lucy"
            className="options"
            style={{ width: 120 }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
      </div>
      <div className="dashboard-content">
        <div className="institutions"></div>
        <div className="faculties">
          <span className="more">
            <Typography.Text>Browse faculty</Typography.Text>{" "}
            <AiOutlineArrowRight />
          </span>
          <Row gutter={[16, 16]}>
            {faculties.slice(0, 3).map((faculty, index) => (
              <Col
                span={8}
                style={{
                  justifyContent: index !== 1 ? "center" : "normal",
                }}
              >
                <FacultyCard
                  styles={{ width: index === 1 ? "100%" : "300px" }}
                  skills={faculty.skills}
                  avatar={faculty.avatar}
                  id={faculty.id}
                  description={faculty.description}
                  name={faculty.name}
                  major={faculty.major}
                  university={faculty.university}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OverView;
