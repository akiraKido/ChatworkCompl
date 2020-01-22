(async function() {
    const chatText = await getElementByIdAsync("_chatText");
    chatText.atwho({
        at: "[",
        data: [
            {name: '[info][/info]', display: 'info'},
            {name: '[info][title][/title]\n[/info]', display: 'infotitle'}, 
            {name: '[code]\n[/code]', display: 'code'},
            {name: '[hr]', display: 'hr'}
        ],
        displayTpl:"<li>${display}</li>",
        insertTpl:"${name}",
        searchKey: "display",
        startWithSpace: false,
        suffix: ""
    });
})();

async function getElementByIdAsync(id) {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            var element = document.getElementById(id);
            if (element) {
                clearInterval(interval);
                resolve($(element));
            }
        }, 1);
    });
}