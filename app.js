if("serviceWorker" in navigator){
 navigator.serviceWorker.register("service-worker.js");
}

// Rekap Otomatis + Whatsapp
function kirimWA(data){

let pesan =
`Halo Bapak/Ibu ${data.ortu}
Rekap kehadiran ${data.nama}

Hadir: ${data.h}
Sakit: ${data.s}
Izin: ${data.i}
Alpha: ${data.a}`;

let url =
"https://api.whatsapp.com/send?phone="
+data.wa+
"&text="+encodeURIComponent(pesan);

window.open(url,"_blank");
}

// Backup Indexeddb
function exportBackup(){

getAll("siswa",siswa=>{
getAll("absensi",absensi=>{

const data={siswa,absensi};

const blob=new Blob(
[JSON.stringify(data,null,2)],
{type:"application/json"}
);

const a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="backup_sd_pro.json";
a.click();

});
});
}
