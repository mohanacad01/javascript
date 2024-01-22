function getvalue(){


    var listofnames=["mani", "kanna","yuva", "yugan"];
    console.log("lengnth of array listofnames....",listofnames.length);
    console.log(listofnames[0]);
    console.log(listofnames[1]);
    console.log(listofnames[2]);
    console.table(listofnames);

    for(var a=0;a<listofnames.length;a++){
        console.log(listofnames[a]);
    }
    console.log("output from for OF");
    for(var name of listofnames );
    for(var a=0;a<listofnames.length;a++){
        console.log(listofnames[a]);
        if(a==2);
        break;
    }}
    getvalue();
    function GetResultFun(){

    var listofcars={Name:"Shift",price:"20k",mdate:"2010"}
    console.log(listofcars);
    console.log(listofcars);
    for (let property in listofcars){
        console.log(property + " : " + listofcars[property]);
    }
    
    
    
}
    
    GetResultFun();
    console.clear();

    function practice(){
        var text= "welcome to the practice welcome session that was built by using scripting language and welcome to the session once again";

        console.log(text.length);
        
        console.log(text.indexOf("welcome"));
        
        console.log(text.indexOf("to",10));

        console.log(text.lastIndexOf("welcome"));

        console.log(text.endsWith("welcome"));

        console.log(text.endsWith("again"));

        console.log(text.localeCompare("welcome",8));
        
        console.log(text.match("welcome",5));

        console.log(text.slice(75));

        console.log(text.includes("till"));

        console.log(text.includes("welcome"));

        console.log(text.charAt("11"));

        console.log(text.charCodeAt("11"));

        text=text.concat(" and get more knowledge");
        console.log(text.concat(" and get more knowledge"));

        console.log(text.toLowerCase());

        console.log(text.toUpperCase());

        console.log(text.search("e"));

        console.log(text.toLocaleLowerCase("welcome"));

      
    
        
    }
    practice();
    console.clear();
    
    function practice1()
    {
        let today= new Date();
        console.log(today);
        console.log(today.getDate());

    }
    practice1();
