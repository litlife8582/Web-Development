const UserArray=[
    {
        firstname:"Mayukh",
        gender:"Male",
        age:18
    },
    {
        firstname:"Deepshikha",
        gender:"Female",
        age:18
    },
    {
        firstname:"Tamaghna",
        gender:"Male",
        age:18
    },
    {
        firstname:"Romit",
        gender:"Male",
        age:19
    }
]
for(let i=0;i<UserArray.length;i++){
    if(UserArray[i]["gender"]=="Female"){
        console.log(UserArray[i]["firstname"]);
    }
}