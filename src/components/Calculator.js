import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function plus() {
    setResult(parseFloat(num1) + parseFloat(num2));
    setNum1("");
    setNum2("");
  }

  function minus() {
    setResult(parseFloat(num1) - parseFloat(num2));
    setNum1("");
    setNum2("");
  }

  function multiply() {
    setResult(parseFloat(num1) * parseFloat(num2));
    setNum1("");
    setNum2("");
  }

  function devision() {
    setResult(parseFloat(num1) / parseFloat(num2));
    setNum1("");
    setNum2("");
  }

  function handelChange(setNum, e) {
    setNum(e.target.value);
    setResult("");
  }
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Калькулятор
        </Typography>
        <TextField
          label="Число 1"
          variant="outlined"
          margin="dense"
          fullWidth
          type="number"
          value={num1}
          onChange={(e) => {
            handelChange(setNum1, e);
          }}
        />
        <TextField
          label="Число 2"
          variant="outlined"
          margin="dense"
          fullWidth
          type="number"
          value={num2}
          onChange={(e) => {
            handelChange(setNum2, e);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={plus}
          disabled={!num1 || !num2}
        >
          Сложение
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={minus}
          disabled={!num1 || !num2}
        >
          Вычитание
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={multiply}
          disabled={!num1 || !num2}
        >
          Умножение
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={devision}
          disabled={!num1 || !num2}
        >
          Деление
        </Button>
        {result && (
          <Typography variant="h4" sx={{ textAlign: "center", marginTop: 2 }}>
            Результат:{result}
          </Typography>
        )}
      </Container>
    </div>
  );
}
export default Calculator;
