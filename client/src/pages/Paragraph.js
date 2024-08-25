import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    TextField,
    Button,
    Alert,
    Collapse,
    Card,
} from "@mui/material";

const Paragraph = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    // media query for responsive design
    const isNotMobile = useMediaQuery("(min-width: 1000px)");
    // state management
    const [text, setText] = useState("");
    const [para, setPara] = useState("");
    const [error, setError] = useState("");

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make sure the URL matches your API endpoint
            const { data } = await axios.post("https://gemini-clone-backend-qaqq.onrender.com/api/v1/ai/generate-text", { prompt: text });
            console.log(data);

            // Assuming the API returns { text: "generated text" }
            if (data.text) {
                setPara(data.text);
            } else {
                setError("No text returned from API.");
            }
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <Box
            width={isNotMobile ? "40%" : "80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
            backgroundColor={theme.palette.background.alt}
        >
            <Collapse in={!!error}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Collapse>
            <form onSubmit={handleSubmit}>
                <Typography variant="h3">How can I help you today?</Typography>

                <TextField
                    placeholder="Add your prompt text"
                    type="text"
                    multiline
                    required
                    margin="normal"
                    fullWidth
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ color: "white", mt: 2 }}
                >
                    Generate
                </Button>
                <Typography mt={2}>
                    Not this tool? <Link to="/">GO BACK</Link>
                </Typography>
            </form>

            {para ? (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography p={2}>{para}</Typography>
                </Card>
            ) : (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography
                        variant="h5"
                        color="natural.main"
                        sx={{
                            textAlign: "center",
                            verticalAlign: "middle",
                            lineHeight: "450px",
                        }}
                    >
                        Your Result Will Appear Here
                    </Typography>
                </Card>
            )}
        </Box>
    );
};

export default Paragraph;
