import { Container } from "@mui/material";
import NavBar from "./NavBar";

interface IProps {
  children: JSX.Element
}

export default function NavPageContainer({ children }: IProps) {
  return (
    <>
      <NavBar />
      <Container>
        {children}
      </Container>
    </>
  )

}
