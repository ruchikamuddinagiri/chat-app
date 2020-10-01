const socket = io()
socket.on('countUpdated', (count)=>{
    console.log('count has been updated', count)
})

const increment = document.querySelector('#increment')
increment.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('clicked')
    socket.emit('increment')
})