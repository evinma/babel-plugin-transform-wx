export default () => ({
    name: 'babel-plugin-transform-wx',
    visitor: {
        MemberExpression (path, { opts: { target = 'qq' } }) {
            const { node: { object } } = path
            if (object.name === 'wx') {
                object.name = target
            }
        },
    },
})
