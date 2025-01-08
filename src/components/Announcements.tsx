const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-xcdSky rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium"> Lorem Ipsum Doloar sit</h2> 
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            22-12-2024
                        </span>
                    </div>
                    <p className="text-sm text-gray-100 mt-1">
                        Random text poaceholder in the meantime
                    </p>
                </div>
                <div className="bg-xcdLightOrange rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium"> Lorem Ipsum Doloar sit</h2> 
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            22-12-2024
                        </span>
                    </div>
                    <p className="text-sm text-gray-100 mt-1">
                        Random text poaceholder in the meantime
                    </p>
                </div>
                <div className="bg-xcdSky rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium"> Lorem Ipsum Doloar sit</h2> 
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            22-12-2024
                        </span>
                    </div>
                    <p className="text-sm text-gray-100 mt-1">
                        Random text poaceholder in the meantime
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Announcements