import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
// Left Container
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const LanguageOption = styled.span`
  font-size: 16px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-content: center;
  border: 1px solid lightgray;
  padding: 4px;
  margin-left: 24px;
`;
const InputContainer = styled.input`
  border: none;
  text-decoration: none;
`;

// Center Container
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const StoreName = styled.h1`
  font-weight: bold;
`;

// Right Container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 24px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {/* Left Container */}
        <Left>
          <LanguageOption>EN</LanguageOption>
          <SearchContainer>
            <InputContainer />
            <SearchOutlined
              style={{ color: "gray", fontSize: "20", marginLeft: "4px" }}
            />
          </SearchContainer>
        </Left>

        {/* Center Container */}
        <Center>
          <StoreName>BIG BAZAAR.</StoreName>
        </Center>

        {/* Right Container */}
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge color="primary" badgeContent={4}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
