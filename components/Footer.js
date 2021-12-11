function Footer() {
    return (
        <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                 {/* footer text start */}
                <div className="space-y-8 xl:col-span-1">
                    <img className="w-30" src="https://i.ibb.co/MBs637b/logo-tot.png" alt="Company name"/>
                    <p className="text-gray-500 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere rem
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg> 
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/*  footer text end */}
                {/*  footer links  */}
                <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Solutions
                            </h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Marketing
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Analytics
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Commerce
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Insights
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Support
                            </h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Pricing
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Documentation
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Guides
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    API Status
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Company
                            </h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    About
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Blog
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Jobs
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Press
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Legal
                            </h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Claim
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Privacy
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Policy
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                    Terms
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer links end --> */}
            </div>
        </div>
    </footer>
    )
}

export default Footer
