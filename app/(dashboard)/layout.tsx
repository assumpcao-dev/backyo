

const DashboardLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="h-full">
            <div>
                
            </div>
            <main className="md:pl-56 h-full">
                {children}
            </main>

        </div>
    )
}

export default DashboardLayout