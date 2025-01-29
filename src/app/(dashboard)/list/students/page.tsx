import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Table from "@/components/Table"
import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";


import Image from "next/image"
import Link from "next/link"
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


const studentsData = [
    {
      id: 1,
      studentId: "1234567890",
      name: "John Doe",
      email: "john@doe.com",
      photo:
        "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "1B",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      studentId: "1234567890",
      name: "Jane Doe",
      email: "jane@doe.com",
      photo:
        "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 3,
      studentId: "1234567890",
      name: "Mike Geller",
      email: "mike@geller.com",
      photo:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 4,
      studentId: "1234567890",
      name: "Jay French",
      email: "jay@gmail.com",
      photo:
        "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 5,
      studentId: "1234567890",
      name: "Jane Smith",
      email: "jane@gmail.com",
      photo:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 6,
      studentId: "1234567890",
      name: "Anna Santiago",
      email: "anna@gmail.com",
      photo:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 7,
      studentId: "1234567890",
      name: "Allen Black",
      email: "allen@black.com",
      photo:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 8,
      studentId: "1234567890",
      name: "Ophelia Castro",
      email: "ophelia@castro.com",
      photo:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 9,
      studentId: "1234567890",
      name: "Derek Briggs",
      email: "derek@briggs.com",
      photo:
        "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 10,
      studentId: "1234567890",
      name: "John Glover",
      email: "john@glover.com",
      photo:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
  ];
  


const StudentListPage = () => {

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
            <Table columns={columns} renderRow={renderRow} data={studentsData}/>

            {/* PAGINATION */}
            <Pagination/>


        </div>
    )
}

export default StudentListPage