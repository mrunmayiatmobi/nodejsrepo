


const getmsg = function(){
    return 'your message'
}
const addnote = function(title,body){
}

//module.exports = getmsg
// to exprt number of properties use this\
module.exports = {
    getmsg : getmsg, /// first getmsg is propertity name and second is function name
    addnote : addnote
}// to exprt more properties