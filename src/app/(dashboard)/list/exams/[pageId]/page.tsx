"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import "mathlive";
import EditorComponent from "@/components/EditorComponent";
import MathInput from "react-math-keyboard";


const examsData = [
    { paperId: "willpark23482efine", lessonGroupId: "11M2X_1", date: "2025-01-01", mark: "?/50", n: 15 },
    { paperId: "willpark12312323", lessonGroupId: "11M2X_1", date: "2025-01-02", mark: "?/49", n: 5 },
    { paperId: "willparkadfnalsdf", lessonGroupId: "11M2X_1", date: "2025-01-03", mark: "?/20", n: 2 },
    { paperId: "willparkllmaflk", lessonGroupId: "11M2X_1", date: "2025-01-04", mark: "?/30", n: 4 },
    { paperId: "willparkadsfasdf", lessonGroupId: "11M2X_1", date: "2025-01-05", mark: "?/50", n: 6 },
];

const ExamDetailsPage = () => {
    const params = useParams();
    const paperId = params?.pageId;

    const exam = examsData.find((e) => e.paperId === paperId);
    if (!exam) return <p className="text-center p-5">Exam not found</p>;

    const [latex, setLatex] = useState("")


    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Exam Details</h1>
            <div className="space-y-4">
                <p><strong>Paper ID:</strong> {exam.paperId}</p>
                <p><strong>Lesson Group:</strong> {exam.lessonGroupId}</p>
                <p><strong>Date:</strong> {exam.date}</p>
                <p><strong>Mark:</strong> {exam.mark}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Enter Math Expressions</h2>
                {Array.from({ length: exam.n }).map((_, index) => (
                    <div key={index} className="mb-4 flex items-center space-x-4">
                        <span className="font-semibold">Question {index + 1}:</span>
                        <MathInput setValue={setLatex}/>
                        <p> {latex} </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 ">
                <Link href="/list/exams">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Back to Exams
                    </button>
                </Link>
                <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ExamDetailsPage;
