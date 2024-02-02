import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// This hook is used to display a notification on the screen
const useNotification = ( notificationElement : React.ReactElement ) => {
    // find element with id = notification
    const notificationDiv = document.getElementById('notification');

    // if element exists, add notification to it
    if (notificationDiv) {
        // create a new div element
        const domNode = document.createElement('div');
        // render the notification element to the div
        const root = createRoot(domNode);  
        root.render(notificationElement);
        
        // append the div to the notification div
        notificationDiv.appendChild(domNode);

        // remove the notification after 3 seconds
        setTimeout(() => {
            root.unmount();
            notificationDiv.removeChild(domNode);
        }, 3000);
    }
}

export default useNotification;