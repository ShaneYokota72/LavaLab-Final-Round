import ReactDOM from "react-dom";

// This hook is used to display a notification on the screen
const useNotification = ( notificationElement : React.ReactElement ) => {
    // find element with id = notification
    const notificationDiv = document.getElementById('notification');

    // if element exists, add notification to it
    if (notificationDiv) {
        // create a new div element
        const domNode = document.createElement('div');
        // render the notification to the new div element
        ReactDOM.render(notificationElement, domNode);
        // append the new div element to the notification div
        notificationDiv.appendChild(domNode);

        // remove notification after 3 seconds
        setTimeout(() => {
            notificationDiv.removeChild(domNode);
        }, 3000);
    }
}

export default useNotification;