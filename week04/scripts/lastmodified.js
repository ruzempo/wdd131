
function lastmodified(){
    /* set date the document was last modified*/
    document.querySelector('#lastModified').textContent = "Last Modification: " + document.lastModified.toString();
    }   


/* last modified */
lastmodified();