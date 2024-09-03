//#1
let array = [1,2,3,4,5,6,7,8,9,10,11]
let chet =[]
let nechet=[]
let sum = 0
for(let i = 0; i < array.length;i++) {
    if(array[i]%2){
        nechet.push(array[i])
    } else if(array[i]%2==0){
        chet.push(array[i])

    }
}
console.log(chet);
console.log(nechet);
//#1

//#2





let ar = [];

for (let i = 0; i < Infinity; i++) {
    let word = prompt('Введите слово');
    let command = word.split(', ')
    if(word == 'stop') {
              break}
    if (word.startsWith('add, ')) {
        ar.push(command[1]);
        
    }else if(word.startsWith('del, ')){
        for(let i=0; i < ar.length; i++){
            ar[i]==command[1] ? ar.splice(i,1) : ''
            
        }

    }
    console.log(ar);

}

//#2