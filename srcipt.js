
let nm_fleid =document.querySelector('.nm_fleid');
let cp_fleid =document.querySelector('.cp_fleid');
let addPost=document.querySelector('.btn_1');
let post_card=document.querySelector('.post_card');
let erorr1=document.querySelector('.erorr1');
let erorr2=document.querySelector('.erorr2');
let containerTop=document.querySelector('.containerTop');


let updateButton=document.querySelector('.btn_2');
let game_area=document.querySelector('.game_area');


let arr =[];
let indexBox;

// ======Post Button javascript Start====

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

// ======Post Button javascript End====


// ======Update Button javascript Start====

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
        arr[indexBox].pname=nm_fleid.value;
        arr[indexBox].caption=cp_fleid.value;

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
// ======Update Button javascript End====



// ======Display Function javascript Start====

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
                nm_fleid.value=""
                cp_fleid.value=""
                post_card.innerHTML="";
                gameTop.style .display="flex";
                display();
            }    
            
         })
    })

}

// ======Display Function javascript end====
// ======To-Do javascript area End====




// game_area//
// ======Game javascript area start====
let playerOne = document.querySelector(".playerOne");
let inputOne = document.querySelector(".inputOne");
let btnOne = document.querySelector(".Btn_1");
let erorrMg = document.querySelector(".erorrMg");
let PR_chance = document.querySelector(".PR_chance");

let playerTwo = document.querySelector(".playerTwo");
let PR_Two = document.querySelector(".PR_Two");
let inputTwo = document.querySelector(".inputTwo");
let erorrMg1 = document.querySelector(".erorrMg1");
let btnTwo = document.querySelector(".Btn_2");
let btnThree = document.querySelector(".Btn_3");
let gameTop = document.querySelector(".gameTop");



let count = 5;
btnThree.addEventListener("click",()=>{
    
    gameTop.innerHTML="";
    gameTop.style .display="none";
   
 
})


// ========== Start Button  JS start=========

btnOne.addEventListener("click",()=>{
    if(!inputOne.value){
      erorrMg.innerHTML="Enter value asign";
    
        
    }else if(isNaN(inputOne.value)){
        erorrMg.innerHTML="Enter a number";
        inputOne.value="";
       
    }else if(!(inputOne.value <=10 && inputOne.value >=0)){
         erorrMg.innerHTML="Enter a Number 1 to 10";
         inputOne.value="";
    }else{
       playerOne.style .display="none";
       playerTwo.style .display="inline-block";
       PR_chance.style .display="block";
       PR_chance.innerHTML=`Chance: ${count}`;
       erorrMg.innerHTML="";
       

    }
})
// ========== Start Button  JS end=========


// ========== Check Button  JS start=========

btnTwo.addEventListener("click",()=>{
    if(!inputTwo.value){
      erorrMg1.innerHTML="Enter value asign";
        
    }else if(isNaN(inputTwo.value)){
        erorrMg1.innerHTML="Enter a number";
        inputTwo.value=""
    }else if(!(inputTwo.value <=10 && inputTwo.value >=0)){
         erorrMg1.innerHTML="Enter a Number 1 to 10";
         inputTwo.value=""
    
    }else{
         erorrMg1.innerHTML="";
         
        if(count>1){
            count--;
            PR_chance.innerHTML=`Chance: ${count}`;
                if(inputOne.value == inputTwo.value){
                    PR_Two.innerHTML ="Player Two Winner";
                    btnTwo.style.display="none";
                    btnThree.style.display="inline-block"
                    inputTwo.value=""
    
                 }
           
        }else{
            count=0;
            PR_chance.innerHTML=`Chance: ${count}`;
            PR_Two.innerHTML ="Player One Winner";
            btnThree.style.display="inline-block"
             btnTwo.style.display="none";
              inputTwo.value="";

        }
    }
   
   
})
// ========== Check Button  JS end=========
// ======Game javascript area end====




