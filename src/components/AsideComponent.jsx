import React from "react";

import { Button, Divider, Paper, Stack } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const AsideComponent = ({
  title1,
  title2,
  title3,
  title4,
  link1,
  link2,
  link3,
  link4,
}) => {
  return (
    <Paper className="aside_movies" elevation={7}>
      <Stack spacing={1}>
        <Button
          variant="outlined"
          className="Button"
          elevation={7}
          endIcon={<ArrowForwardIosIcon className="Icon" />}
        >
          <a href={link1}>{title1}</a>
        </Button>
        <Divider className="Divider" />
        <Button
          variant="outlined"
          className="Button"
          endIcon={<ArrowForwardIosIcon className="Icon" />}
        >
          <a href={link2}>{title2}</a>
        </Button>
        <Divider className="Divider" />
        <Button
          variant="outlined"
          className="Button"
          endIcon={<ArrowForwardIosIcon className="Icon" />}
        >
          <a href={link3}>{title3}</a>
        </Button>
        <Divider className="Divider" />
        <Button
          variant="outlined"
          className="Button"
          endIcon={<ArrowForwardIosIcon className="Icon" />}
        >
          <a href={link4}>{title4}</a>
        </Button>
      </Stack>
    </Paper>
  );
};

export default AsideComponent;
