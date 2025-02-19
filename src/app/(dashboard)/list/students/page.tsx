import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Table from "@/components/Table"
import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";


import Image from "next/image"
import Link from "next/link"
import { role } from "@/lib/data"


type Student = {
    studentId: string;
    name: string;
    school: string;
    phone: string;
    email: string;
    photo: string;
}

const columns = [
    {
        header:"Student ID", 
        accessor:"studentId",
        className:"hidden sm:table-cell"
    },
    {
        header:"Full Name",
        accessor:"name",
        className:"hidden sm:table-cell",
    },
    {
        header:"School",
        accessor:"school",
        classname:"hidden lg:table-cell"
    },
    {
        header:"Phone", 
        accessor:"phone", 
        className:"hidden md:table-cell"
    },
    {
        header:"Email", 
        accessor:"email", 
        className:"hidden md:table-cell"
    },
    {
        header: "Profile",
        accessor: "action",
    }
]


const studentsData = [
    {
      id: 1,
      studentId: "1234567890",
      name: "John Doe",
      school: "James Ruse Agricultural High School",
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
      school: "Hornsby Girls High School",
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
      school: "Normanhurst Boys High School",
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
      school: "Sydney Boys High School",
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
      school: "Sydney Girls High School",
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
      school: "Carlingford High School",
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
      school: "Epping Boys High School",
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
      school: "Marist College",
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
      school: "Sydney Boys High School",
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
      school: "Some Boys High School",
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

    const renderRow = (item:Student) => (
        <tr key={item.studentId} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-xcdSky">
            <td className="hidden md:table-cell p-4">{item.studentId}</td>
            <td className="hidden md:table-cell p-4">{item.name}</td>
            <td className="hidden md:table-cell p-4">{item.school}</td>
            <td className="hidden md:table-cell p-4">{item.phone}</td>
            <td className="hidden md:table-cell p-4">{item.email}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/student/${item.studentId}`}>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full">
                        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
                      </button>
                    </Link>
                </div>
            </td>
        </tr>
    )

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold"> Student List </h1>
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