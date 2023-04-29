document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-info').addEventListener('click', (e => {
        document.getElementById('_info').classList.add('show_div')
    })) 

    document.getElementById('close').addEventListener('click', (e => {
        document.getElementById('_info').classList.remove('show_div')
    })) 
})


/* Убрать перезагрузку при нажатии (форма)
document.getElementById('open-info').addEventListener('submit', (e => {
    e.preventDefault()
}))
*/

 