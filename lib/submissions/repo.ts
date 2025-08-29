import type { Submission } from './types'

export interface SubmissionRepository {
  create(s: Submission): Promise<void>
  getById(id: string): Promise<Submission | null>
  list(): Promise<Submission[]>
  update(id: string, patch: Partial<Submission>): Promise<void>
}

export function getRepo(): SubmissionRepository {
  // Swap this out for a DB-backed implementation
  const impl = process.env.ASTA_REPO ?? 'memory'
  if(impl === 'memory'){ return require('./memory').memoryRepo }
  return require('./memory').memoryRepo
}
