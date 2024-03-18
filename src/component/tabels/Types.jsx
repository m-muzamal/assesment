import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

const Types = ({ data }) => {
  const types = data.map((item) => item.type);
  const type = new Set(types);
  // console.log(type);

  return (
    <TableContainer>
      <Table sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: ".7rem",
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              All
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.from(type)?.map((data, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{
                  padding: ".7rem",
                  fontSize: "16px",
                }}
              >
                {data}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Types;
