import { z } from 'zod'

export const ApplySchema = z.object({
  givenName: z.string().min(2, 'Required'),
  familyName: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  nationality: z.string().min(2, 'Required'),
  passportNumber: z.string().min(6, 'Required').max(20, 'Too long').regex(/^[A-Z0-9-]+$/i, 'Letters/numbers only'),
  dob: z.string().min(8, 'Required'),
  plannedArrival: z.string().optional(),
  plannedDeparture: z.string().optional(),
  criminalHistory: z.boolean().optional(),
  communicableDisease: z.boolean().optional(),
  overstayedBefore: z.boolean().optional(),
  cfTurnstile: z.string().optional(),
})
export type ApplyInput = z.infer<typeof ApplySchema>
