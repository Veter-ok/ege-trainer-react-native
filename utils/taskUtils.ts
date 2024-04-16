export const isTaskInArray = (task:IMissedLatter, array:IMissedLatter[]):boolean => {
    for (let i = 0; i < array.length; i++){
        if (array[i].id == task.id){
            return true
        }
    }
    return false
}