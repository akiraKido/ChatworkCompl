setTimeout(() => {
    $("#_chatText").atwho({
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
}, 1000);