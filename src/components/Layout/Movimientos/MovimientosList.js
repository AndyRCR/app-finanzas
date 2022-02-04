import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useFetch } from "../../../hooks/useFetch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
      marginTop: '100px',
      width: '90%',
      margin: 'auto',
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
        marginTop: '80px',
        maxHeight: 'none',
    }
  },
  head: {
    backgroundColor: 'rgba(3,139,199,0.8)',
    fontWeight: 'bold'
  }
}));

const MovimientosList = ({ url }) => {
  const classes = useStyles();
  const { data } = useFetch(url);
  
  if(!data) return null

  function createData(idmovimientos, movimiento, fecha, motivo, concepto, importe, nota) {
    return { idmovimientos, movimiento, fecha, motivo, concepto, importe, nota };
  }

  let rows = [];
  for (let i = 0; i < data.length; i++) {
    rows.push(
      createData(
        data[i]["idmovimientos"],
        data[i]["movimiento"],
        data[i]["fecha"],
        data[i]["motivo"],
        data[i]["concepto"],
        data[i]["importe"],
        data[i]["nota"]
      )
    );
  }

  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className={classes.head}>
            <TableRow className={classes.headRow}>
              <TableCell align="center">Movimiento</TableCell>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">Motivo</TableCell>
              <TableCell align="center">Concepto</TableCell>
              <TableCell align="center">Importe</TableCell>
              <TableCell align="center">Nota</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && rows.map((row) => (
              <TableRow
                key={row.idmovimientos}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.movimiento}</TableCell>
                <TableCell align="center">{row.fecha}</TableCell>
                <TableCell align="center">{row.motivo}</TableCell>
                <TableCell align="center">{row.concepto}</TableCell>
                <TableCell align="center">{"S/" + row.importe}</TableCell>
                <TableCell align="center">{row.nota}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MovimientosList;
