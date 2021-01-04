const DOCS = [
	'doc',
	'docx',
	'txt',
    'odt',
	'pdf',
    'xls',
    'xlsx',
    'pdf',
	'pptx'
]
const IMAGES = [
	'bmp',
    'gif',
	'jpg',
	'jpeg',
    'tiff',
    'svg',
	'png'
]
const AUDIO = [
	'au',
    'midi',
	'mp3',
	'm4a',
	'ogg',
	'ra',
	'ram',
	'wav'
]
const VIDEO = [
	'avi',
	'mpeg',
	'mp4',
	'mov',
	'wmv'	
]
let holdSelectedFiles = [];
let definedIT = '';

export function buildFileListByFilter(filterName, masterFileList ) {
	let newFilterName = filterName.toUpperCase();
		
		findFileExtension(newFilterName,"IMAGES",IMAGES,masterFileList);
		findFileExtension(newFilterName,"DOCS",DOCS,masterFileList);
		findFileExtension(newFilterName,"VIDEO",VIDEO,masterFileList);
		findFileExtension(newFilterName,"AUDIO",AUDIO,masterFileList);
		
		console.log("holdSelectedFiles " + holdSelectedFiles);
		return (holdSelectedFiles);
	}
function findFileExtension(fltName,str,ExtArray,masterArray){

	if(fltName === str){
		console.log(`inside ${str}`)
		
	for (let index = 0; index < ExtArray.length; index++) {
		 definedIT += masterArray.filter(data => 
			data.indexOf(ExtArray[index]) !== -1 && data != null && data != "" && data != ",") + ',';
	 }
	 holdSelectedFiles = definedIT.split(',').filter(Boolean);
	 return holdSelectedFiles;
   }
}
export function CheckCategories(filter) {
	if(DOCS.includes(filter))
		return true;
	if(IMAGES.includes(filter))
		return true;
	if(AUDIO.includes(filter))
		return true;
	if(VIDEO.includes(filter))
		return true;
	else return false;
}