let submit = document.getElementById('submit');
let result = document.getElementById('result');

submit.addEventListener("click", function(){
    let cc = document.getElementById('displacement').value;
    let rpm = document.getElementById('maxRpm').value;
    console.log(cc);
    console.log(rpm);
    let cfm = (cc * rpm) / 3456;
    let final = Math.trunc(cfm)
    result.innerHTML= final + " CFM";
    console.log(final);
});

