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
