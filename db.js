// Lebih stabil daripada LocalStorage.
let db;

const request = indexedDB.open("KehadiranDB",1);

request.onupgradeneeded = e=>{
  db = e.target.result;

  db.createObjectStore("siswa",{keyPath:"nisn"});
  db.createObjectStore("absensi",{autoIncrement:true});
};

request.onsuccess = e=>{
  db = e.target.result;
};

// Tambah Data
function addData(store,data){
  const tx=db.transaction(store,"readwrite");
  tx.objectStore(store).add(data);
}

// Ambil Data
function getAll(store,callback){
  const tx=db.transaction(store,"readonly");
  const req=tx.objectStore(store).getAll();

  req.onsuccess=()=>callback(req.result);
}

