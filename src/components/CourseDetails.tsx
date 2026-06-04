import { useParams } from "react-router-dom";
import { courses } from "../lib/courses";
import CCC from "../components/courses/CCC";
import OLevel from "../components/courses/OLevel";
import CourseLayout from "./CourseLayout";
import type { JSX } from "react";
import DCA from "./courses/DCA";
import PGDCA from "./courses/PGDCA";
import EnglishSpeaking from "./courses/EnglishSpeaking";
import AdExcel from "./courses/AdExcel";
import SQLExpert from "./courses/SQLExpert";
import Tally from "./courses/Tally";
import Graphic from "./courses/Graphic";
import PLSQL from "./courses/PLSQL";
import HindiEnglishTyping from "./courses/HindiEnglishTyping";
import CLang from "./courses/CLang";
import Data from "./courses/Data";

export default function CourseDetails() {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return (
            <CourseLayout>
                <div className="text-center py-20">Course Not Found</div>
            </CourseLayout>
        );
    }

    const courseMap: Record<string, JSX.Element> = {
        ccc: <CCC />,
        olevel: <OLevel />,
        dca: <DCA />,
        pgdca: <PGDCA />,
        pdp: <EnglishSpeaking />,
        advExcel: <AdExcel />,
        oracleSQL: <SQLExpert />,
        tally: <Tally />,
        graphic: <Graphic />,
        oraclePL: <PLSQL />,
        hindiEnglishTyping: <HindiEnglishTyping />,
        c: <CLang />,
        dataAnalytics: <Data />
    };

    return (
        <CourseLayout>
            {courseMap[courseId!] ?? <div className="text-center py-20">Course Not Found</div>}
        </CourseLayout>
    );
}