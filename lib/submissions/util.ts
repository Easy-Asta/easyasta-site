export function newId(prefix='EA'){ 
  const s = Math.random().toString(36).slice(2,8).toUpperCase()
  const t = Date.now().toString(36).slice(-4).toUpperCase()
  return `${prefix}-${s}${t}`
}
