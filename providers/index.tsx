import React from 'react'
import { AnalyticsBrowser } from '@segment/analytics-next'
import { withConsent } from '../components/consent/consent-wrapper'
import { IStores } from '../data/stores/interfaces'

type AnalyticsProviderProps = {
  writeKey: string
  stores: IStores
  onConsentChanged: (event: any) => void
  children: React.ReactNode
}

export const AnalyticsContext = React.createContext<AnalyticsBrowser>(undefined!)

export const AnalyticsProvider = ({ children, writeKey, stores, onConsentChanged }: AnalyticsProviderProps) => {
  const analyticsInstance = withConsent(
    AnalyticsBrowser.load({ writeKey, cdnURL: process.env.NEXT_PUBLIC_SEGMENT_CDN || 'https://cdn.segment.com' }),
    { onConsentChanged: onConsentChanged, stores: stores }
  );
  const analytics = React.useMemo(
    () => analyticsInstance,
    [analyticsInstance]
  )
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  )
}
