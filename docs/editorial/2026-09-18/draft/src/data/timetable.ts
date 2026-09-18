// Where the course meets, when, and what the rooms are like. One file, because
// a course that argues for documentation should not make a student read four
// pages to find out whether the lecture starts at two or at ten past.
//
// The dates are not here: every lecture and lab carries its own `date`, and
// /timetable/ builds the calendar from the content. What a date cannot say is
// here --- the clock times, the rooms, the break, and the holidays the
// Tuesday/Thursday pattern was chosen to clear.

export interface Meeting {
  /** What a student calls it. `sessionLabels` owns the plural. */
  kind: string;
  day: "Tuesday" | "Thursday";
  /** 24-hour, Canberra time, the way a timetable prints it. */
  start: string;
  end: string;
  /** Said out loud, for prose that shouldn't read as a table. */
  length: string;
  venue: string;
}

export const lectureMeeting: Meeting = {
  kind: "Lecture",
  day: "Tuesday",
  start: "14:00",
  end: "16:00",
  length: "two hours",
  venue: "Theatre 1, Applied Interaction Building",
};

export const labMeeting: Meeting = {
  kind: "Lab",
  day: "Thursday",
  start: "14:00",
  end: "15:00",
  length: "one hour",
  venue: "Room 2.14, Applied Interaction Building",
};

/** The third fixed point of the week, and the only one you keep alone. */
export const journalDeadline = { day: "Sunday", time: "23:59" } as const;

/** Contact hours a week, which is what the catalogue means by the number. */
export const contactHours = 3;

/**
 * Nothing is scheduled between these dates: no lecture, no lab, no deadline.
 * `spec/calendar.test.ts` holds the same two dates and fails if anything lands
 * inside them.
 */
export const midSemesterBreak = {
  from: "2027-04-12",
  to: "2027-04-25",
  afterWeek: 7,
  beforeWeek: 8,
} as const;

/**
 * Public holidays inside the twelve teaching weeks, in the ACT. None of them is
 * a Tuesday or a Thursday, which is why the course meets on those two days:
 * docs/course-design.md settles the pattern, and this list is what it clears.
 */
export const publicHolidays = [
  { name: "Canberra Day", date: "2027-03-08" },
  { name: "Good Friday", date: "2027-03-26" },
  { name: "Easter Monday", date: "2027-03-29" },
  { name: "ANZAC Day, observed", date: "2027-04-26" },
] as const;
