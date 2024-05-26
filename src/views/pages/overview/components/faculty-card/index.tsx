import {
  Avatar,
  Card,
  Col,
  Divider,
  Row,
  Skeleton,
  Tooltip,
  Typography,
} from "antd";
import React, { useEffect, useRef, useState } from "react";

export interface FacultiesIProps {
  styles?: any;
  id: string;
  name: string;
  avatar: string;
  description: string;
  skills: string[];
  major: string;
  university: string;
}

const { Text, Title, Paragraph } = Typography;

const FacultyCard: React.FC<FacultiesIProps> = ({
  id,
  name,
  avatar,
  description,
  skills,
  major,
  university,
  styles,
}) => {
  const loading = false;
  const extraCount: number = 2;

  const renderSkills = (skills: string[]): React.ReactNode => {
    const length: number = skills.length;
    const showCount: number =
      extraCount >= length ? length : length - extraCount;
    const displayedSkills: string[] = skills.slice(0, showCount);

    return (
      <>
        {displayedSkills.map((skill, index) => (
          <Text key={index} className="faculty-skill">
            {skill}
          </Text>
        ))}
        {extraCount < length && (
          <Text className="faculty-skill">+{length - showCount}</Text>
        )}
      </>
    );
  };

  const descriptionRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [text, setText] = useState(description);
  useEffect(() => {
    const descriptionElement = descriptionRef.current;
    if (descriptionElement) {
      const textContent = descriptionElement.textContent;
      if (textContent) {
        if (descriptionElement.scrollHeight > 200) {
          const slicedText = textContent.slice(
            0,
            Math.floor(
              (190 / descriptionElement.scrollHeight) * textContent.length
            )
          );

          setText(slicedText.trim() + " ...");
          setShowTooltip(true);
        } else {
          setText(textContent);
          setShowTooltip(false);
        }
      }
    }
  }, []);

  const handleLinkToPortfolio = () => console.log(id);
  return (
    <Card
      style={{ marginTop: 16, ...styles }}
      loading={loading}
      className="faculty-card"
      onClick={handleLinkToPortfolio}
    >
      <Skeleton loading={loading} avatar active />
      <Row gutter={[16, 16]}>
        <Col span={24} style={{ width: "100%" }}>
          <div className="faculty-title-wrapper">
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              className="faculty-avatar"
              src={avatar}
              alt="Avatar"
            />
            <Title className="faculty-name">{name}</Title>
            <Text className="faculty-sub-title">{university || major}</Text>
            <Divider className="faculty-line" />
          </div>
        </Col>
        <Col span={24}>
          <div ref={descriptionRef} className="faculty-description-wrapper">
            <Tooltip title={showTooltip && description}>
              <Text className="faculty-description">{text}</Text>
            </Tooltip>
          </div>
        </Col>
        <Col span={24}>
          <Paragraph className="faculty-skill-wrapper">
            {renderSkills(skills)}
          </Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default FacultyCard;
