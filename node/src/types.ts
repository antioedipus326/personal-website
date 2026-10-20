import { ReactNode } from 'react'

/**
 * Defines the application's theme mode.
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Defines the shape of the ColorMode context.
 * The context provides the current mode and a function to toggle it.
 */
export interface ColorModeContextProps {
  mode: ThemeMode;
  toggleColorMode: () => void;
}

/**
 * Defines the structure for a card item in the tree.
 */
export type Card = {
  cardID: number;
  isCollapsible: boolean;
  CollapsedChildren?: number[];
  PrimaryTypography: ReactNode;
  CollapsedTypography?: ReactNode;
};