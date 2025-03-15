let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let st=document.querySelector(".start");
let helpbtn= document.querySelector(".btn");
let startGame=false;
let memarr=[];
let userarr=[];
let click=0,nums=0;
let levelnum=1;
    helpbtn.disabled=true;
    st.addEventListener("click",()=>{
        if(startGame==false){
           startGame=true; 
            selectbox();   }
            helpbtn.disabled=false;
    });

    function selectbox(){
        msg.innerHTML=`level ${levelnum} `;
        levelnum++;
        // gennerate random value for box select
        let rndval=Math.floor(Math.random()*4);
        memarr.push(boxes[rndval].id);
        console.log(memarr);
        // flash krne ke liye
        boxes[rndval].classList.add("flash");
        setTimeout( ()=>{
            boxes[rndval].classList.remove("flash");
    } ,[400] );
           
    }
boxes.forEach((box)=>{    
        box.addEventListener(("click"),(e)=>{
            // console.log(box.id);
            userarr.push(box.id);
            console.log(userarr);            
            click++;
           if(startGame==true){
            box.classList.add("userflash");
            setTimeout(
                ()=>{
                    box.classList.remove("userflash");
                },[250]    )
           }
             check();            
    });    
});


function check(){
    //user or memory array ko match krna 
    if(userarr[click-1] != memarr[click-1]){
        // lost the match
        memarr=[];
        userarr=[];
        nums=0;
        click=0;
        if(startGame==true){
        msg.innerHTML="you loss  press start for new game";
        }
        startGame=false;
    }
    else{
        // all correct select
        nums++;
    }
    if(nums==memarr.length & nums!=0){
        userarr=[];
        nums=0;
        click=0;
        setTimeout(selectbox(),500);
    }
}
    helpbtn.addEventListener("click",()=>{
        let initial=msg.innerHTML;
        msg.innerHTML=`correct order is: ${memarr}`;
        setTimeout(()=>{
            msg.innerHTML=initial;
        },[2500])
        
    })