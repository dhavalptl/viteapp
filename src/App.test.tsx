import { expect, it } from 'vitest'
import { render, screen } from './utils/testUtil'
import App from './App'

it('Should render title correctly', async () => {
  render(<App />)
  expect(screen.getByText('Vite with React')).toBeDefined()
})