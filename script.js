var names=new Array();
names[0]="Mani";
names[1]="Jammer";
names[2]="Chinnu";
names[3]="Hari";
names[4]="John";
names[5]="jungle";
names[6]="pavan";
names[7]="Surendra";
names[8]="jam";
for (var i = 0;i<names.length;i++){
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
        console.log("Goodbye"+ names[i])
    }
    else{
        console.log("Hello" +names[i]);
    }
}