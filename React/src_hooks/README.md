setState更新状态的两种写法
(1) setState(stateChange, [callback])-----对象式的setState
    1.stateChange为状态改变对象(该对象可以体现出状态的更改)
    2.callback是可选的回调函数，它在状态更新完毕，界面也更新后(render调用后)才被调用

(2) setState(updater, [callback]) ----- 函数式的setState
    1.updater为返回stateChange对象的函数
    2.updater可以接收到state和props
    3.callback是可选的回调函数，它在状态更新、界面更新后(render调用后)才被调用


总结：
    1.对象式的setState是函数式的setState的简写方式
    2.使用原则：
        (1) 如果新状态不依赖于原状态 ===> 使用对象方式
        (2) 如果新状态依赖于原状态 ===> 使用函数方式
        (2) 如果需要setState() 执行后获取最新的状态数据，要在第二个callback函数中读取


useEffect
(1) Effect Hook可以在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2) React中的副作用操作
        发ajax请求数据获取
        设置订阅/启动定时器
        手动更新真实DOM
(3) 语法和说明：
        useEffect(() => {
            // 在此可以执行任何带副作用操作
            return {  // 在组件卸载前执行
                // 在此做一些收尾工作，比如清除定时器/取消订阅等
            }
        }, [stateValue])
(4) useEffect相当于以下三个生命周期钩子的组合
    componentDidMount()  // 不设置[]里的值
        useEffect(() => {

        }, []) // 在组件挂载时执行

    componentDidUpdate()  // 设置[]里的值，监测[]里的值
        useEffect(() => {

        }, [number]) // 在number值发生改变时执行

    componentWillUnmount()     // 返回一个函数，会在组件卸载前执行
        useEffect(() => {

            return {
                () => {}
            }
        }, []) // return 中的函数，在组件将要卸载时执行
