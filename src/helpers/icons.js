import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faSpinner, 
        faPlusCircle,
        faPhone,
        faEnvelope,
        faMapMarkedAlt,
        faLock
    );
};

import { library } from "@fortawesome/fontawesome-svg-core";

export default Icons;