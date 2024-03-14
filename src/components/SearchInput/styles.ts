import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const CustomSearchInput = styled(TextField)`
  max-width: 300px;
  background-color: white;
  .MuiInputBase-input {
    padding: 5px 10px;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;
