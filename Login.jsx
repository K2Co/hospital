// src/components/Login.jsx
import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      setMsg("Login Successful!");
      console.log(res.data);
      // Navigate or store token here
    } catch (err) {
      setMsg("Login Failed: Invalid credentials.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ padding: 4, mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Hospital Login
        </Typography>
        <Typography variant="body2" color="error" gutterBottom>
          {msg}
        </Typography>

        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2, width: "100%" }}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#1976d2" }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
