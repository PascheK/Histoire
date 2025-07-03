'use client'

/**
 * Introductory screen for the "After" phase detailing recovery priorities and
 * presenting early assessment data.
 */

import SectionHeader from '@/components/common/SectionHeader'
import BulletPointCard from '@/components/common/BulletPointCard'
import FactHighlight from '@/components/common/FactHighlight'
import InfoTable from '@/components/common/InfoTable'

export default function IntroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center bg-white text-black gap-8">
      <SectionHeader title="Post-Event Assessment & Recovery" />

      <div className="grid gap-6 max-w-5xl w-full justify-items-center">
        <FactHighlight label="93%" value="Buildings Assessed in 24h" />
        <BulletPointCard
          title="Initial Recovery Priorities"
          points={[
            'Clear access roads and remove critical debris',
            'Evaluate structural safety of public buildings',
            'Establish communication with isolated areas',
          ]}
        />
        <InfoTable
          title="Damage Classification"
          headers={['Category', 'Description', 'Count']}
          rows={[
            ['No Visible Damage', 'Structures appear unaffected', '12,402'],
            ['Minor Damage', 'Superficial issues (e.g., missing shingles)', '3,120'],
            ['Major Damage', 'Visible structural compromise', '894'],
            ['Destroyed', 'Irreparable or collapsed buildings', '137'],
          ]}
        />
      </div>
    </section>
  )
}
