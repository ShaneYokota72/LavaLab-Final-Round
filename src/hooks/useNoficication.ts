import { createRoot } from "react-dom/client";

// This hook is used to display a notification on the screen
const useNotification = () => {

    const addNotification = ( notificationElement : React.ReactElement ) => {
        // find element with id = notification
        const notificationDiv = document.getElementById('notification');
    
        // if element exists, add notification to it
        if (notificationDiv) {
            const domNode = document.createElement('div');
            const root = createRoot(domNode);  
            root.render(notificationElement);

            notificationDiv.appendChild(domNode);
            
            // remove the notification after 3 seconds
            setTimeout(() => {
                // add animation to the notification
                domNode.style.setProperty('animation', 'notif_out 0.75s normal forwards ease-in-out 1');
                // 0.75s for the animation
                setTimeout(() => {
                    root.unmount();
                    notificationDiv.removeChild(domNode);
                    return () => clearTimeout(750);
                }, 750)
                return () => clearTimeout(2250);
            }, 2250);
        }
    }

    return addNotification;
}

export default useNotification;