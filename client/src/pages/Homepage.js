import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box 
                sx={{ 
                    display: "flex", 
                    justifyContent: "center",  // Center the box horizontally
                    //alignItems: "center",      // Center the box vertically
                    height: "100vh",           // Take full viewport height to center vertically
                    mt: "10px"                 // Add 10px margin to the top
                }}
            >
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold" align="center">
                        AI ChatBot
                    </Typography>
                    <Card
                        onClick={() => navigate("/paragraph")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 250,        // Increased height
                            width: 400,         // Increased width
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",  // Center content vertically
                            alignItems: "center",      // Center content horizontally
                            backgroundColor: "#e3f2fd",  // Light blue background color
                            "&:hover": {
                                border: 2,
                                boxShadow: 0,
                                borderColor: "#0288d1",  // Darker blue border on hover
                                cursor: "pointer",
                            },
                        }}
                    >
                        <FormatAlignLeftOutlined
                            sx={{ fontSize: 100, color: "#0288d1", mb: 2 }}  // Blue color for the icon
                        />
                        <Stack>
                            <Typography fontWeight="bold" variant="h4" align="center">
                            "Dive into AI Magic!"
                            </Typography>
                            {/* <Typography variant="h5" align="center">
                            "Your instant, intelligent assistant for all your questions."

                            </Typography> */}
                        </Stack>
                    </Card>
                </Box>
            </Box>
        </>
    );
};

export default Homepage;
