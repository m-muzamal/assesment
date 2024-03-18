import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Icon,
  Checkbox,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const Search = ({ data, onDataChange }) => {
  const handleCheckboxChange = (id) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, value: !item.value } : item
    );
    onDataChange(newData);
  };

  // console.log("Checked", data);

  return (
    <TableContainer>
      <Table aria-label="table">
        <TableHead sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: ".7rem",
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <Icon component={CheckIcon} fontSize="small" />
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: ".7rem",
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              Address
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: ".7rem",
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              Post Code
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: ".7rem",
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              Property type
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: ".7rem",
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              Number of rooms
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: ".7rem",
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              Floor area
            </TableCell>
          </TableRow>
        </TableHead>
        {data.map((data) => (
          <TableBody
            key={data.id}
            sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderBottom: "2px solid #ccc", padding: "0.7rem" }}
              >
                <Checkbox
                  checked={data.value}
                  onChange={() => handleCheckboxChange(data.id)}
                  color="primary"
                  size="small"
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderBottom: "2px solid #ccc", padding: "0.7rem" }}
              >
                {data.address}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "2px solid #ccc",
                  padding: ".7rem",
                  fontSize: "16px",
                }}
              >
                {data.postcode}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "2px solid #ccc",
                  padding: ".7rem",
                  fontSize: "16px",
                }}
              >
                {data.rooms}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "2px solid #ccc",
                  padding: ".7rem",
                  fontSize: "16px",
                }}
              >
                {data.type}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "2px solid #ccc",
                  padding: ".7rem",
                  fontSize: "16px",
                }}
              >
                {data.area}
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};

export default Search;
