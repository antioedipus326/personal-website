import React from 'react'
import { Box, Container, IconButton, Link, Tooltip, Divider, Typography } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { useColorMode } from '../../context/color-mode-context'

const ExternalLink: React.FC<React.ComponentProps<typeof Link>> = (props) => (
  <Link target="_blank" rel="noreferrer" {...props} />
)

const Work: React.FC<{ title: string; children?: React.ReactNode; href?: string }> = ({ title, children, href }) => (
  <Box sx = {{ mb: '1em', pl: { xs: 2, sm: 3 } }}>
    <Typography variant="body1" component="span" sx = {{color: "text.secondary"}}>
      {href ? <ExternalLink href={href}>{title}</ExternalLink> : title}
    </Typography>{" "}
    {children && <Typography variant="body1" component="span" color="text.primary">{children}</Typography>}
  </Box>
)

function App(): React.JSX.Element {
  const { mode, toggleColorMode } = useColorMode()
  return (
    <Box sx={{ mx: 'auto', maxWidth: 900, py: { xs: 1, sm: 3, md: 6 }, px: { xs: 1, sm: 3, md: 6 }}}>
      <Container maxWidth="lg" component="main" sx={{ bgcolor: 'background.paper', px: { xs: 2.5, sm: 5, md: 8 }, py: { xs: 3, sm: 5, md: 7 }, position: 'relative' }}>
          
          <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton onClick={toggleColorMode} aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`} sx={{ border: 1, borderColor: 'divider'}}>
              {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
          </Tooltip>            

          <Typography variant="h1">Adam B. Coppola</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>Adam is a versatile researcher, reporter, and software developer. He's currently pursuing a master's degree in journalism and media innovation at Emerson College in Boston.</Typography>
          
          <Box
            component="img"
            src="./img/photo-2.jpg"
            alt="Adam does a field interview. Belle Isle Marsh, October 2026."
            sx={{
              mb: 4,
              display: 'block',
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? '0 4px 18px rgba(0, 0, 0, 0.45)'
                  : '0 2px 10px rgba(0, 0, 0, 0.14)',
            }}
          />

          <Typography component="h3" variant="h3">Journalism &amp; Reporting</Typography>
          <Work title="Arlington committee outlines a multi-family, multi-use zone for Mass Ave" href="#">(2026) Coming soon.</Work>
          <Work title="48 Students Enroll in Delta Engineering, Classes to Begin in Temporary Facilities (one-page sample)" href="./pdf/pdf-1.pdf">(August 2026) In Kyiv, Ukraine, Delta Engineering is a new undergrad engineering program teaching human-centered design. </Work>       
          <Work title="Delta Engineering Presents to Deans at Kyiv School of Economics, Application Period Opens (one-page sample)" href="./pdf/pdf-2.pdf">(July 2026) </Work>
          <Work title="KSE Partner-Student Visits Olin College and Heralds the Launch of Delta Engineering (one-page sample)" href="./pdf/pdf-3.pdf">(June 2026) </Work>          
          <Work title="Buying Pains" href="https://www.buyingpains.org">(2022) An informational feature story about textile contact dermatitis. People with this condition struggle to get useful information about materials and chemicals in clothing.</Work>

          <Typography component="h3" variant="h3">Podcasts</Typography>
          <Work title="Healthcare Interoperability" href="https://podcasts.apple.com/us/podcast/8-healthcare-interoperability-part-1-russ-leftwich/id1495197740?i=1000472504350"> (2020) Data Points Podcast. A conversation with healthcare interoperability expert Dr. Russell Leftwich. From a podcast about InterSystems technology hosted by Derek Robinson.</Work>

          <Typography component="h3" variant="h3">Ethnography</Typography>
          <Work title="Ghost Story Hunters" >(2023) A short story about an out-of-service textile mill. Published in a collection of spooky short stories by ethnographers. Co-authored with Dr. Caitrin Lynch. From <ExternalLink href="https://punctumbooks.com/catalog/10.53288/0361.1.00">Living with Monsters: Ethnographic Fiction about Real Monsters</ExternalLink>.</Work>
          
          <Typography component="h3" variant="h3">Education Research</Typography>
          <Work title="Learning Happens Everywhere: An Emergent Narrative of Experiential Learning" >(Nov 1, 2018) American Society for Engineering Education, <ExternalLink href="https://www.aee.org/seer">Symposium of Experiential Education Research</ExternalLink>.</Work>
          <Work title="Genre Repertoires in a Changing Industry: Documentation in a New England Textile Mill">(Mar 1, 2018) <ExternalLink href="https://americanethnologist.org/meetings/spring-conference/aes-2018-resemblance/">American Ethnological Society Spring Conference</ExternalLink>.</Work>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'minmax(0, 1fr) auto' },
              columnGap: { sm: 3 },
              rowGap: 2,
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography component="h2" variant="h2" sx={{ mb: 1 }}>
                Contact Adam
              </Typography>

              <Typography variant="body1">
                <ExternalLink href="https://www.linkedin.com/in/adam-coppola/">
                  Contact Adam on LinkedIn
                </ExternalLink>{' '}
                with assignments, tips, requests, and conversations. 
              </Typography>
              
              <Typography variant="body1">
                Freelance quotes are
                available on request.
              </Typography>
            </Box>

            <Box
              component="img"
              src="./img/photo-1.jpeg"
              alt="Adam Coppola headshot. 2026."
              sx={{
                display: 'block',
                width: { xs: '100%', sm: 128 },
                height: 'auto',
                maxWidth: '100%',
                borderRadius: '10%',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: (theme) =>
                  theme.palette.mode === 'dark'
                    ? '0 4px 18px rgba(0, 0, 0, 0.45)'
                    : '0 2px 10px rgba(0, 0, 0, 0.14)',
              }}
              />
          </Box>
          <Divider aria-hidden="true" sx={{ mb: 2 }}/> 
          <Typography component="p" variant="body2">© 2026 Adam Coppola unless otherwise stated.</Typography>
      
      </Container>
    </Box>
  )
}

export default App
