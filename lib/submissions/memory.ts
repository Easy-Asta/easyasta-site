import type { Submission } from './types'

const store = new Map<string, Submission>()

export const memoryRepo = {
  async create(s: Submission){ store.set(s.id, s) },
  async getById(id: string){ return store.get(id) ?? null },
  async list(){ return Array.from(store.values()).sort((a,b)=>b.createdAt-a.createdAt) },
  async update(id: string, patch: Partial<Submission>){
    const cur = store.get(id); if(!cur) return
    store.set(id, { ...cur, ...patch })
  },
}
