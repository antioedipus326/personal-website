import React from 'react'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import { Card } from '../../types'
import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop: string) => prop !== 'isCollapsible' && prop !== 'isExpanded',
})<{ isCollapsible: boolean; isExpanded: boolean }>(({ theme, isCollapsible, isExpanded }: {theme: Theme; isCollapsible: boolean; isExpanded: boolean}) => ({
  cursor: isCollapsible ? 'pointer' : 'default',
  transition: 'all 0.3s ease',
  borderRadius: theme.shape.borderRadius,
  // Conditional styling for the active/expanded state
  ...(isExpanded && {
    // A subtle visual cue for the active card
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[4],
  }),
  // Only apply hover effects if the card is collapsible
  ...(isCollapsible && {
    '&:hover': {
      boxShadow: theme.shadows[8],
      transform: 'translateY(-2px)',
    },
  }),
}))

interface CardItemProps {
  card: Card;
  isExpanded: boolean;
  onCardClick: (card: Card) => void;
  depth: number;
}

/**
 * Renders a single, memoized card item.
 * Use React.memo to prevent re-rendering when parent state (like theme) changes,
 * unless this component's props change.
 */
export const CardItem: React.FC<CardItemProps> = React.memo(({ card, isExpanded, onCardClick, depth }) => {
  const typography = isExpanded ? card.CollapsedTypography || card.PrimaryTypography : card.PrimaryTypography

  return (
    // Box for visual indentation based on depth
    <Box sx={{ ml: depth * 2 }}>
      <StyledCard
        isCollapsible={card.isCollapsible}
        isExpanded={isExpanded}
        onClick={() => onCardClick(card)}
        // Aria attributes for accessibility in tree-like structures
        role="treeitem"
        aria-expanded={card.isCollapsible ? isExpanded : undefined}
      >
        <CardContent>
          {typography}
        </CardContent>
      </StyledCard>
    </Box>
  )
})

CardItem.displayName = 'CardItem'