import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { IconButton, Divider } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            <IconButton 
              href="https://github.com/agathi02" 
              target="_blank" 
              className="text-white hover:bg-blue-700"
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton 
              href="#" 
              target="_blank" 
              className="text-white hover:bg-blue-700"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton 
              href="mailto:agathiy117@gmail.com" 
              className="text-white hover:bg-blue-700"
            >
              <Email fontSize="large" />
            </IconButton>
          </div>

          {/* Divider */}
          <Divider className="bg-gray-700 w-full max-w-xs my-4" />

          {/* Copyright */}
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} S. Agathiyan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Tailwind CSS, and Material-UI
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;