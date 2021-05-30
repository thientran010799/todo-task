export default{
    changeStatus(context, data) {
         console.log(data)
         context.commit("changeStatus", data)
    }
}