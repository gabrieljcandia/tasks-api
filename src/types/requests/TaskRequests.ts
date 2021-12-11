export interface GetTasks {
    quantity: number
}

export interface EditTask {
    uuid: string,
    title: string,
    completed: boolean
}