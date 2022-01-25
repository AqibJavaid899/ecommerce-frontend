import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  background-color: teal;
`;

const AnnouncementText = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Announcement = () => {
  return (
    <Container>
      <AnnouncementText>
        Super Deal! Free Shipping on Orders Over $50
      </AnnouncementText>
    </Container>
  );
};

export default Announcement;
