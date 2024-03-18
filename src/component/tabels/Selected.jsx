import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

const Selected = ({ data }) => {
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
                {data.area}
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};

export default Selected;
