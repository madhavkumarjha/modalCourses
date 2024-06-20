import { HiSquare3Stack3D } from "react-icons/hi2";
const lessons = [
  {
    lesson: "lesson 1",
    desc: "some thing here",
    icon: HiSquare3Stack3D,
  },
  {
    lesson: "lesson 2",
    desc: "some thing here 2",
    icon: HiSquare3Stack3D,
  },
  {
    lesson: "lesson 3",
    desc: "some thing here 3",
    icon: HiSquare3Stack3D,
  },
  {
    lesson: "lesson 4",
    desc: "some thing here 4",
    icon: HiSquare3Stack3D,
  },
];

export const dummy = {
  title: "data science and analytics",
  modules: [
    {
      title:"module 1: Introduction to Data Science ",
      duration:"(20 min)",
      lessons:lessons,
    },
    {
        title:"module 2: Data Analytics",
        duration:"(30 min)",
        lessons:lessons
    },
    {
        title:"module 3: Data Manipulation",
        duration:"(25 min)",
        lessons:lessons
    },
    {
        title:"module 4: Operation on Data",
        duration:"(40 min)",
        lessons:lessons
    }
  ],
};
