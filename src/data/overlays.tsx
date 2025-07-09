import PartnerNetwork from '@/components/PartnerNetwork';
import type { OverlayItem } from '@/types/overlay'
import Image from 'next/image'
/**
 * Overlay configuration objects for each presentation phase. These values are
 * consumed by `renderOverlays` to create actual overlay elements.
 */

export const beforeOverlays: OverlayItem[] = [
  {
    key: 'before-1',
    appear: 1,
    disappear: 5,
    align: 'center',
    type: 'transparent',
    content: (
      <>
      <p className="md:text-2xl text-xl font-medium">
        Before disaster strikes, we rely on open-source data to understand what&apos;s at risk, or what has been affected by a disaster
      </p>
                      <Image
            src={'/images/pre-ex.png'}
            alt={'image of pre-disaster buildings'}
            width={200}
            height={100}
            className="object-contain w-full lg:h-100 h-50"

          />
          </>
    ),
    withIcon: false,
  },
    
  {
    key: 'before-2',
    appear: 4,
    disappear: 10,
    align: 'bottom right',
    type: 'success',
    content: (
      <p className="md:text-2xl text-xl font-medium">
        AI-based segmentation on VHR imagery provides high-quality building data, complementing open source datasets
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'before-3',
    appear: 10,
    disappear: 15,
    align: 'top right',
    type: 'warning',
    content: (
      <p className="md:text-2xl text-xl font-medium">
        Early warning systems detect disasters in real time
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'before-4',
    appear: 15,
    disappear: 20,
    align: 'center',
    type: 'info',
    content: (
      <>  
         <p className="md:text-2xl text-xl font-medium">
        Collaborating with local agencies and academics improves preparedness and resilience
      </p>
                          <Image
            src={'/images/pre-ex.png'}
            alt={'image of pre-disaster buildings'}
            width={200}
            height={100}
            className="object-contain w-full lg:h-100 h-50"

          /></>
   
    ),
    withIcon: false,
  },
  {
    key: 'before-5',
    appear: 20,
    disappear: 30,
    align: 'fullscreen',
    type: 'transparent',
    content: (
            <PartnerNetwork />
      
    ),
    withIcon: false,
  },
];

export const afterOverlays: OverlayItem[] = [
  {
    key: 'after-1',
    appear: 1,
    disappear: 7,
    align: 'top left',
    type: 'info',
    content: (
      <p className="md:text-2xl text-xl font-medium">
        Sentinel-1 CCD shows where structures are likely damaged.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'after-2',
    appear: 7,
    disappear: 11,
    align: 'top right',
    type: 'info',
    content: (
      <p className="md:text-2xl text-xl font-medium">
     Filtered SAM buildings intersecting Sentinel-1 CCD hotspots
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'after-3',
    appear: 11,
    disappear: 18,
    align: 'center',
    type: 'info',
    content: (
      <p className="md:text-2xl text-xl font-medium">
        Estimated debris volume per structure based on DSM elevation
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'after-4',
    appear: 18,
    disappear: 36,
    align: 'bottom right',
    type: 'info',
    content: (
      <>
      <p className="md:text-2xl text-xl font-medium">
Analysis scaled across all affected islands
     </p>
      <Image
            src={'/images/pre-ex.png'}
            alt={'image of pre-disaster buildings'}
            width={200}
            height={100}
            className="object-contain w-full lg:h-100 h-50"

          />
          </>
    ),
    withIcon: false,
  },

  
];
