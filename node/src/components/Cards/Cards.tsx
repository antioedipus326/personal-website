import { Card } from '../../types' // Corrected import from '../types/Card'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export const cards: Card[] = [

  {cardID: 1,
    isCollapsible: true,
    CollapsedChildren: [4,5,6,13],
    PrimaryTypography: (
      <Typography variant="h6">
        About this site
      </Typography>
    ),
    CollapsedTypography: (
      <Typography variant="h6">
        About this site
      </Typography>
    ),
  },

  {
    cardID: 2,
    isCollapsible: true,
    CollapsedChildren: [7, 8, 9, 10],

    PrimaryTypography: (
      <Typography variant="h6">
        Adam's featured portfolio
      </Typography>
    ),
    CollapsedTypography: (
      <Typography variant="h6">
        Featured portfolio
      </Typography>
    ),
  },

  {cardID: 3,
    isCollapsible: true,
    CollapsedChildren: [11, 12],
    PrimaryTypography: (
      <Typography variant="h6">
        More fun stuff by me!
      </Typography>
    ),
    CollapsedTypography: (
      <Typography variant="h6">
        More fun stuff by me!
      </Typography>
    ),
  },

  {cardID: 4,
    isCollapsible: false,
    PrimaryTypography: (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          On this site, you can view my portfolio.{"\n"}
          Use the forms below to request my resume and email address.{"\n"}
          <Typography sx={{ textIndent: "2em" }}>- Adam Coppola</Typography>
        </Typography>
      </Box>
    ),
  },

  {cardID: 5,
    isCollapsible: false,
    PrimaryTypography: (
        <Button>
        <Typography variant="h6">
          Request curriculum vitae.
        </Typography>
        </Button>
    ),
  },

  {cardID: 6,
    isCollapsible: false,
    PrimaryTypography: (
        <Button>
        <Typography variant="h6">
          Request email contact.
        </Typography>
        </Button>
    ),
  },
  
  {cardID: 7,
    isCollapsible: false,
    PrimaryTypography: (
      <Box>
        <Button href="https://www.buyingpains.org">
        <Typography variant="h6">
          buyingpains.org
        </Typography>
        </Button>
        <Typography variant="body1">
          A conversation about textile contact dermatitis. People with this condition struggle to get useful information about materials and chemicals in clothing. Co-created with a team.
        </Typography>
      </Box>
    ),
  },

  {cardID: 8,
    isCollapsible: false,
    PrimaryTypography: (
      <Box>
        <Button href="https://punctumbooks.com/titles/living-with-monsters-ethnographic-fiction-about-real-monsters/">
          <Typography variant="h6">
            Ghost Story Hunters
          </Typography>
        </Button>
        <Typography variant="body1">
          A short story about hearing echoes in an out-of-service textile mill. This story was published in a collection of short stories by ethnographers with spooky situations to share, called Living with Monsters (ed. Gershon & Musharbash 2023). Co-authored with Dr. Caitrin Lynch.
        </Typography>
      </Box>
    ),
  },

  {cardID: 9,
    isCollapsible: false,
    PrimaryTypography: (
      <Box>
        <Button href="https://podcasts.apple.com/us/podcast/8-healthcare-interoperability-part-1-russ-leftwich/id1495197740?i=1000472504350">
        <Typography variant="h6">
          Healthcare Interoperability
        </Typography>
        </Button>
        <Typography variant="body1">
          A conversation with a healthcare interoperability expert. From the Data Points Podcast, about InterSystems technology. Hosted by Derek Robinson, featuring Russ Leftwich.
        </Typography>
      </Box>
    ),
  },

  {cardID: 10,
    isCollapsible: false,
    PrimaryTypography: (
      <Box>
        <Typography variant="h6">
        Research Conference Citations
        </Typography>
        <Typography variant="body1" component="div">
          <Box component="ul" sx={{ mt: 1, pl: 2 }}>
            <li>
              <Typography variant="body2">
                Learning Happens Everywhere: An Emergent Narrative of Experiential Learning. <Link href="https://www.aee.org/seer">American Society for Engineering Education, Symposium of Experiential Education Reserach.</Link> Nov 1, 2018
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Genre Repertoires in a Changing Industry: Documentation in a New England Textile Mill. <Link href="https://americanethnologist.org/meetings/spring-conference/aes-2018-resemblance/">American Ethnological Society Spring Conference.</Link> Mar 1, 2018
              </Typography>
            </li>
          </Box>
        </Typography>
      </Box>
    ),
  },

  {cardID: 11,
    isCollapsible: false,
    PrimaryTypography: (
      <Box>
        <Typography variant="h6">
          Mystic Valley Disc Golf
        </Typography>
        <Typography variant="body1">
          We play pick-up disc golf in Somerville, Arlington, and Medford, MA, USA.
        </Typography>
        <Button>
          Request to join our Discord channel.
        </Button>
      </Box>
    ),
  },

  {cardID: 12,
    isCollapsible: false,
    PrimaryTypography: (
      <Box>
        <Button>
        <Typography variant="h6">
          Spy Chess
        </Typography>
        </Button>
        <Typography variant="body1">
          Coming soon! A game.
        </Typography>
      </Box>
    ),
  },
  
  {cardID: 13,
    isCollapsible: false,
    PrimaryTypography: (
      <Box>
        <Button href="https://www.linkedin.com/in/adam-coppola/">
        <Typography variant="h6">
          Find me on LinkedIn!
        </Typography>
        </Button>
      </Box>
    ),
  },
];