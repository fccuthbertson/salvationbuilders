(function() {
    const getView = (view) => {
        const viewDir = "/partial-views/"
        return viewDir + view

    }
    $(window).ready(function() {
        $('#title').load(getView('title.html'))
        $('#header').load(getView('header.html'))
        $('#navigation').load(getView('nav.html'))
        $('#footer').load(getView('footer.html'))
    })
})()
