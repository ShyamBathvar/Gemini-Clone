import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const authToken = localStorage.getItem("authToken");
    const loggedIn = !!authToken;  // Check if token exists

    // Handle logout
    const handleLogout = async () => {
        try {
            await axios.post("https://gemini-clone-backend-qaqq.onrender.com/api/v1/auth/logout");
            localStorage.removeItem("authToken");
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box
            width={"100%"}
            backgroundColor="#e3f2fd"  // Light blue background color
            p="1rem 6%"
            textAlign="center"
            sx={{ boxShadow: 3, mb: 2 }}
        >
            <Typography variant="h2" color="#000000" fontWeight="bold">
                Gemini-Clone
            </Typography>
            <Box mt={2}>
                {loggedIn ? (
                    <>
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/login" onClick={handleLogout} className="nav-link">
                            Logout
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/register" className="nav-link">
                            Sign Up
                        </NavLink>
                        <NavLink to="/login" className="nav-link">
                            Sign In
                        </NavLink>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Navbar;
