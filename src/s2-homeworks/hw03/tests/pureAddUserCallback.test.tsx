import { pureAddUserCallback, UserType } from '../HW3'

test('name 1', () => {
    const initialState: UserType[] = []

    const setUsers = (newUsers: UserType[] | ((prev: UserType[]) => UserType[])) => {
        if (typeof newUsers === 'function') {
            // если вызвали с функцией (как React делает), вызываем её с текущим состоянием
            initialState.push(...newUsers(initialState))
        } else {
            initialState.push(...newUsers)
        }
    }

    pureAddUserCallback('name', setUsers, initialState)

    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
