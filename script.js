
let nm_fleid =document.querySelector('.nm_fleid');
let cp_fleid =document.querySelector('.cp_fleid');
let addPost=document.querySelector('.btn_1');
let post_card=document.querySelector('.post_card');
let erorr1=document.querySelector('.erorr1');
let erorr2=document.querySelector('.erorr2');


let updateButton=document.querySelector('.btn_2');

let arr =[];
let indexBox;


addPost.addEventListener("click",()=>{

    if(nm_fleid.value ==="" && cp_fleid.value ===""){
        
        erorr1.innerHTML ="Pls enter a name"
        erorr1.style .display ="inline-block"
        erorr2.innerHTML ="Pls enter a caption"
         erorr2.style .display ="inline-block"
    }else if(nm_fleid.value ===""){
        erorr1.innerHTML ="Pls enter a name"
        erorr1.style .display ="inline-block"
        
         erorr2.innerHTML =""
         erorr2.style .display ="none"
    }else if(cp_fleid.value ===""){
        erorr2.innerHTML ="Pls enter a caption"
        erorr2.style .display ="inline-block"
        
         erorr1.innerHTML =""
         erorr1.style .display ="none"
    }else{
        arr.push({
            pname:nm_fleid.value ,
            caption:cp_fleid.value ,
        })
        nm_fleid.value ="";
        cp_fleid.value ="";
         erorr1.innerHTML =""
         erorr2.innerHTML =""
        post_card.innerHTML ="";
        display()
   
        
    }

   
})
updateButton.addEventListener("click",()=>{

    if(nm_fleid.value ==="" && cp_fleid.value ===""){
        erorr1.innerHTML ="Pls update a name"
        erorr1.style .display ="inline-block"
        erorr2.innerHTML ="Pls update a caption"
         erorr2.style .display ="inline-block"
         return
    }else if(nm_fleid.value ===""){
        erorr1.innerHTML ="Pls update a name"
        erorr1.style .display ="inline-block"
        
         erorr2.innerHTML =""
         erorr2.style .display ="none"
         return
    }else if(cp_fleid.value ===""){
        erorr2.innerHTML ="Pls update a caption"
        erorr2.style .display ="inline-block"
        
         erorr1.innerHTML =""
         erorr1.style .display ="none"
         return
    }else{
        arr[indexBox]={
            pname:nm_fleid.value};
        arr[indexBox]={
            caption:cp_fleid.value
        };

        updateButton.style .display="none";
        addPost.style .display="inline-block";
        nm_fleid.value ="";
        cp_fleid.value ="";
         erorr1.innerHTML =""
         erorr2.innerHTML =""
        post_card.innerHTML ="";
        display()
       
    }

   
})

function display(){
    arr.map((post)=>{
        post_card.innerHTML +=`<div class='post_box ${(isNaN(post.caption))?"editBtnColor":"playBtnColor"} '>
                    <h3>${post.pname}</h3>
                    <p>${post.caption}</p>
                    <button class="ed_btn">${(isNaN(post.caption))?"Edit":"Play"}</button>
                    <button class="D_btn">Delete</button>
                </div>`
    })
    let deleteButton =document.querySelectorAll(".D_btn");
    let arrayDelete = Array.from(deleteButton);
    arrayDelete.map((items ,index)=>{
        items.addEventListener("click",()=>{
            arr.splice(index,1)
            post_card.innerHTML="";
            display();
        })
    })
    let editButton =document.querySelectorAll(".ed_btn");
    let arrayEdit = Array.from(editButton);
    arrayEdit.map((items ,index)=>{
        items.addEventListener("click",()=>{
            indexBox=index
            if(items.innerHTML =="Edit"){
                nm_fleid.value=arr[index].pname;
                cp_fleid.value=arr[index].caption;

                post_card.innerHTML="";
                updateButton.style .display="inline-block";
                addPost.style .display="none";
                display();
            }else{
                alert("!!! Upcoming number gessing Game ")
            }
            
        })
    })


}
