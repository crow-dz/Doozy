function Footer() {
    return (
        <footer className=" text-center lg:text-left mt-4">
            <div className="container p-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Teradevs. All rights
                        reserved.
                    </p>
                    <div className="flex items-center">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <img
                                src="/images/github-142-svgrepo-com.svg"
                                alt="github"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 ml-3"
                        >
                            <img
                                src="/images/linkedin-svgrepo-com.svg"
                                alt="linkedin"
                                className="h-6 w-6"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
