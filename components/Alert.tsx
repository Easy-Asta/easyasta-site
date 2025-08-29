export default function Alert({ children }: { children: React.ReactNode }){
  return <div className="border-l-4 border-amber-500 bg-amber-50 text-amber-900 p-3 rounded">{children}</div>
}
