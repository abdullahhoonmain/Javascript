let count=1

let addbutton= document.getElementById('add');
console.log(addbutton);

function addfun() {
 let title= document.getElementById('title').value
 let discription= document.getElementById('discription').value
 let tablebody= document.getElementById('tablebody')
 row= `
                      <tr>
                        <th scope="row">${count}</th>
                        <td>${title}</td>
                        <td>${discription}</td>
                        <td><button type="button" class="btn btn-secondary btn-sm" onclick="deleteitem(this)">Delete</button>
                        </td>
                      </tr>`
tablebody.innerHTML+= row;


document.getElementById('title').value= ""
document.getElementById('discription').value= ""
count++

}

function deleteitem(button){
let row= button.parentElement.parentElement;
row.remove();
updateSr();   
}

function updateSr(){

}