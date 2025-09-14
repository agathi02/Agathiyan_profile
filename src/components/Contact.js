import { useState } from "react";
import { 
  TextField, 
  Button, 
  Grid, 
  Box, 
  IconButton, 
  Snackbar, 
  Alert, 
  Card, 
  CardContent, 
  Typography,
  Fade,
  Slide
} from "@mui/material";
import { 
  Email, 
  LinkedIn, 
  GitHub, 
  WhatsApp,
  Send,
  Person,
  Phone 
} from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [activeField, setActiveField] = useState(null);

  // Function to open WhatsApp with the specified number
  const openWhatsApp = () => {
    window.open(`https://wa.me/918940691571`, '_blank');
  };

  // Function to open email client
  const openEmail = () => {
    window.location.href = "mailto:agathiy117@gmail.com";
  };

  // Function to open LinkedIn
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/agathiyan-s-096389285", "_blank");
  };

  // Function to open GitHub
  const openGitHub = () => {
    window.open("https://github.com/agathi02", "_blank");
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields",
        severity: "error"
      });
      return;
    }

    // For demonstration, we'll open WhatsApp with a pre-filled message
    const whatsappMessage = `Hello, my name is ${formData.name}. ${formData.message} (Reply to: ${formData.email})`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918940691571?text=${encodedMessage}`, '_blank');
    
    // Show success message
    setSnackbar({
      open: true,
      message: "Your message is being prepared for WhatsApp",
      severity: "success"
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  // Function to close snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: 10, 
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Fade in={true} timeout={1000}>
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: "linear-gradient(45deg, #90caf9 30%, #bb86fc 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Let's Connect
          </Typography>
        </Fade>
        
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            mb: 8, 
            color: "#94a3b8",
            maxWidth: "600px",
            mx: "auto"
          }}
        >
          Have a project in mind or just want to chat? Feel free to reach out!
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Slide in={true} direction="up" timeout={800}>
              <Card sx={{ 
                background: "rgba(30, 41, 59, 0.7)", 
                backdropFilter: "blur(10px)",
                borderRadius: 4,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                    Send a Message
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit} sx={{ "& > :not(style)": { mb: 3 } }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      InputLabelProps={{ 
                        sx: { 
                          color: "#94a3b8",
                          "&.Mui-focused": { color: "#90caf9" }
                        } 
                      }}
                      InputProps={{
                        sx: { 
                          color: "white",
                          borderRadius: 2,
                          "&.Mui-focused fieldset": { borderColor: "#90caf9" }
                        },
                        startAdornment: (
                          <Person sx={{ color: activeField === "name" ? "#90caf9" : "#64748b", mr: 1 }} />
                        )
                      }}
                      sx={{ 
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#334155" },
                          "&:hover fieldset": { borderColor: "#90caf9" },
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      InputLabelProps={{ 
                        sx: { 
                          color: "#94a3b8",
                          "&.Mui-focused": { color: "#90caf9" }
                        } 
                      }}
                      InputProps={{
                        sx: { 
                          color: "white",
                          borderRadius: 2,
                          "&.Mui-focused fieldset": { borderColor: "#90caf9" }
                        },
                        startAdornment: (
                          <Email sx={{ color: activeField === "email" ? "#90caf9" : "#64748b", mr: 1 }} />
                        )
                      }}
                      sx={{ 
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#334155" },
                          "&:hover fieldset": { borderColor: "#90caf9" },
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      InputLabelProps={{ 
                        sx: { 
                          color: "#94a3b8",
                          "&.Mui-focused": { color: "#90caf9" }
                        } 
                      }}
                      InputProps={{
                        sx: { 
                          color: "white",
                          borderRadius: 2,
                          "&.Mui-focused fieldset": { borderColor: "#90caf9" }
                        }
                      }}
                      sx={{ 
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#334155" },
                          "&:hover fieldset": { borderColor: "#90caf9" },
                        }
                      }}
                    />
                    
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        py: 1.5,
                        background: "linear-gradient(45deg, #6366f1 0%, #8b5cf6 100%)",
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: "1rem",
                        boxShadow: "0 4px 14px rgba(139, 92, 246, 0.4)",
                        "&:hover": {
                          background: "linear-gradient(45deg, #4f46e5 0%, #7c3aed 100%)",
                          boxShadow: "0 6px 20px rgba(139, 92, 246, 0.6)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Slide in={true} direction="up" timeout={1000}>
              <Card sx={{ 
                background: "rgba(30, 41, 59, 0.7)", 
                backdropFilter: "blur(10px)",
                borderRadius: 4,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                height: "100%"
              }}>
                <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "100%" }}>
                  <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                  
                  <Box sx={{ flexGrow: 1 }}>
                    {/* Email */}
                    <Box 
                      onClick={openEmail}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        mb: 2,
                        borderRadius: 3,
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(30, 64, 175, 0.2)",
                          transform: "translateX(8px)"
                        }
                      }}
                    >
                      <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(37, 99, 235, 0.2)",
                        mr: 3
                      }}>
                        <Email sx={{ color: "#3b82f6", fontSize: 26 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "#94a3b8", mb: 0.5 }}>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          agathiy117@gmail.com
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* WhatsApp */}
                    <Box 
                      onClick={openWhatsApp}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        mb: 2,
                        borderRadius: 3,
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(22, 163, 74, 0.2)",
                          transform: "translateX(8px)"
                        }
                      }}
                    >
                      <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(22, 163, 74, 0.2)",
                        mr: 3
                      }}>
                        <WhatsApp sx={{ color: "#22c55e", fontSize: 26 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "#94a3b8", mb: 0.5 }}>
                          WhatsApp
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          +91 89406 91571
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* GitHub */}
                    <Box 
                      onClick={openGitHub}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        mb: 2,
                        borderRadius: 3,
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(109, 40, 217, 0.2)",
                          transform: "translateX(8px)"
                        }
                      }}
                    >
                      <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(109, 40, 217, 0.2)",
                        mr: 3
                      }}>
                        <GitHub sx={{ color: "#8b5cf6", fontSize: 26 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "#94a3b8", mb: 0.5 }}>
                          GitHub
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          github.com/agathi02
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* LinkedIn */}
                    <Box 
                      onClick={openLinkedIn}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        mb: 2,
                        borderRadius: 3,
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(14, 78, 182, 0.2)",
                          transform: "translateX(8px)"
                        }
                      }}
                    >
                      <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(14, 78, 182, 0.2)",
                        mr: 3
                      }}>
                        <LinkedIn sx={{ color: "#0ea5e9", fontSize: 26 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "#94a3b8", mb: 0.5 }}>
                          LinkedIn
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          Agathiyan S
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    mt: 4, 
                    p: 3, 
                    borderRadius: 3, 
                    bgcolor: "rgba(15, 23, 42, 0.5)",
                    textAlign: "center"
                  }}>
                    <Typography variant="body2" sx={{ color: "#94a3b8", mb: 1 }}>
                      Prefer direct communication?
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#60a5fa", fontWeight: 500 }}>
                      I typically respond within 24 hours
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        </Grid>
        
        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity} 
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Contact;
