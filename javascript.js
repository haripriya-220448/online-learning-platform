const  python=500;
const wt=600;

function login(){
    const email=document.getElementById("email").value ;
    const passwo=document.getElementById("password").value ;

    if(!email || !passwo){
        alert("please fill all the fileds");
    }

    console.log("invalid entries");

}

function greet(name){
    console.log("hello",name);
}

const logout=function logout(){console.log("you are logged out")};

