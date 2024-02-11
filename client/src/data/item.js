import { CiTextAlignLeft, CiText } from "react-icons/ci";
import { DiJavascript } from "react-icons/di";
import { MdOutlineAbc } from "react-icons/md";
import { FaPython } from "react-icons/fa";
export const item = [
  {
    title: "Text Generator",
    path: "./summary",
    icon: <CiText />,
    subTitle: "Text Summary",
    para: "Summary long text into short text",
  },
  {
    path: "./para",
    title: "Paragraph Generator",
    icon: <CiTextAlignLeft />,
    subTitle: "Text Paragraph",
    para: "Generate Paragraph with word",
  },
  {
    path: "./eng/dic",
    title: "Dictonary Generator",
    icon: <MdOutlineAbc />,
    subTitle: "English Dictonary",
    para: "Generate any English word meaning",
  },
  {
    path: "./hindi/dic",
    title: "Dictonary Generator",
    icon: <MdOutlineAbc />,
    subTitle: "Hindi Dictonary",
    para: "Generate any Hindi word meaning",
  },
  {
    path: "./js",
    title: "JavaScript Generator",
    icon: <DiJavascript />,
    subTitle: "JS Code ",
    para: "Generate any JavaScript Code",
  },
  {
    path: "./python",
    title: "Python Generator",
    icon: <FaPython />,
    subTitle: "Python Code",
    para: "Generate any python Code",
  },
];
