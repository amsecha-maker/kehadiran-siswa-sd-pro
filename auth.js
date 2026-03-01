const USERS = [
  {username:"admin", password:"admin123", role:"admin"},
  {username:"guru", password:"guru123", role:"guru"}
];

function login(){
  const u = username.value;
  const p = password.value;

  const user = USERS.find(x=>x.username===u && x.password===p);

  if(user){
    localStorage.setItem("loginUser",JSON.stringify(user));
    location.reload();
  }else{
    alert("Login gagal");
  }
}

function logout(){
  localStorage.removeItem("loginUser");
  location.reload();
}
