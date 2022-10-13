function DisplayData () {
    return (
        <div className="w-[80%] mx-auto max-w-[700px] mt-[3rem] ">
            <h1 className="text-[#c4c4c4] font-normal text-5xl text-center mb-8">Meteorologic data for Sinj</h1>
            <form action=" w-[80%] max-w-[500px]">
                <select name="" id="" className="p-3 border outline-none rounded-md w-[100%]"> 
                    <option value="">Hourly View</option>
                    <option value="">Daily View</option>
                </select>
            </form>
        </div>
    )
}

export default DisplayData;