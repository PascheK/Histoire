import type { OverlayItem } from '@/types/overlay'

/**
 * Overlay configuration objects for each presentation phase. These values are
 * consumed by `renderOverlays` to create actual overlay elements.
 */

export const beforeOverlays: OverlayItem[] = [
  {
    key: 'before-1',
    appear: 1,
    disappear: 3,
    align: 'top left',
    type: 'info',
    content: (
      <p className="text-sm">
        📝 Coordination initiated with local authorities and emergency agencies ahead of landfall.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'before-2',
    appear: 3,
    disappear: 5,
    align: 'bottom right',
    type: 'success',
    content: (
      <p className="text-sm">
        ✅ Emergency shelters inspected and stocked with essential supplies.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'before-3',
    appear: 5,
    disappear: 7,
    align: 'top right',
    type: 'warning',
    content: (
      <p className="text-sm">
        ⚠️ Public briefing issued: residents advised to secure homes and prepare for prolonged outages.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'before-4',
    appear: 7,
    disappear: 10,
    align: 'center',
    type: 'error',
    content: (
      <p className="text-sm font-medium">
        📡 Communications tested between command centers to ensure readiness.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'before-5',
    appear: 10,
    disappear: 13,
    align: 'bottom left',
    type: 'info',
    content: (
      <p className="text-sm">
        🧭 Evacuation routes identified and shared with community leaders.
      </p>
    ),
    withIcon: false,
  },
];

export const duringOverlays: OverlayItem[] = [
  {
    key: 'during-1',
    appear: 1,
    disappear: 4,
    align: 'top',
    type: 'error',
    content: (
      <p className="text-sm font-semibold">
        🚨 Hurricane Beryl made landfall causing widespread power outages and structural damage.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'during-2',
    appear: 4,
    disappear: 7,
    align: 'bottom right',
    type: 'info',
    content: (
      <div className="flex flex-col text-sm">
        <span className="font-medium">📍 Real-time assessments launched</span>
        <span className="opacity-80">Initial field data captured via drones and mobile teams.</span>
      </div>
    ),
    withIcon: false,
  },
  {
    key: 'during-3',
    appear: 7,
    disappear: 10,
    align: 'top left',
    type: 'success',
    content: (
      <p className="text-sm">👷 Emergency responders deployed in affected areas for structural inspections.</p>
    ),
    withIcon: false,
  },
  {
    key: 'during-4',
    appear: 10,
    disappear: 13,
    align: 'center',
    type: 'info',
    content: (
      <p className="font-semibold text-base">
        📡 Satellite imagery analysis in progress to guide targeted relief.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'during-5',
    appear: 13,
    disappear: 16,
    align: 'bottom left',
    type: 'warning',
    content: (
      <p className="text-sm">
        ⚠️ Road blockages and debris reported across Saint Vincent and the Grenadines.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'during-6',
    appear: 16,
    disappear: 19,
    align: 'top right',
    type: 'error',
    content: (
      <span className="text-xs">
        📞 Emergency communication lines activated for civilian reporting and aid coordination.
      </span>
    ),
    withIcon: false,
  },
];

export const afterOverlays: OverlayItem[] = [
  {
    key: 'after-1',
    appear: 1,
    disappear: 4,
    align: 'top left',
    type: 'success',
    content: (
      <p className="text-sm">
        ✅ Initial assessment: majority of critical infrastructure remains operational.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'after-2',
    appear: 4,
    disappear: 7,
    align: 'center',
    type: 'info',
    content: (
      <p className="text-sm font-medium">
        🧑‍💼 Damage evaluation teams deployed across affected regions.
      </p>
    ),
    withIcon: false,
  },
  {
    key: 'after-3',
    appear: 7,
    disappear: 10,
    align: 'bottom right',
    type: 'warning',
    content: (
      <div className="text-sm">
        🏚️ Over 2,000 structures identified with roof or wall damage.
      </div>
    ),
    withIcon: false,
  },
  {
    key: 'after-4',
    appear: 10,
    disappear: 13,
    align: 'top right',
    type: 'error',
    content: (
      <div className="text-sm">
        🧹 Debris clearance underway — priority on major roads and public areas.
      </div>
    ),
    withIcon: false,
  },
  {
    key: 'after-5',
    appear: 13,
    disappear: 16,
    align: 'bottom left',
    type: 'success',
    content: (
      <div className="text-sm">
        🙌 Community volunteers actively supporting relief distribution efforts.
      </div>
    ),
    withIcon: false,
  },
  {
    key: 'after-6',
    appear: 16,
    disappear: 19,
    align: 'center',
    type: 'info',
    content: (
      <p className="text-sm font-semibold text-center">
        📊 Post-event data collection in progress to support long-term recovery planning.
      </p>
    ),
    withIcon: false,
  },
];
