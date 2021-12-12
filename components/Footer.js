import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();
    return (
        <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                 {/* footer text start */}
                <div className="space-y-8 xl:col-span-1">
                    <div onClick={() => router.push('/')} className="cursor-pointer" >
                        <svg width="156" height="23" viewBox="0 0 156 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3389 4.23145H11.8057V22H7.41113V4.23145H0.96582V0.671875H18.3389V4.23145ZM37.9678 11.8193C37.9678 13.9189 37.5967 15.7598 36.8545 17.3418C36.1123 18.9238 35.0479 20.1445 33.6611 21.0039C32.2842 21.8633 30.7021 22.293 28.915 22.293C27.1475 22.293 25.5703 21.8682 24.1836 21.0186C22.7969 20.1689 21.7227 18.958 20.9609 17.3857C20.1992 15.8037 19.8135 13.9873 19.8037 11.9365V10.8818C19.8037 8.78223 20.1797 6.93652 20.9316 5.34473C21.6934 3.74316 22.7627 2.51758 24.1396 1.66797C25.5264 0.808594 27.1084 0.378906 28.8857 0.378906C30.6631 0.378906 32.2402 0.808594 33.6172 1.66797C35.0039 2.51758 36.0732 3.74316 36.8252 5.34473C37.5869 6.93652 37.9678 8.77734 37.9678 10.8672V11.8193ZM33.5146 10.8525C33.5146 8.61621 33.1143 6.91699 32.3135 5.75488C31.5127 4.59277 30.3701 4.01172 28.8857 4.01172C27.4111 4.01172 26.2734 4.58789 25.4727 5.74023C24.6719 6.88281 24.2666 8.5625 24.2568 10.7793V11.8193C24.2568 13.9971 24.6572 15.6865 25.458 16.8877C26.2588 18.0889 27.4111 18.6895 28.915 18.6895C30.3896 18.6895 31.5225 18.1133 32.3135 16.9609C33.1045 15.7988 33.5049 14.1094 33.5146 11.8926V10.8525ZM55.9561 4.23145H49.4229V22H45.0283V4.23145H38.583V0.671875H55.9561V4.23145ZM75.585 11.8193C75.585 13.9189 75.2139 15.7598 74.4717 17.3418C73.7295 18.9238 72.665 20.1445 71.2783 21.0039C69.9014 21.8633 68.3193 22.293 66.5322 22.293C64.7646 22.293 63.1875 21.8682 61.8008 21.0186C60.4141 20.1689 59.3398 18.958 58.5781 17.3857C57.8164 15.8037 57.4307 13.9873 57.4209 11.9365V10.8818C57.4209 8.78223 57.7969 6.93652 58.5488 5.34473C59.3105 3.74316 60.3799 2.51758 61.7568 1.66797C63.1436 0.808594 64.7256 0.378906 66.5029 0.378906C68.2803 0.378906 69.8574 0.808594 71.2344 1.66797C72.6211 2.51758 73.6904 3.74316 74.4424 5.34473C75.2041 6.93652 75.585 8.77734 75.585 10.8672V11.8193ZM71.1318 10.8525C71.1318 8.61621 70.7314 6.91699 69.9307 5.75488C69.1299 4.59277 67.9873 4.01172 66.5029 4.01172C65.0283 4.01172 63.8906 4.58789 63.0898 5.74023C62.2891 6.88281 61.8838 8.5625 61.874 10.7793V11.8193C61.874 13.9971 62.2744 15.6865 63.0752 16.8877C63.876 18.0889 65.0283 18.6895 66.5322 18.6895C68.0068 18.6895 69.1396 18.1133 69.9307 16.9609C70.7217 15.7988 71.1221 14.1094 71.1318 11.8926V10.8525Z" fill="#FD3D57"/>
                        <path d="M89.8379 16.4043C89.8379 15.5742 89.5449 14.9395 88.959 14.5C88.373 14.0508 87.3184 13.582 85.7949 13.0938C84.2715 12.5957 83.0654 12.1074 82.1768 11.6289C79.7549 10.3203 78.5439 8.55762 78.5439 6.34082C78.5439 5.18848 78.8662 4.16309 79.5107 3.26465C80.165 2.35645 81.0977 1.64844 82.3086 1.14062C83.5293 0.632812 84.8965 0.378906 86.4102 0.378906C87.9336 0.378906 89.291 0.657227 90.4824 1.21387C91.6738 1.76074 92.5967 2.53711 93.251 3.54297C93.915 4.54883 94.2471 5.69141 94.2471 6.9707H89.8525C89.8525 5.99414 89.5449 5.2373 88.9297 4.7002C88.3145 4.15332 87.4502 3.87988 86.3369 3.87988C85.2627 3.87988 84.4277 4.10938 83.832 4.56836C83.2363 5.01758 82.9385 5.61328 82.9385 6.35547C82.9385 7.04883 83.2852 7.62988 83.9785 8.09863C84.6816 8.56738 85.7119 9.00684 87.0693 9.41699C89.5693 10.1689 91.3906 11.1016 92.5332 12.2148C93.6758 13.3281 94.2471 14.7148 94.2471 16.375C94.2471 18.2207 93.5488 19.6709 92.1523 20.7256C90.7559 21.7705 88.876 22.293 86.5127 22.293C84.8721 22.293 83.3779 21.9951 82.0303 21.3994C80.6826 20.7939 79.6523 19.9688 78.9395 18.9238C78.2363 17.8789 77.8848 16.668 77.8848 15.291H82.2939C82.2939 17.6445 83.7002 18.8213 86.5127 18.8213C87.5576 18.8213 88.373 18.6113 88.959 18.1914C89.5449 17.7617 89.8379 17.166 89.8379 16.4043ZM114.594 22H110.199V12.8594H101.63V22H97.2354V0.671875H101.63V9.31445H110.199V0.671875H114.594V22ZM135.966 11.8193C135.966 13.9189 135.595 15.7598 134.853 17.3418C134.11 18.9238 133.046 20.1445 131.659 21.0039C130.282 21.8633 128.7 22.293 126.913 22.293C125.146 22.293 123.568 21.8682 122.182 21.0186C120.795 20.1689 119.721 18.958 118.959 17.3857C118.197 15.8037 117.812 13.9873 117.802 11.9365V10.8818C117.802 8.78223 118.178 6.93652 118.93 5.34473C119.691 3.74316 120.761 2.51758 122.138 1.66797C123.524 0.808594 125.106 0.378906 126.884 0.378906C128.661 0.378906 130.238 0.808594 131.615 1.66797C133.002 2.51758 134.071 3.74316 134.823 5.34473C135.585 6.93652 135.966 8.77734 135.966 10.8672V11.8193ZM131.513 10.8525C131.513 8.61621 131.112 6.91699 130.312 5.75488C129.511 4.59277 128.368 4.01172 126.884 4.01172C125.409 4.01172 124.271 4.58789 123.471 5.74023C122.67 6.88281 122.265 8.5625 122.255 10.7793V11.8193C122.255 13.9971 122.655 15.6865 123.456 16.8877C124.257 18.0889 125.409 18.6895 126.913 18.6895C128.388 18.6895 129.521 18.1133 130.312 16.9609C131.103 15.7988 131.503 14.1094 131.513 11.8926V10.8525ZM143.554 14.4854V22H139.159V0.671875H147.479C149.081 0.671875 150.487 0.964844 151.698 1.55078C152.919 2.13672 153.856 2.97168 154.511 4.05566C155.165 5.12988 155.492 6.35547 155.492 7.73242C155.492 9.82227 154.774 11.4727 153.339 12.6836C151.913 13.8848 149.936 14.4854 147.406 14.4854H143.554ZM143.554 10.9258H147.479C148.642 10.9258 149.525 10.6523 150.131 10.1055C150.746 9.55859 151.054 8.77734 151.054 7.76172C151.054 6.7168 150.746 5.87207 150.131 5.22754C149.516 4.58301 148.666 4.25098 147.582 4.23145H143.554V10.9258Z" fill="#2B2D42"/>
                        </svg>
                    </div>

                    <p className="text-gray-500 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere rem
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 cursor-pointer hover:text-gray-500">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-gray-400 cursor-pointer hover:text-gray-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 cursor-pointer hover:text-gray-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 cursor-pointer hover:text-gray-500">
                            <i className="fab fa-youtube"></i>
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
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Marketing
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Analytics
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Commerce
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Insights
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Support
                            </h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Pricing
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Documentation
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Guides
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
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
                                <div onClick={() => router.push('/about')} className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    About
                                </div>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Blog
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Jobs
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Press
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Legal
                            </h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Claim
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Privacy
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
                                    Policy
                                </a>
                                <a href="#" className="text-base cursor-pointer text-gray-500 hover:text-gray-900 block">
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
