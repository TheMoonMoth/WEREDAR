const baseUrl = 'https://werewolf-tracker.herokuapp.com/'
const pinItButton = document.querySelector('.pinIt')
pinItFunctionality()
listeners()

console.log(document.querySelector('.color').value)

function pinItFunctionality(){
  pinItButton.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('listening')
    fetch((baseUrl), {
      method: 'POST',
      headers: new header({
        'Content-Type':'application/json'
      }),
      body: JSON.stringify(formData())
    })
    .then((resp) => resp.json)
    .then((resp) => {
      console.log(resp)
    })
  })
}

function listeners(){
  let threatLevel = document.querySelector('.threatLevel')
  threatLevel.addEventListener('change', function(){
    console.log(threatLevel.value)
  })
}

function formData(){
  const data = new FormData(document.querySelector('form'))
    return{
      data:{
        threat: data.get('name'),
        neighborhood: data.get('message'),
        location: data.get('location'),
        color: data.get('color'),
        name: data.get('name'),
        photo: data.get('photo')
      }
    }
}
