const errorHandler = require('@angular/core');
let findAllErrors = (error) => errorHandler.handleError(error);

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
	try {
	 if(filterName !== undefined || filterName !== null || filterName !== ""
	 || masterFileList.length !== 0 || masterFileList !== undefined){
	   
		let newFilterName = filterName.toUpperCase();
		
		findFileExtension(newFilterName,"IMAGES",IMAGES,masterFileList);
		findFileExtension(newFilterName,"DOCS",DOCS,masterFileList);
		findFileExtension(newFilterName,"VIDEO",VIDEO,masterFileList);
		findFileExtension(newFilterName,"AUDIO",AUDIO,masterFileList);
		
		console.log("holdSelectedFiles " + holdSelectedFiles);
		return (holdSelectedFiles);
		}
	} catch (error) {
		findAllErrors(error);
	}
}
function findFileExtension(fltName,str,ExtArray,masterArray){
  try {
	if(fltName === str){
		console.log(`inside ${str}`)
		
	for (let index = 0; index < ExtArray.length; index++) {
		 definedIT += masterArray.filter(data => 
			data.indexOf(ExtArray[index]) !== -1 && data != null && data != "" && data != ",") + ',';
	 }
	 holdSelectedFiles = definedIT.split(',').filter(Boolean);
	 return holdSelectedFiles;
   }
  } catch (error) {
	  findAllErrors(error);
  }
	
}
export function CheckCategories(filter) {
  try {
	  if(filter !== undefined || filter !== null || filter !== ""){
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
  } catch (error) {
	  findAllErrors(error);
  }
	
}