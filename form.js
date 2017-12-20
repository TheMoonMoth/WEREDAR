const postUrl = 'https://werewolf-tracker.herokuapp.com/userSighting'
const form = document.querySelector('form')

pinItFunctionality()

function pinItFunctionality(){
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const data = new FormData(document.querySelector('form'))
    var formDatas = {
            'location': data.get('location'),
            'color': data.get('color')
        }
        console.log(formDatas)
    fetch((postUrl), {
      method: 'POST',
      headers: new Headers ({'Content-Type' : 'application/json'}),
      body: JSON.stringify(formDatas)
    })
    .then((resp) => resp.json())
    .then((resp) => {
      reload()
    })
  })
}

function reload(){
  return window.location.reload(true)
}
