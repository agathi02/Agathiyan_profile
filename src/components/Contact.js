import { TextField, Button, Grid, Box } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box component="form" className="space-y-4">
              <TextField 
                fullWidth 
                label="Name" 
                variant="outlined" 
                InputLabelProps={{ className: "text-white" }}
                className="bg-gray-800 rounded"
              />
              <TextField 
                fullWidth 
                label="Email" 
                variant="outlined" 
                InputLabelProps={{ className: "text-white" }}
                className="bg-gray-800 rounded"
              />
              <TextField 
                fullWidth 
                label="Message" 
                multiline 
                rows={4} 
                variant="outlined" 
                InputLabelProps={{ className: "text-white" }}
                className="bg-gray-800 rounded"
              />
              <Button 
                variant="contained" 
                size="large" 
                endIcon={<Email />}
              >
                Send
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="flex items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Email className="text-blue-400" />
                <span>agathiy117@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitHub className="text-blue-400" />
                <a href="https://github.com/agathi02" target="_blank">
                  github.com/agathi02
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <LinkedIn className="text-blue-400" />
                <a href="#" target="_blank">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
export default Contact;