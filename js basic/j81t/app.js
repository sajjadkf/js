var taskArray ={
    ali : ["html" ,"css" , "js"],
    amin : ["react" , "vue" ,"angular"],
    mohammad: ["seo" , "linkbulding"],
    amir: ["admin" ,"content"]
}

var newtaskname = prompt("enter the new tasks : ")
var employName = prompt("enter the employ name :")

var employtask = taskArray[employName]
employtask.push(newtaskname)

console.log(taskArray)