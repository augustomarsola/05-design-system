import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

const scaleIn = keyframes({
  from: {
    transform: 'scale(0)',
  },
  to: {
    transform: 'scale(1)',
  },
})

const scaleOut = keyframes({
  from: {
    transform: 'scale(1)',
  },
  to: {
    transform: 'scale(0)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${scaleIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${scaleOut} 200ms ease-out`,
  },
})
