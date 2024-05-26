import React, { ChangeEvent, useState } from "react";
import SearchInput from "../../../reusable/search-input";
import { Button, Col, Row, Select, Typography } from "antd";
import FacultyCard, { FacultiesIProps } from "./components/faculty-card";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiArrowRightCircleFill, RiArrowRightCircleLine } from "react-icons/ri";

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

  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsBouncing((prevState: boolean) => !prevState);
  };

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
              { value: "Faculty", label: "Faculty" },
              { value: "Institutions", label: "Institutions" },
              { value: "Concepts", label: "Concepts" },
              { value: "Venue", label: "Venue" },
            ]}
          />
        </div>
      </div>
      <div className="dashboard-content">
        <Row gutter={[16, 16]}>
          <Col span={24}>
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
          </Col>
          <Col span={24}>
            <div className="concepts">
              <Row gutter={[16, 32]}>
                <Col span={24} className="title">
                  <Typography.Text>
                    Join 262 million academics and researchers
                  </Typography.Text>{" "}
                </Col>
                <Col>
                  <Row gutter={16} className="concepts-row">
                    <Col span={7} className="concepts-box">
                      <div className="concepts-image-container">
                        <img
                          className="bounded-image"
                          loading="lazy"
                          src="//a.academia-assets.com/images/landing/track-impact.svg"
                        />
                      </div>
                      <h2 className="text-white u-fw500 u-lineHeight1_2">
                        Track your impact
                      </h2>
                      <p className="text-white u-fs16">
                        Share your work with other academics, grow your audience
                        and track your impact on your field with our robust
                        analytics
                      </p>
                    </Col>
                    <Col span={7} className="concepts-box">
                      <div className="concepts-image-container">
                        <img
                          className="bounded-image"
                          loading="lazy"
                          src="//a.academia-assets.com/images/landing/discover-research.svg"
                        />
                      </div>
                      <h2 className="text-white u-fw500 u-lineHeight1_2">
                        Discover new research
                      </h2>
                      <p className="text-white u-fs16">
                        Get access to millions of research papers and stay
                        informed with the important topics around the world
                      </p>
                    </Col>
                    <Col span={7} className="concepts-box">
                      <div className="concepts-image-container">
                        <img
                          className="bounded-image"
                          loading="lazy"
                          src="//a.academia-assets.com/images/landing/publish-work.svg"
                        />
                      </div>
                      <h2 className="text-white u-fw500 u-lineHeight1_2">
                        Publish your work
                      </h2>
                      <p className="text-white u-fs16">
                        Publish your research with fast and rigorous service
                        through Academia.edu Publishing. Get instant worldwide
                        dissemination of your work
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="concepts-btn">
                  <Button>Show more</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={24}>
            <div className="institutions">
              <Row gutter={[16, 32]}>
                <Col span={24} className="title">
                  <Typography.Text>
                    Used by academics at over 15,000 institutions
                  </Typography.Text>{" "}
                </Col>
                <Col span={24} className="images">
                  <img
                    src="https://media.academic.online/institutions_images/3c50db92053f15e40fa77f3d61640ce714741d4374287599f43303bf/logo_full.png"
                    alt="logo"
                    className="logo"
                    height={55}
                    width={140}
                    style={{ opacity: 0.5 }}
                  />
                  <img
                    src="https://media.academic.online/institutions_images/c8ce0532e06f11795efc722091f5ad986d7d98148a1fe69bfd66f623/logo_full.png"
                    alt="logo"
                    className="logo"
                    height={55}
                    width={140}
                    style={{ opacity: 0.5 }}
                  />
                  <img
                    src="https://media.academic.online/institutions_images/71c4c4cec6db4266c8f497a5582e5fd3a00267ac05518d535f0327e4/logo_full.png"
                    alt="logo"
                    className="logo"
                    height={55}
                    width={140}
                    style={{ opacity: 0.5 }}
                  />
                </Col>
                <Col span={24} className="more">
                  <img
                    width="100%"
                    src="https://media.istockphoto.com/id/1366724877/vi/anh/quan-%C4%91i%E1%BB%83m-ph%C3%ADa-sau-c%E1%BB%A7a-gi%C3%A1o-vi%C3%AAn-tr%C6%B0%E1%BB%9Fng-th%C3%A0nh-n%C3%B3i-chuy%E1%BB%87n-v%E1%BB%9Bi-h%E1%BB%8Dc-sinh-c%E1%BB%A7a-m%C3%ACnh-trong-b%C3%A0i-gi%E1%BA%A3ng.jpg?s=612x612&w=0&k=20&c=k3etIBb-97jZnkPv4ZvwKayGG9m2Nr1PGECJD1gckiE="
                    alt="logo"
                  />
                  <div className="center-con">
                    <Button
                      className={`round ${isBouncing ? "bounceAlpha" : ""}`}
                      onClick={handleClick}
                    >
                      <AiOutlineArrowRight />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OverView;
