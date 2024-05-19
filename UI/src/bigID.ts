import mount from ".";

declare global {
    interface Window {
        bigID: any;
    }
}

let bigID = {
    init: function() {
        mount()
    }
}

window.bigID = bigID
export default bigID