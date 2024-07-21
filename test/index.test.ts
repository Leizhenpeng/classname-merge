import { describe, expect, it } from 'vitest'
import { cn } from '../src'

describe('cn function', () => {
  it('should merge classes correctly', () => {
    const result = cn('p-4', 'bg-red-500', 'text-white')
    expect(result).toBe('p-4 bg-red-500 text-white')
  })

  it('should handle conditional classes', () => {
    const result = cn('p-4', false && 'bg-red-500', 'text-white')
    expect(result).toBe('p-4 text-white')
  })

  it('should handle class arrays', () => {
    const result = cn(['p-4', 'bg-red-500'], 'text-white')
    expect(result).toBe('p-4 bg-red-500 text-white')
  })

  it('should handle multiple truthy and falsy values', () => {
    const result = cn('p-4', null, 'bg-red-500', undefined, 'text-white', false)
    expect(result).toBe('p-4 bg-red-500 text-white')
  })

  it('should merge conflicting classes correctly', () => {
    const result = cn('p-4', 'p-8')
    expect(result).toBe('p-8')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should handle undefined and null input', () => {
    const result = cn(undefined, null)
    expect(result).toBe('')
  })
})
