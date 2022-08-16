import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
          <Typography fontWeight={700} sx={{
          fontSize:{lg:'44px', xs:'30px'}
          }}
          mb='50px' textAlign={'center'}>
        Awesome Exercises you <br />
        Should Know
      </Typography>
    </Stack>
  );
};

export default SearchExercises;
