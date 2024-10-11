weatherData=[
    {district: 'Thrissur',weather: 32},
    {district: 'Kottayam' ,weather: 29},
    {district: 'Palakkad',weather:34},
    {district: 'Ernakulam',weather: 33},
    {district: 'Thrissur',weather: 29},
    {district: 'Kottayam',weather: 30},
    {district: 'Palakkad',weather: 32},
    {district: 'Ernakulam' ,weather: 31}
]
//print district with its highest temparature 
//output: (lhrissur:32, Kottayam:30,Palakkad: 34, Ernakulam:33}

//1)create output object
wd = {}
//2)access each items from the weatherData array
for(let data of weatherData){
    dis = data.district
    currTemp = data.weather  
    //3) check district is there in the output object
    if(dis in wd){
        oddTemp = wd[dis]
        //4)compare the temperature
        if(oddTemp>currTemp){
            wd[dis] = oddTemp
        }
        else{//5)if new value is greater than old value
            wd[dis] = currTemp
        }
    }
    else{//if district is not present in the o/p object
        wd[dis] = currTemp
    }
}

console.log(wd);

