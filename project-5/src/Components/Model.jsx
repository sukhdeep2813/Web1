import {AiOutlineClose} from "react-icons/ai"
import {createPortal} from "react-dom"


const Model = ({isOpen , onClose, children}) => { 


  return createPortal( <>
    {isOpen && 
    
        (
        <>
          <div className='relative z-50 min-h-[225px] max-w-[24%] bg-white rounded-md m-auto my-5' >
            <div className="flex justify-end p-1">
                 <AiOutlineClose onClick={onClose} className="cursor-pointer "/>
            </div>
            {children}
          </div>
          <div className ="absolute backdrop-blur h-screen w-screen top-0 z-40 " onClick={onClose} />
        </>
        )
   
    };
    </>
  , document.getElementById("modal-root")
  );
  
    
};

export default Model