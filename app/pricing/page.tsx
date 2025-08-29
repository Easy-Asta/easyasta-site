import PriceBreakdown from '@/components/PriceBreakdown'

export const metadata = { title: 'Pricing — EasyASTA' }

export default function Page(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pricing</h1>
      <PriceBreakdown />
      <p className="text-sm text-slate-600">Service fee charged by EasyASTA using Stripe or PayPal. Official ESTA fee is paid to U.S. CBP. You can apply directly with CBP at a lower cost.</p>
      <a className="btn" href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">Go to official CBP ESTA</a>
    </div>
  )
}
