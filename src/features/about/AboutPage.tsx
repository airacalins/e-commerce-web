import { Button, ButtonGroup, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
    return (
        <>
            <Typography variant="h1">Errors for Testing Purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={() => agent.TestErrors.gete400Error()}>Bad Request</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.gete401Error()}>Unauthorized</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.gete404Error()}>Not found</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.gete500Error()}>Server Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.getValidationError()}>Validation Error</Button>
            </ButtonGroup>
        </>


    )
}