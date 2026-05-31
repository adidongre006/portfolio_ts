// export type ScrollItem = {
//   id: number;
//   title: string;
//   image: string;
// };
// export const scrollItems: ScrollItem[] = [
//   { id: 1, title: "React", image: "/images/react.png" },
//   { id: 2, title: "Next.js", image: "/images/next.png" },
//   { id: 3, title: "TypeScript", image: "/images/typescript.png" },
//   { id: 4, title: "Three.js", image: "/images/three.png" },
//   { id: 5, title: "Node.js", image: "/images/node.png" },
// ]

export type ScrollItem = {
  id: string;
  label: string;
  img: string;
  nameImg: string;
};
// Data (JSON-style)
export const scrollItems: ScrollItem[] = [
  { id: "1", label: "React", img: "/re.svg", nameImg: "/hostName.svg" },
  {
    id: "2",
    label: "Next.js",
    img: "/next.svg",
    nameImg: "/cloudName.svg",
  },
  { id: "3", label: "TypeScript", img: "/ts.svg", nameImg: "/appName.svg" },
  { id: "4", label: "Tailwind", img: "/tail.svg", nameImg: "/streamName.svg" },
  { id: "5", label: "Clerk", img: "/c.svg", nameImg: "/dockerName.svg" },
  { id: "6", label: "React", img: "/re.svg", nameImg: "/hostName.svg" },
   { id: "7", label: "TypeScript", img: "/ts.svg", nameImg: "/appName.svg" },
  // { id: "6", label: "Node.js" ,img:"",nameImg:"",},
  // { id: "7", label: "MongoDB" ,img:"",nameImg:"",},
];
// export const companies = [
//   {
//     id: 1,
//     name: "Next JS",
//     img: "/next.svg",
//     // img: "/reactjs.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "Typescript",
//     img: "/ts.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "React JS",
//     img: "/re.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "TailwindCSS",
//     img: "/tail.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "Clerk",
//     img: "/c.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];
