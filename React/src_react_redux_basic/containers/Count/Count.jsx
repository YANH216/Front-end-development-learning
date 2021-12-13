// 引入connect连接UI组件
import { connect } from 'react-redux'

import CountUI from '../../components/Count_react_redux_version/CountUI'

import { createIncrementAction, 
         createDecrementAction, 
         createIncrementAsyncAction } from '../../redux/create_action'

//#region 一般写法
/* 
// 返回值是key: value，key是作为传递给UI组件的key，value是作为传递给UI组件的状态
const mapStateToProps = (state) => {
    return(
        {
            count: state
        }
    )
}

// 返回值是key: value，key是作为传递给UI组件的key，value是作为传递给UI组件的操作状态的方法(action对象)
// 可优化(这部分可以传入两种类型的参数，一种是函数如下方，一种是对象，当传入参数为对象时，react-redux会自动dispatch)

const mapDispatchToprops = (dispatch) => {
    return(
        {
            Incre: (data) => {
                dispatch(createIncrementAction(data))
            },
            Decre: (data) => {
                dispatch(createDecrementAction(data))
            },
            IncreAsync: (data, time) => {
                dispatch(createIncrementAsyncAction(data, time))
            }
        }
    )
}
export default connect(mapStateToProps, mapDispatchToprops)(CountUI)
 */
//#endregion

export default connect(
    state => ({ count: state }), 
    {
        Incre: createIncrementAction,
        Decre: createDecrementAction,
        IncreAsync: createIncrementAsyncAction
    })
    (CountUI)

