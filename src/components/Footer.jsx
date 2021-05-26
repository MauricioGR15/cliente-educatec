import React from "react";

const Footer = () => {
    return (
        <footer className="w-full h-auto relative bottom-0 bg-violet pt-4 border-t-8 border-mint">
            <div className="flex items-start justify-center flex-wrap">
                <div
                    id="Nosotros"
                    className="w-auto flex flex-col items-center p-4"
                >
                    <h3 className="text-mint text-sans text-lg font-medium">
                        Nosotros
                    </h3>
                    <p className="text-white text-sans">Proyecto</p>
                    <p className="text-white text-sans">Investigación</p>
                </div>
                <div id="AcercaDe" className="flex flex-col items-center p-4">
                    <h3 className="text-mint text-sans text-lg font-medium">
                        Nosotros
                    </h3>
                    <p className="text-white text-sans">FAQ</p>
                </div>
                <p className="text-mint-dark w-full text-center p-2">
                    EducaTec 2021
                </p>
            </div>
        </footer>
    );
};

export default Footer;
