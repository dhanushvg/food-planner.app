// const formEl = document.forms.feedback;

// const sportsEl = formEl.elements.sports;

// console.dir(sportsEl);

// console.log(sportsEl.innerText);

// // const optionEl = document.createElement("option");

// // optionEl.value = "hockey";

// // optionEl.text="hockey";


// // sportsEl.add(optionEl,2)

// // sportsEl.remove(3)

// sportsEl.addEventListener('change',(event)=>{
//     console.log(event.target[event.target.selectedIndex]);
//     console.log(`Selected Sports: ${event.target[event.target.selectedIndex].value}`);
// })






// console.dir(inputEl)

// const handle  =  (event) =>{
//     event.preventDefault()
//     const totalValues = new FormData(formEl);

//     const multiarr = [...totalValues.entries()];

    // console.log(multiarr);
    
    //formurl = name=dhanush&issues=on&email=jessepvt03p%40gmail.com&textarea=feeed&checkbox=on
    
    
//    const multiarr2 = multiarr.map(([key,values])=>
//         `${encodeURIComponent(key)}=${encodeURIComponent(values)}`
 //     ).join("&")

//       console.log(multiarr2);

//        const multiarr3 = new URLSearchParams(multiarr).toString();
    
//     console.log(multiarr3);

        // const multiarr4 = JSON.stringify(Object.fromEntries(multiarr));

        // console.log(multiarr4);

        // "https://reqres.in/api/users?page=2"

        // const htp = new XMLHttpRequest()

        // htp.open("GET","https://reqres.in/api/users/2",true);

        // htp.onload = ( function(){
        //     const resp = JSON.parse(htp.responseText);
        //      document.getElementById("response").innerText = resp.data.first_name;
        // })

        // htp.send();



        //fetch

        // fetch("https://reqres.in/api/users?page=2",{
        //     method:"GET",
        //      headers:
        //     {
        //        'Content-Type': "application/Json"
        //     },
        //      body:JsonData
        // })
        // .then((res) => res.json())
        // .then((data)=>
        // {
        //     document.getElementById("response").innerText = JSON.stringify(data.data);
        // })

    //    console.log(JSON.stringify(data))
// }


// const stringDtat = 

// formEl.addEventListener('submit',handle);










