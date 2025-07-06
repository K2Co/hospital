// src/App.jsx
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
       
      </Routes>
    
    
  
    
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <LocalHospitalIcon color="primary" sx={{ fontSize: 50 }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome to ALAN JIBIN MEMORIAL HOSPITAL
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Excellence in healthcare, trust in care.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Location Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <LocationOnIcon color="secondary" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Location
          </Typography>
        </Box>
        <Typography variant="body1">
          ALAN JIBIN MEMORIAL Hospital, koothattukulam, kerala, India – 560001
        </Typography>
      </Paper>

      {/* Infrastructure Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <ApartmentIcon color="success" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Infrastructure
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          Our hospital is equipped with 300+ beds, 24x7 emergency care,
          operation theatres, digital diagnostic labs, and modular ICUs.
        </Typography>
        <Typography variant="body1">
          We use the latest healthcare technology to provide advanced treatment
          in Cardiology, Neurology, Oncology, Orthopedics, and Pediatrics.
        </Typography>
      </Paper>

      {/* Doctors Section */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <GroupIcon color="info" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Our Doctors
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {[
            { name: "Dr. Alan Jibin", dept: "Cardiologist" },
            { name: "Dr. yadhukrishna Hari", dept: "Orthopedic Surgeon" },
            { name: "Dr. nandhana Biju", dept: "Pediatrician" },
            { name: "Dr. nandhana Pradeep", dept: "Neurologist" },
          ].map((doc, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={1}
                sx={{ p: 2, backgroundColor: "#f9f9f9", height: "100%" }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {doc.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {doc.dept}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
    </>
  );
}

export default App;