import Link from 'next/link';


export const Tabs = () => {
    return (
        <>
            <header className="h-14 flex items-center px-4 lg:px-6">
                <div className="container flex items-center gap-4 md:gap-6">
                    <Link className="flex items-center justify-center" href="#" rel="ugc">
                    </Link>
                    <nav className="ml-auto flex-1 justify-end space-x-4">
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="#"
                            rel="ugc"
                        >
                            Buy
                        </Link>
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="#"
                            rel="ugc"
                        >
                            Rent
                        </Link>
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="#"
                            rel="ugc"
                        >
                            Sell
                        </Link>
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="#"
                            rel="ugc"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>

        </>
    );
};

