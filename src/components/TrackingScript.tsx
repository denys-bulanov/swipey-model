import Script from 'next/script'

export default function TrackingScript() {
  return <Script src={process.env.NEXT_PUBLIC_TRACKING_SCRIPT} strategy='afterInteractive' />
}
