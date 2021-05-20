import React from "react";
import ReactDom from "react-dom";

const Modal = ({ title, isShowing, hide, description, labelAccept }) => (
    <ModalContainer isShowing={isShowing}>
        <ModalContent>
            <ModalHeader title={title} hide={hide} />
            <ModalBody description={description} />
            <ModalFooter labelAccept={labelAccept} hide={hide} />
        </ModalContent>
    </ModalContainer>
);

export const ModalContainer = ({ isShowing, children }) =>
    isShowing
        ? ReactDom.createPortal(
              <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                         {children}
                      </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
          , document.body)
        : null;

export const ModalContent = ({ children }) => (
    <div className="p-4 rounded-lg shadow-md relative flex flex-col h-auto w-full bg-white ">
        {children}
    </div>
);

export const ModalHeader = ({ title, hide }) => (
    <div className="flex items-start justify-between">
        <h3 className="text-3xl font-semibold font-sans text-violet">
            {title}
        </h3>
        <button
            className="p-1 ml-auto bg-transparent border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
            onClick={hide}
        >
            <span className="bg-transparent text-blue  h-6 w-6 text-3xl block outline-none focus:outline-none">
                ×
            </span>
        </button>
    </div>
);

export const ModalBody = ({ description, children }) => (
    <div className="relative flex-auto">
        <p className="py-4 text-black text-lg leading-relaxed">{description}</p>
        <div>{children}</div>
    </div>
);

export const ModalFooter = ({ hide, labelAccept, onAccept }) => (
    <div className="flex items-center justify-end  ">
        <button
            className="text-mint-dark font-work background-transparent font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={hide}
        >
            Cerrar
        </button>
        <button
            className="bg-violet text-white font-work active:bg-violet-dark font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            data-dismiss="modal"
            aria-label="Cerrar"
            onClick={hide}
        >
            {labelAccept}
        </button>
    </div>
);

export default Modal;
