function DisplayData () {

    const data = [
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
    ]
    return (
        <div className="w-[80%]">
            <div  className=" mx-auto max-w-[700px] mt-[3rem] p-3 ">
                <h1 className="text-[#c4c4c4] font-normal text-5xl text-center mb-8">Meteorologic data for Sinj</h1>
                <form action=" w-[80%] max-w-[500px]">
                    <select name="" id="" className="p-4 border outline-none rounded-md w-[100%] "> 
                        <option value="">Hourly View</option>
                        <option value="">Daily View</option>
                    </select>
                </form>
                
            </div>
            <div className="p-[2rem] pt-5">
                <h1 className="text-3xl font-bold">Hourly Weather Variables</h1>
                <div className="mt-[2rem] grid grid-cols-4">
                {
                    data.map((data) => (
                        <div className="">
                            <input type="radio" /> <label>{data.varaibles}</label>
                         </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default DisplayData;