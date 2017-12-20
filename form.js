const baseUrl = 'https://werewolf-tracker.herokuapp.com/'
const pinItButton = document.querySelector('.pinIt')
const threatLevel = document.querySelector('.threatLevel')
const color = document.querySelector('.color')
const form = document.querySelector('form')

pinItFunctionality()


console.log(document.querySelector('.color').value)

function pinItFunctionality(){
  form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('listening')
    fetch(baseUrl + '/locations', {
      method: 'POST',
      headers: new Headers ({'Content-Type' : 'application/json'}),
      body: JSON.stringify(formData())
    })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp)
    })
    .catch(function(){
      console.log('you blew it')
    })
  })
}

function formData(){
  const data = new FormData(document.querySelector('form'))
    return {
      data:{
        threat: threatLevel.value,
        location: data.get('location'),
        color: color.value,
        name: data.get('name')
      }
    }
}
