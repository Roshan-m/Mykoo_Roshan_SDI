//alert("JavaScript works!");

/*
 Roshan Mykoo
 SDI 1501
 Day6
 */

// Is my Steak done?

/*
120 and under is undercoocked
120-124 - steak is rare
125-129 - steak is medium-rare
130-139 - steak is medium
140-149 - steak is meidum-well
150-165 - steak is well done
>165 is burnt to a crisp 
 */

var steakTemp= 135;

if(steakTemp<120){
    console.log("Steak is not done yet.");
}
else if (steakTemp<=124) {
    console.log("Rare steak.");
}
else if (steakTemp<=129) {
    console.log("Medium-rare.");
}
else if (steakTemp<=139) {
    console.log("Medium.");
}
else if (steakTemp<=149){
    console.log("Medium-well");
}
else if (steakTemp<=165) {
    console.log("Well done.");
}
else {
    console.log("burn to a crisp");
    }