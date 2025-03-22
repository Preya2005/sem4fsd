data=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
dic={}
for(i=0;i<data.length;i++){
    data2=data[i]
    dic[data2[0]]=data2[1]
}
console.log(dic)