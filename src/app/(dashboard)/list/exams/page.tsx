import Link from "next/link";

import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Table from "@/components/Table"

import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image"
import { role } from "@/lib/data"


type Exam = {
    paperId:string;
    lessonGroupId:string;
    date:string;
    mark:number;
}

const columns = [
    {
        header:"Paper", 
        accessor:"paperId",
        className:"hidden sm:table-cell"
    },
    {
        header:"Lesson",
        accessor:"lessonGroupId",
        classname:"hidden lg:table-cell"
    },
    {
        header:"Date", 
        accessor:"date", 
        className:"hidden md:table-cell"
    },
    {
        header:"Mark", 
        accessor:"marks", 
        className:"hidden md:table-cell"
    },
    {
        header: "Input",
        accessor: "action",
    }
]


const examsData = [
    {
      paperId: "willpark23482efine",
      lessonGroupId: "11M2X_1",
      date: "2025-01-01",
      mark: "?/50",
    },
    {
        paperId: "willpark12312323",
        lessonGroupId: "11M2X_1",
        date: "2025-01-02",
        mark: "?/49",
    },
    {
        paperId: "willparkadfnalsdf",
        lessonGroupId: "11M2X_1",
        date: "2025-01-03",
        mark: "?/20",
    },
    {
        paperId: "willparkllmaflk",
        lessonGroupId: "11M2X_1",
        date: "2025-01-04",
        mark: "?/30",
    },
    {
        paperId: "willparkadsfasdf",
        lessonGroupId: "11M2X_1",
        date: "2025-01-05",
        mark: "?/50",
    },
    {
        paperId: "willparkknjlnlaf",
        lessonGroupId: "11M2X_1",
        date: "2025-01-06",
        mark: "?/50",
    },
    {
        paperId: "willparkalkenflaenflae",
        lessonGroupId: "11M2X_1",
        date: "2025-01-07",
        mark: "?/50",
    },
    {
        paperId: "willparklknl4ln4l",
        lessonGroupId: "11M2X_1",
        date: "2025-01-08",
        mark: "?/50",
    },
    {
        paperId: "willparkadfln4lnl",
        lessonGroupId: "11M2X_1",
        date: "2025-01-09",
        mark: "?/50",
    },
    {
        paperId: "willpark4bnl4nl",
        lessonGroupId: "11M2X_1",
        date: "2025-01-10",
        mark: "?/50",
    },
    {
        paperId: "willparkaldnfl4ln",
        lessonGroupId: "11M2X_1",
        date: "2025-01-11",
        mark: "?/50",
    },
    {
        paperId: "willparkadlfnaldnf4",
        lessonGroupId: "11M2X_1",
        date: "2025-01-12",
        mark: "?/50",
    },
  ];



const ExamListPage = () => {  

    const renderRow = (item:Exam) => (
        <tr key={item.paperId} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-xcdSky">
            <td className="hidden md:table-cell p-4">{item.paperId}</td>
            <td className="hidden md:table-cell p-4">{item.lessonGroupId}</td>
            <td className="hidden md:table-cell p-4">{item.date}</td>
            <td className="hidden md:table-cell p-4">{item.mark}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/exam/${item.paperId}`}>
                        <button className="w-7 h-7 flex items-center justify-center">
                            <DocumentIcon className="h-4 w-4 text-gray-900"/>
                        </button>
                    </Link>
                    {role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center">
                            <ArrowDownTrayIcon strokeWidth={3} className="h-4 w-4 text-gray-900"/>
                        </button>
                    )}
                </div>
            </td>
        </tr>
    )

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold"> All Exams </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-ful md:w-auto">
                    <TableSearch/>
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-xcdLightOrange">
                            <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-xcdLightOrange">
                            <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>
                    </div>
                </div>
            </div>

            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={examsData}/>

        
            <Pagination/>
        </div>
    )
}

export default ExamListPage