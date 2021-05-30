export default{
    changeStatus(state, data) {
        //console.log(data)
        // context.commit("changeStatus")
        // console.log(context.state.tasks[0].status)
        state.tasks[data.idSelected -1].status = data.statusSelected
    }
}