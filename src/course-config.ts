import type { CourseMetaInput } from "astro-course-university";
import { z } from "astro/zod";

// The level digits ANU uses: 1000--4000 undergraduate, 6000 and 8000
// postgraduate. Both the code pattern and the level field derive from this.
const LEVELS = [1, 2, 3, 4, 6, 8] as const;
const allowedCode = new RegExp(`^SLOP[${LEVELS.join("")}]\\d{3}$`);

export const slopCourseMetaSchema = z
  .strictObject({
    code: z.string().regex(allowedCode, {
      message: "use SLOP plus a 1000–4000, 6000 or 8000 level code",
    }),
    title: z.string().trim().min(1).max(100),
    session: z.string().trim().min(1).max(40),
    year: z.number().int().min(2026).max(2200),
    level: z.literal(LEVELS),
    startDate: z.iso.date(),
    endDate: z.iso.date(),
    description: z.string().trim().min(80).max(300),
    tags: z.array(z.string().trim().min(2).max(24)).min(1).max(3),
    // The catalogue's course contract already defines this field; the Slop
    // record admits it so a course can say what a student leaves able to do.
    learningOutcomes: z.array(z.string().trim().min(20).max(200)).min(3).max(6).optional(),
  })
  .superRefine((course, ctx) => {
    const codeLevel = Number(course.code.at(4));
    if (course.level !== codeLevel) {
      ctx.addIssue({
        code: "custom",
        path: ["level"],
        message: `must match ${course.code}'s first digit (${codeLevel})`,
      });
    }
    if (course.startDate > course.endDate) {
      ctx.addIssue({
        code: "custom",
        path: ["startDate"],
        message: "must not be after endDate",
      });
    }
  });

// The single source of truth for the course record. The generated homepage,
// navigation label and /api/index.json all read this object.
// Replace every placeholder value, but keep the shape: the catalogue ingests
// this API contract when the course is published.
//
// The code's last three digits were assigned to this repo when it was
// provisioned, and no other course in the cohort has them. The first digit is
// the level: 1, because the course assumes no prior study.
//
// endDate is the capstone deadline, not the last teaching day (Thu 27 May):
// the capstone is due two weeks after teaching ends, on purpose, and
// spec/data-integrity.test.ts fails any due date after endDate.
export const courseMeta = slopCourseMetaSchema.parse({
  code: "SLOP1562",
  title: "Undocumented Protocols: Field Methods in Neurotypical Interoperation",
  session: "Semester 1",
  year: 2027,
  level: 1,
  startDate: "2027-02-22",
  endDate: "2027-06-13",
  description:
    "The social protocol everyone runs has no specification, no changelog and no " +
    "maintainer who will admit to writing it. Twelve weeks observing it, documenting " +
    "it, testing the documentation, and deciding which parts of it you will run.",
  tags: ["social protocol", "field methods", "communication"],
  learningOutcomes: [
    "Document one part of the social protocol precisely enough that someone who does not run it could implement it.",
    "Run a documented subroutine on purpose when it is worth running, and put a number on what it cost.",
    "Decline a subroutine knowing what declining costs, and say in plain words what you are doing instead.",
    "Negotiate a working protocol with someone whose implementation differs from yours, and write down what each side conceded.",
  ],
}) satisfies CourseMetaInput;
