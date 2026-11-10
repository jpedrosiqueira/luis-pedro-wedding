/**
 * The weekend timeline. Text for each event (title, description, place)
 * lives in the language files under "schedule.events.<id>".
 *
 * To update: set `time` to a 24-hour 'HH:MM' string once it is confirmed.
 * `time: null` shows a TODO marker. `tentative: true` shows "To be confirmed".
 * To add an event, add a line here and a matching entry in each language file.
 */
export type Day = 'fri' | 'sat' | 'sun';
export interface ScheduleEvent { id: string; day: Day; time: string | null; tentative?: boolean; }

export const days: { id: Day; date: string }[] = [
  { id: 'fri', date: '2027-11-05' },
  { id: 'sat', date: '2027-11-06' },
  { id: 'sun', date: '2027-11-07' },
];

export const events: ScheduleEvent[] = [
  { id: 'welcome', day: 'fri', time: null },            // TODO: time (evening)

  { id: 'ceremony', day: 'sat', time: '15:00' },        // TODO: confirm exact ceremony time
  { id: 'cocktail', day: 'sat', time: null },           // TODO: time
  { id: 'dinner', day: 'sat', time: null },             // TODO: time
  { id: 'tornaboda', day: 'sat', time: null },          // TODO: time
  { id: 'end', day: 'sat', time: '23:00' },
  { id: 'after', day: 'sat', time: '23:00', tentative: true },

  { id: 'brunch', day: 'sun', time: null },             // TODO: time (morning)
];
