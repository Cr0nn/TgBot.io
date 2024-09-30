const model = [
    {type: 'title', value: 'Helloy World'},
    {type: 'text', value: 'kafajkf'},
    {type: 'colums', value: [
        '111111',
        '222222',
        '3333333'
    ]}
]
const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if(block.type === 'title') {
        html = `<h1>${block.value}</h1>`
    }

    $site.insertAdjacentHTML('beforebegin', html)
})

