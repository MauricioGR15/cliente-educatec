import React from "react";

const Footer = () => {
    return (
        <footer class="w-full h-auto bg-violet pt-8 border-t-8 border-mint">
            <div class="flex items-start justify-center flex-wrap">
                <div
                    id="Nosotros"
                    class="w-auto flex flex-col items-center p-4"
                >
                    <h3 class="text-mint text-sans text-lg font-medium">
                        Nosotros
                    </h3>
                    <p class="text-white text-sans">Proyecto</p>
                    <p class="text-white text-sans">Investigación</p>
                </div>
                <div id="AcercaDe" class="flex flex-col items-center p-4">
                    <h3 class="text-mint text-sans text-lg font-medium">
                        Nosotros
                    </h3>
                    <p class="text-white text-sans">FAQ</p>
                </div>
                <p class="text-mint-dark w-full text-center p-2">
                    EducaTec 2021
                </p>
            </div>
        </footer>
    );
};

export default Footer;
