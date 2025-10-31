const NotFoundPage = () => {
    return ( 
      <div className="px-3">
          <div className="w-full h-screen bg-blue-100 flex items-center justify-center ">
            <div className="w-[400px] flex flex-col h-auto bg-white rounded-md ">
                <div className="w-full h-[30px] bg-blue-500 flex items-center pl-3 gap-1 rounded-tl-md rounded-tr-md">
                    <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
                    <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
                    <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
                </div>
                <div className="flex flex-col w-full h-[180px] items-center justify-center gap-2">
                      <h1 className="text-4xl font-normal">404</h1>
                      <p>Page Not Found</p>
                </div>
            </div>
        </div>
      </div>
     );
}

export default NotFoundPage;
