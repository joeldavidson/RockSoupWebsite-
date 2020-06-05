var gal_par = ["gal_par1","gal_par2","gal_par3","gal_par4","gal_par5","gal_par6","gal_par7","gal_par8","gal_par9","gal_par10","gal_par11","gal_par12"];
var gal_img = ["gal_img1","gal_img2","gal_img3","gal_img4","gal_img5","gal_img6","gal_img7","gal_img8","gal_img9","gal_img10","gal_img11","gal_img12"];

function text(ind){
	document.getElementById(gal_par[ind]).style.display = "block";
	document.getElementById(gal_img[ind]).style.display = "none";
}
function image(ind){
	document.getElementById(gal_par[ind]).style.display = "none";
	document.getElementById(gal_img[ind]).style.display = "block";
}