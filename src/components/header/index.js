import React, { useState } from "react";
import { routes } from "./constants";
import { ActionButtons, Button, Container, Menu, MenuItem } from "./styled";

const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <Container className="shadow-md">
      <Menu>
        {routes.map((route, i) => (
          <MenuItem
            isActive={active === i}
            onClick={() => setActive(i)}
            key={route}
          >
            {route}
          </MenuItem>
        ))}
      </Menu>
      <ActionButtons>
        <Button>Sign</Button>
        <Button>Log</Button>
      </ActionButtons>
    </Container>
  );
};

export default Header;
