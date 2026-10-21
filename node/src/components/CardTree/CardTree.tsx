import React, { useState, useMemo, useCallback, useImperativeHandle } from 'react'
import Box from '@mui/material/Box'
import { Card } from '../../types'
import { cards as allCards } from '../Cards'
import { CardItem } from '../CardItem/CardItem'

/**
 * Defines the public API exposed by this component via ref.
 */
export interface CardTreeRef {
  resetCardTree: () => void;
}

interface CardTreeProps {}

// Use forwardRef to allow the parent component (App.tsx) to access internal methods.
const CardTree = React.forwardRef<CardTreeRef, CardTreeProps>((props, ref) => {
  // Track which cards are currently expanded
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  // Function to reset the expanded cards state
  const resetCardTree = useCallback(() => {
    setExpandedCards(new Set())
  }, [])

  // Expose the reset function to the parent component via the forwarded ref
  useImperativeHandle(ref, () => ({
    resetCardTree,
  }), [resetCardTree])

  // Get visible card IDs based on expansion state
  const getVisibleCardIDs = useCallback((): { id: number, depth: number }[] => {
    const visible: { id: number, depth: number }[] = []
    
    // Determine top-level cards (those with no parent in the CollapsedChildren array of any other card)
    const topLevelIDs = allCards
      .map(c => c.cardID)
      .filter(id => !allCards.some(c => c.CollapsedChildren?.includes(id)))
      // Filter to only the assumed initial top cards to match the user's original array.
      .filter(id => [1, 2, 3].includes(id)) 

    const addCardAndChildren = (cardID: number, depth: number) => {
      visible.push({ id: cardID, depth })

      // If this card is expanded, add its children
      if (expandedCards.has(cardID)) {
        const card = allCards.find(c => c.cardID === cardID)
        if (card?.CollapsedChildren) {
          card.CollapsedChildren.forEach(childID => {
            addCardAndChildren(childID, depth + 1)
          })
        }
      }
    }

    topLevelIDs.forEach(cardID => {
      addCardAndChildren(cardID, 0)
    })

    return visible
  }, [expandedCards])

  const handleCardClick = (card: Card) => {
    if (!card.isCollapsible) return

    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(card.cardID)) {
        newSet.delete(card.cardID)
      } else {
        newSet.add(card.cardID)
      }
      return newSet
    })
  }

  // Memoize the visible card data to prevent unnecessary re-calculation on every render
  const visibleCardData = useMemo(() => getVisibleCardIDs(), [getVisibleCardIDs])
  
  const visibleCards = visibleCardData
    .map(({ id, depth }) => {
      const card = allCards.find(c => c.cardID === id)
      return card ? { card, depth } : null
    })
    .filter((data): data is { card: Card, depth: number } => data !== null)

  return (
    <Box
      sx={{
        width: '100%',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        overflowY: 'auto',
      }}
      role="tree"
    >
      {visibleCards.map(({ card, depth }) => (
        <CardItem
          key={card.cardID}
          card={card}
          isExpanded={expandedCards.has(card.cardID)}
          onCardClick={handleCardClick}
          depth={depth}
        />
      ))}
    </Box>
  )
})

CardTree.displayName = 'CardTree'

export default CardTree