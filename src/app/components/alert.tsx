export default function Alert({ message, error, hideAlert }: { message: string; error: boolean; hideAlert: any }) {
    return (
        <div
            className={`
                w-[500px] 
                z-40 fixed 
                bottom-4 right-24 
                ${error ? 'bg-red-800' : 'bg-teal-800'}
            `}
        >
            <div className="flex justify-end items-center">
                <p onClick={hideAlert} className="px-4 text-gray-50 font-bold text-md cursor-pointer mt-1">
                    X
                </p>
            </div>
            <div className="flex items-center justify-center px-4 mb-1">
                <p className="text-neutral-50 break-all font-semibold tracking-widest">{message}</p>
            </div>
        </div>
    )
}
