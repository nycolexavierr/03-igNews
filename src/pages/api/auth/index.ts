import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { i: 1, name: 'Diego'},
        { i: 2, name: 'Dani'},
        { i: 3, name: 'Rafa'},
    ]

    return response.json(users)
}