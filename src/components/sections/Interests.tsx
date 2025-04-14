import React from 'react';
import { Container, Typography, Grid, Box, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
const Interests = () => {

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h4" gutterBottom align="center">
            Interests
          </Typography>

          <Box
            component="form"
            sx={{
              mt: 4,
              '& .MuiTextField-root': { mb: 2 }
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <InstagramIcon sx={{ pt: 1 }}> </InstagramIcon>
                Actively contributing to the Developer community by simplifying coding concepts and career insights through engaging content on my Instagram platform
                <Link sx={{ mr: 2, mt: 1 }} href="https://www.instagram.com/coding__lyf/" target="_blank" >
                  @Coding_lyf
                </Link>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FitnessCenterIcon sx={{ pt: 1 }}> </FitnessCenterIcon>
                Passionate about integrating health, fitness, and productivity into a demanding tech career. Promote wellness habits, disciplined nutrition, and regular workouts, while sharing actionable tips for work-life balance and mental well-being with the tech community.
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Interests;