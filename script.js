function _get(elt)
{
    return document.getElementById(elt);
}
function _create(elt)
{
    return document.createElement(elt);
}
window.addEventListener('load', function(e){
    e.preventDefault();
   
    var form1 = _get("form1");
    var nb;

    form1.addEventListener('submit',function (e){
        e.preventDefault();
        nb = parseInt(_get('tb_matr').value);
       
        var tab = _get("tab");
        
        for (let i = 0; i < nb; i++) {
            var tr = _create('tr');
            tab.appendChild(tr);
            for (let j = 0; j < nb; j++) {
                let td = _create('td');
                tr.appendChild(td);
                let bout = _create('button');
                bout.id = 'bout_'+i+'_'+j;
                bout.style.width = "50px";
                bout.style.height = "50px";
                td.appendChild(bout);
            }
        }

    });
    
    var f_color = _get("f_color");
    var col = f_color.value;
    console.log(col);
    f_color.onchange = function(e){
      col = f_color.value;
    }
    _get('tab').addEventListener('click',function(e){
        
            for (let i = 0; i < nb; i++) {
                for (let j = 0; j < nb; j++) {
                    console.log(col);
                        _get('bout_'+i+'_'+j).addEventListener('click', function(e){                            
                            //if (_get('bout_'+i+'_'+j).style.backgroundColor == ""){
                            _get('bout_'+i+'_'+j).style.backgroundColor = "" + col;}
                        );
                }
            }
    });
    
});