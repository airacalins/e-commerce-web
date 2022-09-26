import { Button, ButtonGroup, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
    return (
        <>
            <Typography variant="h1">Errors for Testing Purposes</Typography>
            <ButtonGroup fullWidth>
                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.gete400Error().catch(error => console.log(error))}>
                    Bad Request
                </Button>

                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.gete401Error().catch(error => console.log(error))}>
                    Unauthorized
                </Button>

                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.gete404Error().catch(error => console.log(error))}>
                    Not found
                </Button>

                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.gete500Error().catch(error => console.log(error))}>
                    Server Error
                </Button>
                
                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.getValidationError().catch(error => console.log(error))}>
                    Validation Error
                </Button>
            </ButtonGroup>
        </>
    )
}