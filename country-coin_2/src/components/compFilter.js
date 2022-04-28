function CompFilter() {

    const elements = JSON.parse(localStorage.getItem('storage1'));
    //console.log(typeof b == 'object');
    
    function my_filter(event){
        elements.filter(
            (element) => { 
                if(element.name.toLowerCase().includes(event.target.value.toLowerCase())){
                    console.log(element.name);
                }
            }
        );
        console.log("--------------------------------------------------");
    }

    return <div><input onChange={my_filter} /></div>;
}


export default CompFilter;