import { Alert, AlertTitle, Button, ButtonGroup, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.TestErrors
            .getValidationError()
            .then(() => console.log('should not see this'))
            .catch(error => setValidationErrors(error));
    }

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
                    onClick={getValidationError}>
                    Validation Error
                </Button>
            </ButtonGroup>
            {
                    validationErrors.length > 0 && 
                    <Alert severity="error">
                        <AlertTitle>Validation Errors</AlertTitle>
                        <List>
                            {validationErrors.map(error => (
                                <ListItem key={error}>
                                    <ListItemText>{error}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Alert>
                }
        </>
    )
}