const axios = require("axios")
const urls = ["https://glitch.com/edit/#!/join/e72c61a4-4db7-498d-b34d-7467fc206981"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
