import { loadUA, loadData } from "./actions"

describe('testing actons', () => {
    it('loadUA', (done) => {
        const get = jest.fn()
        const data = {}
        get.mockReturnValue(Promise.resolve({ data }))

        let callNumber = 0
        const dispatch = jest.fn(params => {
            if (callNumber === 0) {
                expect(params).toEqual({ type: 'LOAD_UA_REQUEST' })
            }
            if (callNumber === 1) {
                expect(params).toEqual({
                    type: 'LOAD_UA_SUCCESS',
                    data: data
                })
                done()
            }
            callNumber++
        })

        const axiosMock = {
            get,
        }
        loadUA(axiosMock)(dispatch)
    })
    it('loadData', (done) => {
        const get = jest.fn()
        const data = {}
        get.mockReturnValue(Promise.resolve({ data }))

        let callNumber = 0
        const dispatch = jest.fn(params => {
            if (callNumber === 0) {
                expect(params).toEqual({ type: 'LOAD_DATA_REQUEST' })
            }
            if (callNumber === 1) {
                expect(params).toEqual({
                    type: 'LOAD_DATA_SUCCESS',
                    data: data
                })
                done()
            }
            callNumber++
        })

        const axiosMock = {
            get,
        }
        loadData(axiosMock)(dispatch)
    })
})