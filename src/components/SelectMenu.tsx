import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NestedMenuItem } from "./NestedMenuItem";
import { Menu, MenuList } from "@mui/material";

const menuItemsData = [
  {
    groupLabel: "1",
    groupItems: [
      {
        subLabel: "1-1",
        subItems: [
          {
            label: "1-1-1",
          },
        ],
      },
      {
        subLabel: "1-2",
        subItems: [
          {
            label: "1-2-1",
          },
          {
            label: "1-2-2",
          },
        ],
      },
    ],
  },
  {
    groupLabel: "2",
    groupItems: [
      {
        subLabel: "2-1",
        subItems: [
          {
            label: "2-1-1",
          },
          {
            label: "2-1-2",
          },
        ],
      },
      
    ],
  },
];

const NestedMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Click Me!
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItemsData.map((menuItem) => (
          <MenuList subheader={menuItem.groupLabel}>
            {menuItem.groupItems.map((subItem) => (
              <NestedMenuItem label={subItem.subLabel} parentMenuOpen={open}>
                {subItem.subItems.map((item) => (
                  <MenuItem onClick={handleClose}>{item.label}</MenuItem>
                ))}
              </NestedMenuItem>
            ))}
          </MenuList>
        ))}
      </Menu>
    </div>
  );
};

export default NestedMenu;
