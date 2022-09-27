import { Container, Paper, Typography } from "@mui/material";

export default function ServerErrorPage() {
  return (
    <Container component={Paper}>
      <Typography variant="h5" gutterBottom>Server error</Typography>
    </Container>
  )
}