 const inputBox = document.getElementById('input-box')
 const listContainer = document.getElementById('list-container');

 function addTask(){
    if(inputBox.value === ''){
        alert('You must write somthing!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData()
 }

 listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
 },false)


 function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
 }

 function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
 }
 showTask()


//  let arr = [1,2,3,4,5,6]
//  arr.filter().
 
for(let i =1; i<11; i++){
    if(i/2==!0){

        console.log(i)
    }
}
2=="2"
2 ==='2'